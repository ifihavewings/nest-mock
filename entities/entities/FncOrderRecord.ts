import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fnc_bus_no", ["fncBusNo"], {})
@Entity("fnc_order_record", { schema: "dc_scm_payment" })
export class FncOrderRecord {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键id" })
  id: string;

  @Column("varchar", {
    name: "fnc_bus_no",
    comment: "融资业务编号",
    length: 40,
  })
  fncBusNo: string;

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

  @Column("varchar", {
    name: "receive_account_name",
    nullable: true,
    comment: "融资收款账户名称",
    length: 300,
  })
  receiveAccountName: string | null;

  @Column("varchar", {
    name: "receive_account_no",
    nullable: true,
    comment: "融资收款账号",
    length: 50,
  })
  receiveAccountNo: string | null;

  @Column("varchar", {
    name: "receive_open_bank",
    nullable: true,
    comment: "融资收款账户开户行",
    length: 300,
  })
  receiveOpenBank: string | null;

  @Column("varchar", {
    name: "receive_bank_num",
    nullable: true,
    comment: "融资收款账号联行号",
    length: 50,
  })
  receiveBankNum: string | null;

  @Column("varchar", {
    name: "fnc_purpose",
    nullable: true,
    comment: "借款用户编号，见数据字典",
    length: 3,
  })
  fncPurpose: string | null;

  @Column("decimal", {
    name: "fnc_amount",
    nullable: true,
    comment: "融资金额",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  fncAmount: string | null;

  @Column("varchar", {
    name: "credit_bill_code",
    nullable: true,
    comment: "龙信编号",
    length: 150,
  })
  creditBillCode: string | null;

  @Column("bigint", { name: "cust_id", comment: "融资企业id" })
  custId: string;

  @Column("decimal", {
    name: "rcnt_six_amount",
    nullable: true,
    comment: "近六个月供应商与核心企业月均交易金额",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  rcntSixAmount: string | null;

  @Column("decimal", {
    name: "rcnt_two_year_amount",
    nullable: true,
    comment: "近24个月供应商与核心企业月均交易金额",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  rcntTwoYearAmount: string | null;

  @Column("varchar", { name: "fnc_no", comment: "融资编号", length: 40 })
  fncNo: string;

  @Column("int", {
    name: "cust_emp_num",
    nullable: true,
    comment: "融资企业员工数",
    default: () => "'0'",
  })
  custEmpNum: number | null;

  @Column("decimal", {
    name: "cust_reg_amt",
    nullable: true,
    comment: "融资企业注册资金",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  custRegAmt: string | null;

  @Column("decimal", {
    name: "fnc_apply_rate",
    nullable: true,
    comment: "融资申请利率百分比，例3.1234%，存3.1234",
    precision: 6,
    scale: 4,
    default: () => "'0.0000'",
  })
  fncApplyRate: string | null;

  @Column("decimal", {
    name: "bank_fee_rate",
    nullable: true,
    comment: "银行手续费费率百分比，例3.1234%，存3.1234",
    precision: 6,
    scale: 4,
    default: () => "'0.0000'",
  })
  bankFeeRate: string | null;

  @Column("decimal", {
    name: "withhold_charge",
    nullable: true,
    comment: "代扣手续费金额",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  withholdCharge: string | null;

  @Column("smallint", {
    name: "node_type",
    comment: "节点类型 1-供应商申请，2-供应商审核，3-平台审核，4-资金方审核",
  })
  nodeType: number;

  @Column("smallint", {
    name: "node_sta",
    comment:
      "节点状态 0-预留，10-供应商融资申请，11-待供应商融资经办审核，12-供应商融资经办审核通过，13-供应商融资经办审核拒绝，20-平台审核中，21-平台审核通过,22-平台审核拒绝,23-平台补充资料，30-资金方审核中，31-资金方审核通过，32-资金方审核拒绝",
  })
  nodeSta: number;

  @Column("varchar", {
    name: "auth_opinion",
    nullable: true,
    comment: "审核意见",
    length: 300,
  })
  authOpinion: string | null;

  @Column("varchar", {
    name: "operator",
    nullable: true,
    comment: "操作人",
    length: 100,
  })
  operator: string | null;

  @Column("varchar", {
    name: "loan_no",
    nullable: true,
    comment: "银行放款编号",
    length: 40,
  })
  loanNo: string | null;

  @Column("decimal", {
    name: "loan_amount",
    nullable: true,
    comment: "实际放款金额",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  loanAmount: string | null;

  @Column("date", { name: "loan_date", nullable: true, comment: "放款日期" })
  loanDate: string | null;

  @Column("date", {
    name: "fnc_ext_date",
    nullable: true,
    comment: "融资到期日",
  })
  fncExtDate: string | null;

  @Column("decimal", {
    name: "int_amt",
    nullable: true,
    comment: "实际利息金额",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  intAmt: string | null;

  @Column("decimal", {
    name: "loan_rate",
    nullable: true,
    comment: "实际贷款利率",
    precision: 6,
    scale: 4,
    default: () => "'0.0000'",
  })
  loanRate: string | null;

  @Column("decimal", {
    name: "bank_fee",
    nullable: true,
    comment: "银行实际手续费",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  bankFee: string | null;

  @Column("decimal", {
    name: "act_bank_fee_rate",
    nullable: true,
    comment: "银行实际手续费费率百分比，例3.1234%，存3.1234",
    precision: 6,
    scale: 4,
    default: () => "'0.0000'",
  })
  actBankFeeRate: string | null;

  @Column("decimal", {
    name: "act_withhold_charge",
    nullable: true,
    comment: "实际代扣手续费金额",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  actWithholdCharge: string | null;

  @Column("decimal", {
    primary: true,
    name: "fnc_net_amt",
    comment: "融资净额",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  fncNetAmt: string;

  @Column("smallint", {
    name: "int_pyr",
    nullable: true,
    comment: "付息方式 1-买方付息，2-卖方付息",
  })
  intPyr: number | null;

  @Column("bigint", {
    primary: true,
    name: "core_cust_id",
    comment: "授信主体企业id",
  })
  coreCustId: string;

  @Column("varchar", {
    name: "core_cust_name",
    nullable: true,
    comment: "核心企业名称",
    length: 300,
  })
  coreCustName: string | null;

  @Column("varchar", {
    name: "ctrs_cust_name",
    nullable: true,
    comment: "上一手龙信企业名称",
    length: 300,
  })
  ctrsCustName: string | null;

  @Column("bigint", { name: "credit_id", nullable: true, comment: "龙信id" })
  creditId: string | null;

  @Column("varchar", {
    name: "core_cust_no",
    nullable: true,
    comment: "核心企业编号",
    length: 50,
  })
  coreCustNo: string | null;

  @Column("varchar", {
    name: "cust_name",
    nullable: true,
    comment: "融资企业名称",
    length: 300,
  })
  custName: string | null;

  @Column("varchar", {
    name: "cust_no",
    nullable: true,
    comment: "融资企业编号",
    length: 50,
  })
  custNo: string | null;

  @Column("varchar", {
    name: "cust_credit",
    nullable: true,
    comment: "融资企业统一社会信用代码",
    length: 50,
  })
  custCredit: string | null;
}
