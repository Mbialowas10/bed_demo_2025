import {Item} from "../models/itemModel"

import {
    createDocument,
    getDocuments,
    updateDocument,
    deleteDocument
} from "../respositories/firestoreRepository"


const COLLECTION = "items"

export const getAllItems = async() : Promise<Item[]> => {
    const snapshot = await getDocuments(COLLECTION);
    return snapshot.docs.map((doc) => {
        const data = doc.data();
        return {id:doc.id, ...data} as Item;
    })
};


export const createItem = async (item: Partial<Item>): Promise<Item> => {
	const id = await createDocument(COLLECTION, item);
	return { id, ...item } as Item;
};

export const updateItem = async (
	id: string,
	item: Partial<Item>
): Promise<Item> => {
	await updateDocument(COLLECTION, id, item);
	return { id, ...item } as Item;
};



export const deleteItem = async (id: string): Promise<void> => {
	await deleteDocument(COLLECTION, id);
};
//
