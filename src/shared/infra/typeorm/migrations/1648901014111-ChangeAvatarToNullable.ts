import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class ChangeAvatarToNullable1648901014111 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "users",
      "avatar",
      new TableColumn({
        name: "avatar",
        type: "varchar",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "users",
      "avatar",
      new TableColumn({
        name: "avatar",
        type: "varchar",
        isNullable: false,
      })
    );
  }
}
