import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fnc_order_i2", ["fncBusNo"], {})
@Index("fnc_order_i1", ["fncRecordId"], {})
@Index("fnc_order_i0", ["creditBillCode"], {})
@Index("fnc_order_i3", ["custNo"], {})
@Index(
  "fnc_order_i4",
  ["coreCustName", "ctrsCustName", "fncSta", "createTime", "fncAmount"],
  {}
)
@Index("fnc_amount_idx", ["fncAmount"], {})
@Index("payment_date_idx", ["paymentDate"], {})
@Entity("fnc_order", { schema: "dc_scm_payment" })
export class FncOrder {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键id" })
  id: string;

  @Column("varchar", {
    name: "fnc_bus_no",
    comment: "单号LyyyyMMddHHmmss+6位随机数",
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
    comment: "借款用途编号，见数据字典",
    length: 3,
  })
  fncPurpose: string | null;

  @Column("bigint", { name: "credit_id", nullable: true, comment: "龙信id" })
  creditId: string | null;

  @Column("decimal", {
    name: "fnc_amount",
    comment: "融资金额",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  fncAmount: string;

  @Column("varchar", {
    name: "credit_bill_code",
    nullable: true,
    comment: "龙信编号",
    length: 150,
  })
  creditBillCode: string | null;

  @Column("bigint", { name: "cust_id", nullable: true, comment: "融资企业id" })
  custId: string | null;

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

  @Column("bigint", {
    name: "fnc_record_id",
    nullable: true,
    comment: "订单流转记录表id",
  })
  fncRecordId: string | null;

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
    name: "fnc_net_amt",
    nullable: true,
    comment: "融资净额",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  fncNetAmt: string | null;

  @Column("smallint", {
    name: "int_pyr",
    nullable: true,
    comment: "付息方式 1-买方付息，2-卖方付息",
  })
  intPyr: number | null;

  @Column("varchar", {
    name: "core_cust_name",
    nullable: true,
    comment: "授信主体企业名称",
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

  @Column("smallint", {
    name: "fnc_sta",
    nullable: true,
    comment:
      "融资状态：1-供应商审核中，2-供应商审核拒绝，3-待平台补充资料，4-平台审核中，5-平台拒绝，6-资方审核中，7-融资成功，8-融资失败,9-建档失败，10-签约失败",
  })
  fncSta: number | null;

  @Column("bigint", {
    name: "fnc_user_id",
    nullable: true,
    comment: "融资经办人id",
  })
  fncUserId: string | null;

  @Column("varchar", {
    name: "fnc_user_nm",
    nullable: true,
    comment: "融资经办人姓名",
    length: 255,
  })
  fncUserNm: string | null;

  @Column("smallint", {
    name: "file_upload_notice",
    nullable: true,
    comment: "文件上传通知标识，0-未通知，1-已通知",
  })
  fileUploadNotice: number | null;

  @Column("smallint", {
    name: "file_upload_flag",
    nullable: true,
    comment: "文件上传标识，0-未上传，1-已上传",
  })
  fileUploadFlag: number | null;

  @Column("varchar", {
    name: "core_cust_no",
    nullable: true,
    comment: "授信主体企业机构编号",
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
    name: "platform_auth_sta",
    nullable: true,
    comment: "平台审核状态 0-审核中，01-通过，02-拒绝",
    length: 3,
  })
  platformAuthSta: string | null;

  @Column("varchar", {
    name: "platform_proc_sta",
    nullable: true,
    comment: "平台处理状态 01-未处理，02-已处理",
    length: 3,
  })
  platformProcSta: string | null;

  @Column("bigint", {
    name: "core_cust_id",
    nullable: true,
    comment: "授信主体企业ID",
  })
  coreCustId: string | null;

  @Column("varchar", {
    name: "cust_credit",
    nullable: true,
    comment: "融资企业统一社会信用代码",
    length: 50,
  })
  custCredit: string | null;

  @Column("datetime", {
    name: "fnc_apply_date",
    nullable: true,
    comment: "向银行申请融资日期",
  })
  fncApplyDate: Date | null;

  @Column("varchar", {
    name: "hold_acc_no",
    nullable: true,
    comment: "代收手续费账号",
    length: 50,
  })
  holdAccNo: string | null;

  @Column("varchar", {
    name: "hold_acc_nm",
    nullable: true,
    comment: "代收手续费账户名称",
    length: 255,
  })
  holdAccNm: string | null;

  @Column("date", {
    name: "payment_date",
    nullable: true,
    comment: "预计付款日期",
  })
  paymentDate: string | null;

  @Column("smallint", {
    name: "bus_type",
    nullable: true,
    comment: "业务类型 0应付业务 1应收业务",
    default: () => "'0'",
  })
  busType: number | null;

  @Column("char", {
    name: "current_handle_role",
    nullable: true,
    comment:
      "当前处理人：1供应商授权岗、2核心企业经办岗、3核心企业授权岗、4运营经办岗、5运营授权岗、6已结束",
    length: 2,
  })
  currentHandleRole: string | null;

  @Column("varchar", {
    name: "process_key",
    nullable: true,
    comment: "流程key",
    length: 32,
  })
  processKey: string | null;

  @Column("varchar", {
    name: "approval_flow_name",
    nullable: true,
    comment: "审批流名称",
    length: 255,
  })
  approvalFlowName: string | null;
}
