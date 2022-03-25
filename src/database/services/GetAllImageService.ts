import { getRepository } from "typeorm";
import { Image } from "../entities/Image";


export class GetAllImageService {
    async execute() {
        const repository = getRepository(Image);
        const image = await repository.find({
            relations: ['user']
        });

        return image;
    }
}