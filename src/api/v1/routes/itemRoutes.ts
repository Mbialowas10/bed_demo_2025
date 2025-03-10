import express, {Router} from "express";
import { validateRequest } from "../middleware/validate";
import { itemSchema } from "../validations/itemValidation";
import {
	getAllItems,
	createItem,
	updateItem,
	deleteItem,
} from "../controllers/itemController";

import { authenticate}  from "../middleware/authenticate";
import { isAuthorized} from "../middleware/authorize"


const router: Router = express.Router();

/**
 * @openapi
 * /items:
 *   get:
 *     summary: Retrieve a list of items
 *     tags: [Item]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 */
router.get("/", authenticate, getAllItems);

/**
 * @openapi
 * /items:
 *   post:
 *     summary: Create a new item
 *     tags: [Item]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       201:
 *         description: Item created
 *       400:
 *         description: Invalid input
 */
router.post(
	"/", // /items 
	authenticate,
	isAuthorized({hasRole: ["admin", "manager"] }),
	validateRequest(itemSchema), 
	createItem
);
router.put(
	"/:id", 
	authenticate,
	isAuthorized({hasRole:[ "admin","manager"]} ),
	validateRequest(itemSchema), 
	updateItem
);
router.delete(
	"/:id", 
	authenticate,
	isAuthorized({hasRole:[ "admin","manager"]} ),
	deleteItem
);

export default router;