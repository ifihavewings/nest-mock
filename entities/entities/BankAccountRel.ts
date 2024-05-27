import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bind_key", ["accountId", "bankCardId", "bindSta"], { unique: true })
@Entity("bank_account_rel", { schema: "dc_scm_payment_test" })
export class BankAccountRel {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键id" })
  id: string;

  @Column("datetime", { name: "create_time", comment: "创建时间" })
  createTime: Date;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    comment: "更新时间",
  })
  updateTime: Date | null;

  @Column("bigint", { name: "create_id", nullable: true, comment: "创建人id" })
  createId: string | null;

  @Column("bigint", { name: "update_id", nullable: true, comment: "修改人id" })
  updateId: string | null;

  @Column("tinyint", {
    name: "del_flag",
    comment: "删除标识：0-正常，1-删除",
    width: 1,
    default: () => "'0'",
  })
  delFlag: boolean;

  @Column("bigint", { name: "account_id", comment: "内部簿记户表id" })
  accountId: string;

  @Column("bigint", { name: "bank_card_id", comment: "企业结算户表id" })
  bankCardId: string;

  @Column("smallint", {
    name: "bind_type",
    nullable: true,
    comment:
      "绑定账户类型，0-绑定出入金账户，1-绑定白名单1,2-绑定白名单2,3-绑定白名单3",
  })
  bindType: number | null;

  @Column("smallint", {
    name: "bind_sta",
    comment: "绑定状态，1-已绑定，2-已解绑",
  })
  bindSta: number;
}
