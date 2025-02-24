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


router.get("/", authenticate, getAllItems);

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