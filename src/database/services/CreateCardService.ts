import { getRepository } from 'typeorm';
import { Card } from '../entities/Card';


type CardRequest = {
    name: string;
    description: string;
}

export class CreateCardService {
    async execute({ name, description }: CardRequest): Promise<Card | Error> {
        const repository = getRepository(Card);
        //SELECT * FROM card WHERE name='name' LIMIT 1
        if (await repository.findOne({name})){
            return new Error('Card already exists');
        }
            
        const card = repository.create({
            name,
            description,
        });

        await repository.save(card);

        return card;
    }
}
