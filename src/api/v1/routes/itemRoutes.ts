import express from "express";
import { validateRequest } from "../middleware/validate";
import { itemSchema } from "../validations/itemValidation";
import {
	getAllItems,
	createItem,
	updateItem,
	deleteItem,
} from "../controllers/itemController";

const router = express.Router();

router.get("/", getAllItems);
router.post("/", validateRequest(itemSchema), createItem);
router.put("/:id", validateRequest(itemSchema), updateItem);
router.delete("/:id", deleteItem);

export default router;