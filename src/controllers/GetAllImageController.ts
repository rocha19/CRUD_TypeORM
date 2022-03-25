import { Request, Response, response } from "express";
import { GetAllImageService } from "../database/services/GetAllImageService";


export class GetAllImageController {
    async handle(request: Request, response: Response) {
        const service = new GetAllImageService();
        const image = await service.execute();
        return response.json(image);

    }
}