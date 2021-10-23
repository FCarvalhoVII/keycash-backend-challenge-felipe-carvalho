import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRealty1634777978030 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "realtys",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        generationStrategy: "increment",
                        isGenerated: true,
                        isUnique: true,
                        isPrimary: true
                    },
                    {
                        name: "price",
                        type: "int"
                    },
                    {
                        name: "type",
                        type: "varchar"
                    },
                    {
                        name: "size",
                        type: "int"
                    },
                    {
                        name: "parkingSpace",
                        type: "int"
                    },
                    {
                        name: "bedroom",
                        type: "int"
                    },
                    {
                        name: "bathroom",
                        type: "int"
                    },
                    {
                        name: "city",
                        type: "varchar"
                    },
                    {
                        name: "state",
                        type: "varchar"
                    },
                    {
                        name: "neighborhood",
                        type: "varchar"
                    },
                    {
                        name: "address",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("realtys")
    }

}
