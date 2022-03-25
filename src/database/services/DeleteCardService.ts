import { getRepository } from "typeorm";
import { Card } from "../entities/Card";

export class DeleteCardService {
    async execute(id: string) {
        const repository = getRepository(Card);
        if (!await repository.findOne(id)) {
            return new Error('Card does not exists!');
        }

        await repository.delete(id);
    }
}