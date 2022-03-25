import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateImages1648047995248 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'image',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'description',
                        type: 'varchar'
                    },
                    {
                        name: "card_id",
                        type: "uuid"
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_card",
                        columnNames: ["card_id"],
                        referencedTableName: "card",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("image");
    }

}
