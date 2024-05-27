import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scb_prompt_pay_sign", { schema: "dc_scm_payment_test" })
export class ScbPromptPaySign {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键ID" })
  id: string;

  @Column("varchar", {
    name: "bill_package_num",
    nullable: true,
    comment: "票据（包）号",
    length: 32,
  })
  billPackageNum: string | null;

  @Column("varchar", {
    name: "subinterval_num",
    nullable: true,
    comment: "子区间号",
    length: 32,
  })
  subintervalNum: string | null;

  @Column("varchar", {
    name: "bill_type",
    nullable: true,
    comment: "票据种类 AC01：银票  AC02：商票",
    length: 4,
  })
  billType: string | null;

  @Column("decimal", {
    name: "bill_package_amount",
    nullable: true,
    comment: "票据（包）金额(元)",
    precision: 16,
    scale: 2,
  })
  billPackageAmount: string | null;

  @Column("datetime", {
    name: "bill_open_time",
    nullable: true,
    comment: "出票日期",
  })
  billOpenTime: Date | null;

  @Column("datetime", {
    name: "bill_expire_time",
    nullable: true,
    comment: "到期日期",
  })
  billExpireTime: Date | null;

  @Column("bigint", {
    name: "drawer_ent_id",
    nullable: true,
    comment: "出票人id",
  })
  drawerEntId: string | null;

  @Column("varchar", {
    name: "drawer_ent_name",
    nullable: true,
    comment: "出票人名称",
    length: 128,
  })
  drawerEntName: string | null;

  @Column("bigint", {
    name: "payee_ent_id",
    nullable: true,
    comment: "收款人id",
  })
  payeeEntId: string | null;

  @Column("varchar", {
    name: "payee_ent_name",
    nullable: true,
    comment: "收款人名称",
    length: 128,
  })
  payeeEntName: string | null;

  @Column("bigint", {
    name: "acceptor_ent_id",
    nullable: true,
    comment: "承兑人id",
  })
  acceptorEntId: string | null;

  @Column("varchar", {
    name: "acceptor_ent_name",
    nullable: true,
    comment: "承兑人名称",
    length: 128,
  })
  acceptorEntName: string | null;

  @Column("datetime", {
    name: "prompt_pay_time",
    nullable: true,
    comment: "提示付款日期",
  })
  promptPayTime: Date | null;

  @Column("varchar", {
    name: "business_type",
    nullable: true,
    comment: "业务类型 01：提前提示付款02：到期提示付款03：期后提示付款",
    length: 2,
  })
  businessType: string | null;

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
    length: 128,
  })
  billHolderEntName: string | null;

  @Column("varchar", {
    name: "payer_bank_no",
    nullable: true,
    comment: "付款银行账号",
    length: 32,
  })
  payerBankNo: string | null;

  @Column("varchar", {
    name: "payer_bank_name",
    nullable: true,
    comment: "付款银行账户开户行名称",
    length: 50,
  })
  payerBankName: string | null;

  @Column("char", {
    name: "is_use_spare_liquidate_path",
    nullable: true,
    comment: "是否使用备用清算路径",
    length: 1,
  })
  isUseSpareLiquidatePath: string | null;

  @Column("varchar", {
    name: "spare_payer_bank_no",
    nullable: true,
    comment: "备用清算付款银行账号",
    length: 32,
  })
  sparePayerBankNo: string | null;

  @Column("varchar", {
    name: "spare_payer_bank_name",
    nullable: true,
    comment: "备用清算付款银行账户开户行名称",
    length: 32,
  })
  sparePayerBankName: string | null;

  @Column("varchar", {
    name: "approval_status",
    nullable: true,
    comment: "审批状态 01：未提交02：待复核03：已通过04：已驳回",
    length: 2,
  })
  approvalStatus: string | null;

  @Column("varchar", {
    name: "business_status",
    nullable: true,
    comment:
      "业务状态 10：未发送 11：发送中 12：发送失败 13：确认失败 15：已签收 16：已拒签 20：扣款确认拒绝 30：已作废 41：清算成功 42：清算失败",
    length: 2,
  })
  businessStatus: string | null;

  @Column("varchar", {
    name: "sign_type",
    nullable: true,
    comment: "签收类型 SU00：同意签收 SU00：拒绝签收",
    length: 4,
  })
  signType: string | null;

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
    name: "refuse_pay_reason",
    nullable: true,
    comment: "拒付理由",
    length: 128,
  })
  refusePayReason: string | null;

  @Column("varchar", {
    name: "invalidate_reason",
    nullable: true,
    comment: "作废原因",
    length: 128,
  })
  invalidateReason: string | null;

  @Column("varchar", {
    name: "sign_fail_reason",
    nullable: true,
    comment: "签收失败原因",
    length: 128,
  })
  signFailReason: string | null;

  @Column("varchar", {
    name: "msg_id",
    nullable: true,
    comment: "报文标识号",
    length: 50,
  })
  msgId: string | null;

  @Column("varchar", {
    name: "cre_dt_tm",
    nullable: true,
    comment: "报文时间",
    length: 32,
  })
  creDtTm: string | null;

  @Column("varchar", {
    name: "reject_msg_id",
    nullable: true,
    comment: "撤销报文标识号",
    length: 50,
  })
  rejectMsgId: string | null;

  @Column("varchar", {
    name: "reject_cre_dt_tm",
    nullable: true,
    comment: "撤销报文时间",
    length: 32,
  })
  rejectCreDtTm: string | null;

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
