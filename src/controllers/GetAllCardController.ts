import { Request, Response } from "express";
import { GetAllCardService } from "../database/services/GetAllCardService";

export class GetALLCardController {
    async handle(request: Request, response: Response) {
        const service = new GetAllCardService();
        const card = await service.execute();
        
        return response.json(card)

    }
}