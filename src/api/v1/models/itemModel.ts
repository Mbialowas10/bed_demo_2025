export interface Item {
	id: string;
	name: string;
	description: string;
	price?: number;
	createdAt: Date;
	updatedAt: Date;
}