import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bind_bus_no_key", ["bindBusNo"], { unique: true })
@Index("cust_id_key", ["custId"], {})
@Entity("bank_account_record", { schema: "dc_scm_payment" })
export class BankAccountRecord {
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
    nullable: true,
    comment: "删除标识：0-正常，1-删除",
    width: 1,
    default: () => "'0'",
  })
  delFlag: boolean | null;

  @Column("bigint", { name: "account_id", comment: "内部簿记户表id" })
  accountId: string;

  @Column("bigint", {
    name: "bank_card_id",
    nullable: true,
    comment: "企业结算户表id",
  })
  bankCardId: string | null;

  @Column("smallint", {
    name: "operate_type",
    comment: "操作类型，1-绑定，2-变更，3-解绑",
  })
  operateType: number;

  @Column("smallint", {
    name: "operate_sta",
    comment: "操作状态，0-处理中，1-成功，2-失败",
  })
  operateSta: number;

  @Column("bigint", { name: "cust_id", comment: "企业id" })
  custId: string;

  @Column("varchar", {
    name: "bind_bus_no",
    unique: true,
    comment: "业务编号",
    length: 50,
  })
  bindBusNo: string;
}
