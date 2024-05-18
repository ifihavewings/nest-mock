import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scb_hint_accept_sign", { schema: "scb_bill" })
export class ScbHintAcceptSign {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", {
    name: "bill_id",
    nullable: true,
    comment: "scb_bill表主键",
  })
  billId: string | null;

  @Column("varchar", {
    name: "bill_package_num",
    nullable: true,
    comment: "票据(包)号",
    length: 50,
  })
  billPackageNum: string | null;

  @Column("varchar", {
    name: "subinterval_num",
    nullable: true,
    comment: "子区间号",
    length: 100,
  })
  subintervalNum: string | null;

  @Column("varchar", {
    name: "bill_type",
    nullable: true,
    comment: "票据种类，商票AC02，银票AC01",
    length: 4,
  })
  billType: string | null;

  @Column("decimal", {
    name: "bill_package_amount",
    nullable: true,
    comment: "票据(包)金额(元)",
    precision: 13,
    scale: 2,
  })
  billPackageAmount: string | null;

  @Column("char", {
    name: "un_transferable_flag",
    nullable: true,
    comment: "不得转让标记EM01不得转让EM00可再转让",
    length: 4,
  })
  unTransferableFlag: string | null;

  @Column("char", {
    name: "subcontract_flag",
    nullable: true,
    comment: "分包流转标记0否1是",
    length: 4,
  })
  subcontractFlag: string | null;

  @Column("datetime", {
    name: "bill_open_time",
    nullable: true,
    comment: "出票日期",
  })
  billOpenTime: Date | null;

  @Column("varchar", {
    name: "drawer_name",
    nullable: true,
    comment: "出票人",
    length: 255,
  })
  drawerName: string | null;

  @Column("int", { name: "drawer_ent_id", nullable: true, comment: "出票id" })
  drawerEntId: number | null;

  @Column("varchar", {
    name: "sign_type",
    nullable: true,
    comment: "签收类型",
    length: 2,
  })
  signType: string | null;

  @Column("varchar", {
    name: "cancel_msg",
    nullable: true,
    comment: "作废原因",
    length: 255,
  })
  cancelMsg: string | null;

  @Column("varchar", {
    name: "sign_fail_msg",
    nullable: true,
    comment: "签收失败原因",
    length: 255,
  })
  signFailMsg: string | null;

  @Column("varchar", {
    name: "approval_status",
    nullable: true,
    comment: "审批状态",
    length: 10,
  })
  approvalStatus: string | null;

  @Column("varchar", {
    name: "business_status",
    nullable: true,
    comment:
      "业务状态：未发送10，发送中11，发送失败12，确认失败13，已签收15，已拒签16",
    length: 10,
  })
  businessStatus: string | null;

  @Column("varchar", {
    name: "payee_name",
    nullable: true,
    comment: "收款人名称",
    length: 100,
  })
  payeeName: string | null;

  @Column("bigint", {
    name: "payee_ent_id",
    nullable: true,
    comment: "收款人id",
  })
  payeeEntId: string | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "说明",
    length: 128,
  })
  remark: string | null;

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

  @Column("bigint", {
    name: "create_by",
    comment: "创建人ID(申请人id)",
    unsigned: true,
  })
  createBy: string;

  @Column("varchar", {
    name: "creator",
    comment: "创建人名称(申请人名称)",
    length: 30,
  })
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

  @Column("int", {
    name: "revision",
    comment: "修改版本号",
    unsigned: true,
    default: () => "'0'",
  })
  revision: number;

  @Column("varchar", {
    name: "approver",
    nullable: true,
    comment: "审批人名称",
    length: 255,
  })
  approver: string | null;

  @Column("bigint", {
    name: "approval_by",
    nullable: true,
    comment: "审批人id",
  })
  approvalBy: string | null;

  @Column("datetime", {
    name: "approval_time",
    nullable: true,
    comment: "审批时间",
  })
  approvalTime: Date | null;

  @Column("datetime", {
    name: "apply_time",
    nullable: true,
    comment: "申请时间",
  })
  applyTime: Date | null;

  @Column("bigint", { name: "apply_by", nullable: true, comment: "申请人id" })
  applyBy: string | null;

  @Column("varchar", {
    name: "applicant",
    nullable: true,
    comment: "申请人名称",
    length: 255,
  })
  applicant: string | null;

  @Column("varchar", {
    name: "msg_id",
    nullable: true,
    comment: "报文标识",
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
    name: "orgnl_msg_id",
    nullable: true,
    comment: "原报文标识",
    length: 50,
  })
  orgnlMsgId: string | null;

  @Column("varchar", {
    name: "orgnl_cre_dt_tm",
    nullable: true,
    comment: "原报文时间",
    length: 32,
  })
  orgnlCreDtTm: string | null;
}
