import { Column, Entity } from "typeorm";

@Entity("scb_trade_register_apply", { schema: "scb_bill" })
export class ScbTradeRegisterApply {
  @Column("bigint", { primary: true, name: "id", comment: "自增主键" })
  id: string;

  @Column("bigint", {
    name: "attach_rel_id",
    comment: "附件关联表id,外键指向 scb_trade_bg_rel.id",
  })
  attachRelId: string;

  @Column("bigint", {
    name: "register_id",
    comment: "登记表id,外键指向 scb_trade_register.id",
  })
  registerId: string;

  @Column("bigint", { name: "bill_id", comment: "票据Id，外键指向 票据表.id" })
  billId: string;

  @Column("varchar", {
    name: "bill_no",
    comment: "票据（包）号，外键指向 票据表.票据号",
    length: 32,
  })
  billNo: string;

  @Column("varchar", {
    name: "subticket_interval",
    comment: "票据子票区间",
    length: 30,
  })
  subticketInterval: string;

  @Column("decimal", {
    name: "trade_amt",
    comment: "交易金额",
    precision: 20,
    scale: 2,
  })
  tradeAmt: string;

  @Column("varchar", {
    name: "trade_mode",
    comment: "贸易方式，货物贸易：1，服务贸易：2 货服贸易：3",
    length: 1,
  })
  tradeMode: string;

  @Column("varchar", {
    name: "buyer_name",
    nullable: true,
    comment: "购买方名称",
    length: 128,
  })
  buyerName: string | null;

  @Column("varchar", {
    name: "buyer_usci",
    comment: "购买方统一社会信用码",
    length: 30,
  })
  buyerUsci: string;

  @Column("varchar", {
    name: "buyer_channel_name",
    comment: "购买方业务办理渠道名称",
    length: 100,
  })
  buyerChannelName: string;

  @Column("varchar", {
    name: "buyer_rec_type",
    comment: "购买方识别类型，票据账户：，银行账户： ",
    length: 2,
  })
  buyerRecType: string;

  @Column("varchar", {
    name: "buyer_bill_account",
    comment: "购买方票据账号",
    length: 30,
  })
  buyerBillAccount: string;

  @Column("varchar", {
    name: "buyer_bank_account",
    comment: "购买方银行账户",
    length: 20,
  })
  buyerBankAccount: string;

  @Column("varchar", {
    name: "buyer_bank_account_name",
    comment: "购买方银行账户名称",
    length: 50,
  })
  buyerBankAccountName: string;

  @Column("varchar", {
    name: "buyer_open_bank_parti_name",
    comment: "购买方银行账户开户行机构参与者名称",
    length: 100,
  })
  buyerOpenBankPartiName: string;

  @Column("varchar", {
    name: "seller_name",
    nullable: true,
    comment: "购买方名称",
    length: 128,
  })
  sellerName: string | null;

  @Column("varchar", {
    name: "seller_usci",
    comment: "销售方统一社会信用码",
    length: 30,
  })
  sellerUsci: string;

  @Column("varchar", {
    name: "seller_channel_name",
    comment: "销售方业务办理渠道名称",
    length: 100,
  })
  sellerChannelName: string;

  @Column("varchar", {
    name: "seller_rec_type",
    comment: "销售方识别类型，票据账户：，银行账户： ",
    length: 2,
  })
  sellerRecType: string;

  @Column("varchar", {
    name: "seller_bill_account",
    comment: "销售方票据账号",
    length: 30,
  })
  sellerBillAccount: string;

  @Column("varchar", {
    name: "seller_bank_account",
    comment: "销售方银行账户",
    length: 20,
  })
  sellerBankAccount: string;

  @Column("varchar", {
    name: "seller_bank_account_name",
    comment: "销售方银行账户名称",
    length: 50,
  })
  sellerBankAccountName: string;

  @Column("varchar", {
    name: "seller_open_bank_parti_name",
    comment: "销售方银行账户开户行机构参与者名称",
    length: 100,
  })
  sellerOpenBankPartiName: string;

  @Column("datetime", { name: "apply_date", comment: "申请日期" })
  applyDate: Date;

  @Column("datetime", { name: "send_date", comment: "发送日期" })
  sendDate: Date;

  @Column("varchar", {
    name: "apply_res",
    nullable: true,
    comment: "发送申请返回结果",
    length: 120,
  })
  applyRes: string | null;

  @Column("varchar", { name: "reg_state", comment: "登记状态，", length: 2 })
  regState: string;

  @Column("varchar", { name: "buss_state", comment: "业务状态，", length: 2 })
  bussState: string;

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
