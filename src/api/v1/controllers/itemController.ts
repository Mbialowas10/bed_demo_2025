import { Request, Response, NextFunction } from "express";
import * as itemService from "../services/itemService";
import type { Item } from "../services/itemService";


export const getAllItems = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        const items: Item[] = await itemService.fetchAllItems();
        res.status(200).json({message: "Items retrieved", data: items});
    }catch(error){
        next(error);
    }
};

export const createItem = async(
    req: Request,
    res: Response,
    next: NextFunction 
): Promise<void> => {
    try {
        const newItem: Item = await itemService.createItem(req.body);
        res.status(201).json({message: "Item created", data: newItem});
    }catch(error){
        next(error);
    }
};

export const updateItem = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const updatedItem: Item = await itemService.updateItem(
            req.params.id,
            req.body
        );
        res.status(200).json({message: "Item updated", data: updatedItem});

    }catch (error){
        next(error);
    }
};

export const deleteItem = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        await itemService.deleteItem(req.params.id);
        res.status(200).json({message: "Item deleted"});
    }catch(error){
        next(error);
    }
};
