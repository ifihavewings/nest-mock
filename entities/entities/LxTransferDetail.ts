import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("credit_id_key", ["creditId"], { unique: true })
@Index("credit_bill_no_key", ["creditBillCode"], { unique: true })
@Entity("lx_transfer_detail", { schema: "dc_scm_payment" })
export class LxTransferDetail {
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

  @Column("bigint", { name: "cust_id", comment: "持有龙信企业id" })
  custId: string;

  @Column("varchar", {
    name: "cust_name",
    nullable: true,
    comment: "持有龙信企业名称",
    length: 200,
  })
  custName: string | null;

  @Column("varchar", {
    name: "cust_credit",
    nullable: true,
    comment: "持有龙信企业统一社会信用代码",
    length: 50,
  })
  custCredit: string | null;

  @Column("bigint", { name: "core_cust_id", comment: "核心企业id" })
  coreCustId: string;

  @Column("varchar", {
    name: "core_cust_name",
    nullable: true,
    comment: "核心企业名称",
    length: 200,
  })
  coreCustName: string | null;

  @Column("varchar", {
    name: "core_cust_credit",
    nullable: true,
    comment: "核心企业统一社会信用代码",
    length: 50,
  })
  coreCustCredit: string | null;

  @Column("bigint", { name: "credit_id", unique: true, comment: "龙信id" })
  creditId: string;

  @Column("varchar", {
    name: "credit_bill_code",
    nullable: true,
    unique: true,
    comment: "龙信编号",
    length: 100,
  })
  creditBillCode: string | null;

  @Column("varchar", {
    name: "parent_credit_code",
    nullable: true,
    comment: "父龙信编号",
    length: 100,
  })
  parentCreditCode: string | null;

  @Column("int", { name: "deepth", comment: "龙信层级，0-顶级，1-一级，...." })
  deepth: number;

  @Column("decimal", {
    name: "hold_amount",
    nullable: true,
    comment: "持有龙信金额",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  holdAmount: string | null;

  @Column("decimal", {
    name: "fnc_amount",
    nullable: true,
    comment: "龙信融资金额",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  fncAmount: string | null;

  @Column("smallint", {
    name: "cash_sta",
    comment:
      "兑付状态，0-待兑付，1-核心企业企业结算户出金处理中，2-核心企业结算户出金处理失败，3-核心企业结算户出金成功4-核心企业兑付处理中，5-核心企业兑付成功，6-核心企业兑付失败，7-融资还款处理中，8-融资还款失败，9-融资还款成功，10-提现处理中，11-提现失败，12-提现成功，13-兑付成功，，其中1,3,4,5,7，9，10,12属于兑付处理中,2,6，8，11属于兑付失败",
  })
  cashSta: number;

  @Column("date", { name: "payment_date", comment: "承诺付款日期" })
  paymentDate: string;

  @Column("decimal", {
    name: "credit_bill_amount",
    comment: "龙信金额",
    precision: 18,
    scale: 2,
  })
  creditBillAmount: string;

  @Column("smallint", {
    name: "all_cashed",
    comment: "龙信是否全部完成兑付,0-未完成全部兑付，1-完成全部兑付",
    default: () => "'0'",
  })
  allCashed: number;
}
