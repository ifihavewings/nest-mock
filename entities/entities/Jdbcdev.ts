import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("user_id", ["userId"], {})
@Entity("jdbcdev", { schema: "dc_scm_payment" })
export class Jdbcdev {
  @PrimaryGeneratedColumn({ type: "bigint", name: "account_id" })
  accountId: string;

  @Column("bigint", { name: "user_id", comment: "用户Id" })
  userId: string;

  @Column("varchar", {
    name: "account",
    comment: "标识：手机号、邮箱、 用户名、或第三方应用的唯一标识",
    length: 255,
  })
  account: string;
}
