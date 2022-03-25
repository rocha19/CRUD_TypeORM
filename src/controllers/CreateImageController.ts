import { Request ,Response } from "express";
import { CreateImageService } from "../database/services/CreateImageService";


export class CreateImageController {
    async handle(request: Request, response: Response) {
        const { name, description, card_id } = request.body;
        const service = new CreateImageService();
        const result = await service.execute({
            name,
            description,
            card_id
        });

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result);
    }
}