import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bank_card_no_key", ["bankCardNo"], {})
@Index("cust_id_key", ["custId"], {})
@Entity("cust_bank_card", { schema: "dc_scm_payment" })
export class CustBankCard {
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

  @Column("varchar", {
    name: "account_name",
    nullable: true,
    comment: "账户名称",
    length: 300,
  })
  accountName: string | null;

  @Column("varchar", {
    name: "bank_card_no",
    nullable: true,
    comment: "卡号",
    length: 50,
  })
  bankCardNo: string | null;

  @Column("varchar", {
    name: "bank_name",
    nullable: true,
    comment: "所属银行",
    length: 300,
  })
  bankName: string | null;

  @Column("varchar", {
    name: "bank_branch",
    nullable: true,
    comment: "开户行",
    length: 50,
  })
  bankBranch: string | null;

  @Column("smallint", {
    name: "bank_type",
    nullable: true,
    comment: "账户类型，1-平台监管户，2-一般结算户，3-保证金账户，4-还款专户",
  })
  bankType: number | null;

  @Column("bigint", { name: "cust_id", nullable: true, comment: "企业id" })
  custId: string | null;
}
