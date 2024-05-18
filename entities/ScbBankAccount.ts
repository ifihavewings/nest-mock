import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_scb_bank_account_1", ["custId"], {})
@Entity("scb_bank_account", { schema: "scb_bill" })
export class ScbBankAccount {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键id" })
  id: string;

  @Column("bigint", {
    name: "cust_id",
    comment: "企业id，外键指向 cust_info_m.cust_id",
  })
  custId: string;

  @Column("varchar", {
    name: "bank_account",
    nullable: true,
    comment: "银行账号",
    length: 20,
  })
  bankAccount: string | null;

  @Column("varchar", {
    name: "bank_name",
    nullable: true,
    comment: "银行账户名称",
    length: 50,
  })
  bankName: string | null;

  @Column("varchar", {
    name: "open_bank_no",
    nullable: true,
    comment: "银行开户行行号",
    length: 20,
  })
  openBankNo: string | null;

  @Column("varchar", {
    name: "open_bank_name",
    nullable: true,
    comment: "银行开户行名称",
    length: 50,
  })
  openBankName: string | null;

  @Column("varchar", {
    name: "open_sub_bank_no",
    nullable: true,
    comment: "银行开户行支行行号",
    length: 20,
  })
  openSubBankNo: string | null;

  @Column("varchar", {
    name: "open_sub_bank_name",
    nullable: true,
    comment: "银行开户行支行名称",
    length: 50,
  })
  openSubBankName: string | null;

  @Column("varchar", {
    name: "bank_account_type",
    nullable: true,
    comment:
      "银行类型 基本存款  一般存款  专用存款 临时存款 人名币NRA账户 其他账户",
    length: 2,
  })
  bankAccountType: string | null;

  @Column("decimal", {
    name: "driblet_auth_amt",
    comment: "小额鉴权金额",
    precision: 6,
    scale: 2,
  })
  dribletAuthAmt: string;

  @Column("char", {
    name: "driblet_auth_flag",
    nullable: true,
    comment: "鉴权标识，已鉴权：1，未鉴权：0",
    length: 1,
  })
  dribletAuthFlag: string | null;

  @Column("char", {
    name: "report_flag",
    nullable: true,
    comment: "报备状态，已报备：1，未报备：0",
    length: 1,
  })
  reportFlag: string | null;

  @Column("char", {
    name: "delete_flag",
    comment: "删除标识，是：1，否：0",
    length: 1,
    default: () => "'0'",
  })
  deleteFlag: string;

  @Column("datetime", {
    name: "create_time",
    comment: "创建时间",
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date;

  @Column("bigint", { name: "create_by", comment: "创建人ID", unsigned: true })
  createBy: string;

  @Column("varchar", { name: "creator", comment: "创建人名称", length: 30 })
  creator: string;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    comment: "修改时间",
  })
  updateTime: Date | null;

  @Column("bigint", {
    name: "update_by",
    nullable: true,
    comment: "修改人ID",
    unsigned: true,
  })
  updateBy: string | null;

  @Column("varchar", {
    name: "updater",
    nullable: true,
    comment: "更新人名称",
    length: 30,
  })
  updater: string | null;

  @Column("bigint", {
    name: "revision",
    comment: "修改版本号",
    unsigned: true,
    default: () => "'0'",
  })
  revision: string;
}
