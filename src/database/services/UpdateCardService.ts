import { getRepository } from "typeorm";
import { Card } from "../entities/Card";

type CardUpdateRequest = {
    id: string;
    name: string;
    description: string;
};

export class UpdateCardService {
    async execute({id, name, description}: CardUpdateRequest) {
        const repository = getRepository(Card);
        const card = await repository.findOne(id);

        if (!card) {
            return new Error("Category")
        }

        card.name = name ? name : card.name;
        card.description = description ? description : card.description;

        await repository.save(card)

        return card
    }
}