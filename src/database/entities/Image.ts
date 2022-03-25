import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Card } from './Card';

@Entity('image')
export class Image {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    card_id: string;

    @ManyToOne(() => Card)
    @JoinColumn({ name: 'card_id' })
    user: Card;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}