import { getRepository } from "typeorm";
import { Card } from "../entities/Card";

export class GetAllCardService {
    async execute() {
        const repository = getRepository(Card);

        const card = await repository.find();

        return card;
    }
}