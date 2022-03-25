import { getRepository } from "typeorm";
import { Card } from "../entities/Card";
import { Image } from "../entities/Image";

type ImageRequest = {
    name: string;
    description: string;
    card_id: string;
}

export class CreateImageService {
    async execute({
        name,
        description,
        card_id,
    }: ImageRequest): Promise<Error | Image> {
        const repository = getRepository(Image);
        const repositoryCard = getRepository(Card);

        if (!(await repositoryCard.findOne(card_id))) {
            return new Error('Category does not exists!')
        }

        const image = repository.create({ name, description, card_id });

        await repository.save(image)

        return image;

    }
}