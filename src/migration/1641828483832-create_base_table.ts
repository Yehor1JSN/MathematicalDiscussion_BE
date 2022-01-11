import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class createBaseTable1641828483832 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'message',

                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'parent_message_id',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'sender_name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'post',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                        isNullable: false,
                    },
                ]
            }),
            true
        );

        await queryRunner.createForeignKey('message', new TableForeignKey({
            name: 'fk_discussion_parent_message_id',
            columnNames: ['parent_message_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'message',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('message');
    }

}
