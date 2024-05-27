import { Column, Entity } from "typeorm";

@Entity("test_jdbctemplate", { schema: "dc_scm_payment_test" })
export class TestJdbctemplate {
  @Column("int", { name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;
}
