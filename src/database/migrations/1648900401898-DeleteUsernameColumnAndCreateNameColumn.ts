import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteUsernameColumnAndCreateNameColumn1648900401898
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn("users", "username", "name");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn("users", "name", "username");
  }
}
