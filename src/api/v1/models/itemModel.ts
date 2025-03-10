/**
 * @openapi
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for an item
 *         name:
 *           type: string
 *           description: The name of the item
 *         description:
 *           type: string
 *           description: The description of the item
 *         price:
 *           type: number
 *           description: The price of the item
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the item was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the item was last updated
 */export interface Item {
	id: string;
	name: string;
	description: string;
	price?: number;
	createdAt: Date;
	updatedAt: Date;
}