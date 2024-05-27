import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scb_discount_apply", { schema: "dc_scm_payment_test" })
export class ScbDiscountApply {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键ID" })
  id: string;

  @Column("varchar", {
    name: "apply_num",
    nullable: true,
    comment: "申请编号",
    length: 32,
  })
  applyNum: string | null;

  @Column("varchar", {
    name: "discount_type",
    nullable: true,
    comment: "贴现类型 01：买断式02：回购式",
    length: 2,
  })
  discountType: string | null;

  @Column("varchar", {
    name: "settlement_mode",
    nullable: true,
    comment: "结算方式 ST01：票款对付（DVP） ST02：纯票过户（FOP）",
    length: 4,
  })
  settlementMode: string | null;

  @Column("varchar", {
    name: "un_transferable_flag",
    nullable: true,
    comment: "不得转让标记 EM00：可再转让EM01：不得转让",
    length: 4,
  })
  unTransferableFlag: string | null;

  @Column("varchar", {
    name: "pay_interest_mode",
    nullable: true,
    comment: "付息方式 01：卖方付息",
    length: 2,
  })
  payInterestMode: string | null;

  @Column("bigint", {
    name: "bill_holder_ent_id",
    nullable: true,
    comment: "持票人id",
  })
  billHolderEntId: string | null;

  @Column("varchar", {
    name: "bill_holder_ent_name",
    nullable: true,
    comment: "持票人名称",
    length: 32,
  })
  billHolderEntName: string | null;

  @Column("varchar", {
    name: "payee_bank_account_no",
    nullable: true,
    comment: "入账银行账号",
    length: 32,
  })
  payeeBankAccountNo: string | null;

  @Column("varchar", {
    name: "payee_bank_account_name",
    nullable: true,
    comment: "入账银行账户名称",
    length: 50,
  })
  payeeBankAccountName: string | null;

  @Column("varchar", {
    name: "payee_agency_participant_code",
    nullable: true,
    comment: "入账银行账户开户行机构参与者代码",
    length: 20,
  })
  payeeAgencyParticipantCode: string | null;

  @Column("varchar", {
    name: "payee_agency_participant_name",
    nullable: true,
    comment: "入账银行账户开户行机构参与者名称",
    length: 50,
  })
  payeeAgencyParticipantName: string | null;

  @Column("varchar", {
    name: "payee_bank_name",
    nullable: true,
    comment: "入账银行账户开户行名称",
    length: 50,
  })
  payeeBankName: string | null;

  @Column("varchar", {
    name: "payer_agency_participant_code",
    nullable: true,
    comment: "贴入人机构参与者代码",
    length: 20,
  })
  payerAgencyParticipantCode: string | null;

  @Column("varchar", {
    name: "payer_agency_participant_name",
    nullable: true,
    comment: "贴入人机构参与者名称",
    length: 50,
  })
  payerAgencyParticipantName: string | null;

  @Column("varchar", {
    name: "payer_name",
    nullable: true,
    comment: "贴入人名称",
    length: 50,
  })
  payerName: string | null;

  @Column("int", { name: "bill_count", nullable: true, comment: "票据总张数" })
  billCount: number | null;

  @Column("int", {
    name: "bill_fail_count",
    nullable: true,
    comment: "票据失败总张数",
  })
  billFailCount: number | null;

  @Column("decimal", {
    name: "total_bill_amount",
    nullable: true,
    comment: "票据总金额(元)",
    precision: 16,
    scale: 2,
  })
  totalBillAmount: string | null;

  @Column("decimal", {
    name: "total_discount_amount",
    nullable: true,
    comment: "贴现总金额(元)",
    precision: 16,
    scale: 2,
  })
  totalDiscountAmount: string | null;

  @Column("decimal", {
    name: "total_settlement_amount",
    nullable: true,
    comment: "结算总金额",
    precision: 16,
    scale: 2,
  })
  totalSettlementAmount: string | null;

  @Column("varchar", {
    name: "batch_status",
    nullable: true,
    comment:
      "批次状态 00：未提交01：待复核02：已通过03：已驳回 10：处理中11：已完成",
    length: 2,
  })
  batchStatus: string | null;

  @Column("bigint", { name: "apply_by", nullable: true, comment: "申请人" })
  applyBy: string | null;

  @Column("varchar", {
    name: "applicant",
    nullable: true,
    comment: "申请人名称",
    length: 32,
  })
  applicant: string | null;

  @Column("datetime", {
    name: "apply_time",
    nullable: true,
    comment: "申请日期",
  })
  applyTime: Date | null;

  @Column("bigint", { name: "approval_by", nullable: true, comment: "审批人" })
  approvalBy: string | null;

  @Column("varchar", {
    name: "approver",
    nullable: true,
    comment: "审批者名称",
    length: 32,
  })
  approver: string | null;

  @Column("datetime", {
    name: "approval_time",
    nullable: true,
    comment: "审批时间",
  })
  approvalTime: Date | null;

  @Column("varchar", {
    name: "approval_opinions",
    nullable: true,
    comment: "审批意见",
    length: 128,
  })
  approvalOpinions: string | null;

  @Column("datetime", {
    name: "send_time",
    nullable: true,
    comment: "发送日期",
  })
  sendTime: Date | null;

  @Column("char", {
    name: "delete_flag",
    nullable: true,
    comment: "删除标识 0：否1：是",
    length: 1,
    default: () => "'0'",
  })
  deleteFlag: string | null;

  @Column("int", { name: "revision", nullable: true, comment: "乐观锁" })
  revision: number | null;

  @Column("bigint", { name: "create_by", nullable: true, comment: "创建人" })
  createBy: string | null;

  @Column("varchar", {
    name: "creator",
    nullable: true,
    comment: "创建者名称",
    length: 32,
  })
  creator: string | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
  })
  createTime: Date | null;

  @Column("bigint", { name: "update_by", nullable: true, comment: "更新人" })
  updateBy: string | null;

  @Column("varchar", {
    name: "updater",
    nullable: true,
    comment: "更新者名称",
    length: 32,
  })
  updater: string | null;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    comment: "更新时间",
  })
  updateTime: Date | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 256,
  })
  remark: string | null;
}
