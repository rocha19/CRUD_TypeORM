import { Request, Response } from "express";
import { DeleteCardService } from "../database/services/DeleteCardService";


export class DeleteCardController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const service = new DeleteCardService();
        const result = await service.execute(id);

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.status(204).end();
    }
}
