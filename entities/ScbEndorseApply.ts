import { Column, Entity } from "typeorm";

@Entity("scb_endorse_apply", { schema: "scb_bill" })
export class ScbEndorseApply {
  @Column("bigint", { primary: true, name: "id", comment: "申请id" })
  id: string;

  @Column("bigint", { name: "endo_apply_no", comment: "背书申请编号" })
  endoApplyNo: string;

  @Column("varchar", {
    name: "channel_name",
    comment: "被背书人业务办理渠道名称",
    length: 100,
  })
  channelName: string;

  @Column("varchar", {
    name: "endorsee_rec_type",
    comment: "被背书人识别类型，票据账户：，银行账户： ",
    length: 2,
  })
  endorseeRecType: string;

  @Column("varchar", {
    name: "non_transfer_mark",
    comment: "不可转让标记，可转让：，不可转让： ",
    length: 2,
  })
  nonTransferMark: string;

  @Column("varchar", {
    name: "endorsee_usci",
    comment: "被背书人统一社会信用码",
    length: 30,
  })
  endorseeUsci: string;

  @Column("varchar", {
    name: "endorsee_name",
    comment: "被背书人名称",
    length: 128,
  })
  endorseeName: string;

  @Column("varchar", {
    name: "endorsee_bank_account",
    comment: "被背书人银行账户",
    length: 20,
  })
  endorseeBankAccount: string;

  @Column("varchar", {
    name: "endorsee_bank_account_name",
    comment: "被背书人银行账户名称",
    length: 50,
  })
  endorseeBankAccountName: string;

  @Column("varchar", {
    name: "endorsee_open_bank_parti_name",
    comment: "被背书人银行账户开户行机构参与者名称",
    length: 100,
  })
  endorseeOpenBankPartiName: string;

  @Column("varchar", {
    name: "endorsee_bill_account",
    comment: "被背书人票据账号",
    length: 30,
  })
  endorseeBillAccount: string;

  @Column("varchar", { name: "remark", comment: "备注", length: 100 })
  remark: string;

  @Column("bigint", { name: "bill_count", comment: "票据张数" })
  billCount: string;

  @Column("decimal", {
    name: "sum_amt",
    comment: "票据总金额",
    precision: 20,
    scale: 2,
  })
  sumAmt: string;

  @Column("decimal", {
    name: "endorse_sum_amt",
    comment: "背书总金额",
    precision: 20,
    scale: 2,
  })
  endorseSumAmt: string;

  @Column("datetime", { name: "apply_date", comment: "申请日期" })
  applyDate: Date;

  @Column("datetime", { name: "send_date", comment: "发送日期" })
  sendDate: Date;

  @Column("varchar", {
    name: "endorse_to_scb",
    comment: "背书到供票系统，是：01，否：02",
    length: 2,
  })
  endorseToScb: string;

  @Column("varchar", {
    name: "approve_state",
    comment: "审批状态，",
    length: 2,
  })
  approveState: string;

  @Column("varchar", { name: "batch_state", comment: "批次状态，", length: 2 })
  batchState: string;

  @Column("varchar", {
    name: "approval_by",
    nullable: true,
    comment: "审批人id",
    length: 32,
  })
  approvalBy: string | null;

  @Column("varchar", { name: "approver", comment: "审批人名称", length: 32 })
  approver: string;

  @Column("datetime", { name: "approval_time", comment: "审批时间" })
  approvalTime: Date;

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
