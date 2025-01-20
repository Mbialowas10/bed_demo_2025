export type Item = {
    id: string;
    name: string;
    description: string;
};

const items: Item[] = [];

export const fetchAllItems = async() : Promise<Item[]> => {
    return items;
};

export const createItem = async( item: {
    name:string;
    description: string;
}): Promise<Item> => {
    const newItem: Item = { id: Date.now().toString(), ...item};
    items.push(newItem);
    return newItem;
};

export const updateItem = async(
    id: string,
    item: {name:string, description: string}
) : Promise<Item> => {
    const index: number = items.findIndex((i) => i.id === id);
    if(index === -1){
        throw new Error(`Item with ID ${id} not found`);
    }
    items[index] = {id, ...item };
    return items[index];
};
