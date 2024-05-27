import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("trans_no_key", ["transNo"], {})
@Index("order_no_key", ["paymentOrderNo"], {})
@Entity("pay_trans_record", { schema: "dc_scm_payment_test" })
export class PayTransRecord {
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

  @Column("bigint", { name: "create_id", comment: "创建人id" })
  createId: string;

  @Column("bigint", { name: "update_id", nullable: true, comment: "修改人id" })
  updateId: string | null;

  @Column("tinyint", {
    name: "del_flag",
    comment: "删除标识：0-正常，1-删除",
    width: 1,
    default: () => "'0'",
  })
  delFlag: boolean;

  @Column("decimal", {
    name: "amount",
    nullable: true,
    comment: "交易金额",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  amount: string | null;

  @Column("varchar", {
    name: "payment_order_no",
    comment: "支付订单号",
    length: 50,
  })
  paymentOrderNo: string;

  @Column("varchar", { name: "trans_no", comment: "交易流水号", length: 50 })
  transNo: string;

  @Column("smallint", {
    name: "trans_sta",
    comment: "交易状态，0-处理中，1-成功，2-失败",
  })
  transSta: number;

  @Column("bigint", { name: "lxTrDeId", comment: "龙信最终流转明细表id" })
  lxTrDeId: string;

  @Column("smallint", {
    name: "trans_type",
    comment: "交易类型，1-核心企业兑付， 2-提现,3-融资还款",
  })
  transType: number;

  @Column("smallint", {
    name: "trans_direction",
    comment:
      "资金流转方向，1-实体户出金，2-实体户入金，3-内部簿记户出金，4-内部簿记户入金",
  })
  transDirection: number;

  @Column("bigint", { name: "payor_cust_id", comment: "付款方企业id" })
  payorCustId: string;

  @Column("varchar", {
    name: "payor_account_no",
    comment: "付款方账号",
    length: 50,
  })
  payorAccountNo: string;

  @Column("varchar", {
    name: "payor_trade_mem_code",
    comment: "付款方交易会员代码",
    length: 50,
  })
  payorTradeMemCode: string;

  @Column("bigint", { name: "payee_cust_id", comment: "收款方企业id" })
  payeeCustId: string;

  @Column("varchar", {
    name: "payee_account_no",
    comment: "收款方账号",
    length: 50,
  })
  payeeAccountNo: string;

  @Column("varchar", {
    name: "payee_trade_mem_code",
    comment: "收款方交易会员代码",
    length: 50,
  })
  payeeTradeMemCode: string;

  @Column("varchar", {
    name: "ele_file_path",
    nullable: true,
    comment: "电子回单文件存储地址",
    length: 300,
  })
  eleFilePath: string | null;

  @Column("varchar", {
    name: "trade_abstract",
    nullable: true,
    comment: "摘要信息",
    length: 255,
  })
  tradeAbstract: string | null;

  @Column("varchar", {
    name: "merchant_no",
    nullable: true,
    comment: "商户编号",
    length: 50,
  })
  merchantNo: string | null;

  @Column("date", {
    name: "check_date",
    nullable: true,
    comment: "交易对账日期",
  })
  checkDate: string | null;
}
