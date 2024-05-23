import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scb_freeze_bill", { schema: "scb_bill" })
export class ScbFreezeBill {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "自增主键" })
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
    comment: "票据种类 AC01 银票/财票 AC02 商票",
    length: 4,
  })
  billType: string | null;

  @Column("decimal", {
    name: "bill_package_amount",
    nullable: true,
    comment: "票据（包）金额（元）",
    precision: 16,
    scale: 2,
  })
  billPackageAmount: string | null;

  @Column("varchar", {
    name: "subcontract_flag",
    nullable: true,
    comment: "分包流转标记",
    length: 2,
  })
  subcontractFlag: string | null;

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
    name: "drawer_name",
    nullable: true,
    comment: "出票人名称",
    length: 128,
  })
  drawerName: string | null;

  @Column("bigint", {
    name: "payee_ent_id",
    nullable: true,
    comment: "收款人id",
  })
  payeeEntId: string | null;

  @Column("varchar", {
    name: "payee_name",
    nullable: true,
    comment: "收款人名称",
    length: 128,
  })
  payeeName: string | null;

  @Column("bigint", {
    name: "acceptor_ent_id",
    nullable: true,
    comment: "承兑人id",
  })
  acceptorEntId: string | null;

  @Column("varchar", {
    name: "acceptor_name",
    nullable: true,
    comment: "承兑人名称",
    length: 128,
  })
  acceptorName: string | null;

  @Column("varchar", {
    name: "interval_number",
    nullable: true,
    comment: "初始子区间号",
    length: 32,
  })
  intervalNumber: string | null;

  @Column("decimal", {
    name: "bill_package_init_amount",
    nullable: true,
    comment: "初始票据金额",
    precision: 16,
    scale: 2,
  })
  billPackageInitAmount: string | null;

  @Column("decimal", {
    name: "unfreeze_amount",
    nullable: true,
    comment: "未冻结票据金额",
    precision: 16,
    scale: 2,
  })
  unfreezeAmount: string | null;

  @Column("datetime", {
    name: "last_freeze_date",
    nullable: true,
    comment: "最近一次冻结日期",
  })
  lastFreezeDate: Date | null;

  @Column("varchar", {
    name: "business_status",
    nullable: true,
    comment: "业务状态 10:未发送 11:发送中 12:发送失败 13:确认失败 14:确认成功",
    length: 2,
  })
  businessStatus: string | null;

  @Column("varchar", {
    name: "approval_status",
    nullable: true,
    comment: "审批状态 00:未提交 01:待复核 02:已通过 03:已驳回",
    length: 2,
  })
  approvalStatus: string | null;

  @Column("varchar", {
    name: "return_infor",
    nullable: true,
    comment: "发送申请返回信息",
    length: 128,
  })
  returnInfor: string | null;

  @Column("char", {
    name: "freeze_type",
    nullable: true,
    comment: "冻结解冻标识 0冻结 1解冻",
    length: 1,
  })
  freezeType: string | null;

  @Column("varchar", {
    name: "legal_person_name",
    nullable: true,
    comment: "法务审批人姓名",
    length: 50,
  })
  legalPersonName: string | null;

  @Column("bigint", {
    name: "legal_person_id",
    nullable: true,
    comment: "法务审批人id",
  })
  legalPersonId: string | null;

  @Column("varchar", {
    name: "legal_status",
    nullable: true,
    comment: "法务审批状态 01待复核 02:已通过 03:已驳回",
    length: 2,
  })
  legalStatus: string | null;

  @Column("datetime", {
    name: "legal_date",
    nullable: true,
    comment: "法务审批时间",
  })
  legalDate: Date | null;

  @Column("bigint", {
    name: "risk_control_id",
    nullable: true,
    comment: "风控审批人id",
  })
  riskControlId: string | null;

  @Column("varchar", {
    name: "risk_control_name",
    nullable: true,
    comment: "风控审批人姓名",
    length: 50,
  })
  riskControlName: string | null;

  @Column("varchar", {
    name: "risk_control_status",
    nullable: true,
    comment: "风控审批状态 01:待复核 02:已通过 03:已驳回",
    length: 2,
  })
  riskControlStatus: string | null;

  @Column("datetime", {
    name: "risk_control_date",
    nullable: true,
    comment: "风控审批时间",
  })
  riskControlDate: Date | null;

  @Column("varchar", {
    name: "sign_type",
    nullable: true,
    comment: "签收类型",
    length: 2,
  })
  signType: string | null;

  @Column("varchar", {
    name: "revision",
    nullable: true,
    comment: "乐观锁",
    length: 32,
  })
  revision: string | null;

  @Column("bigint", { name: "create_by", nullable: true, comment: "创建人" })
  createBy: string | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
  })
  createTime: Date | null;

  @Column("bigint", { name: "update_by", nullable: true, comment: "更新人" })
  updateBy: string | null;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    comment: "更新时间",
  })
  updateTime: Date | null;

  @Column("char", {
    name: "delete_flag",
    nullable: true,
    comment: "删除标识 是：1，否：0",
    length: 1,
  })
  deleteFlag: string | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 128,
  })
  remark: string | null;

  @Column("datetime", {
    name: "freeze_apply_date",
    nullable: true,
    comment: "冻结申请日期",
  })
  freezeApplyDate: Date | null;

  @Column("datetime", {
    name: "freeze_date",
    nullable: true,
    comment: "冻结日期",
  })
  freezeDate: Date | null;

  @Column("varchar", {
    name: "freeze_number",
    nullable: true,
    comment: "冻结子区间号",
    length: 32,
  })
  freezeNumber: string | null;

  @Column("decimal", {
    name: "freeze_amount",
    nullable: true,
    comment: "冻结解冻金额",
    precision: 16,
    scale: 2,
  })
  freezeAmount: string | null;

  @Column("varchar", {
    name: "handle_advice",
    nullable: true,
    comment: "处理意见",
    length: 128,
  })
  handleAdvice: string | null;

  @Column("varchar", {
    name: "creator",
    nullable: true,
    comment: "创建人",
    length: 30,
  })
  creator: string | null;

  @Column("varchar", {
    name: "updater",
    nullable: true,
    comment: "修改人",
    length: 30,
  })
  updater: string | null;

  @Column("bigint", { name: "bill_id", nullable: true, comment: "票据表id" })
  billId: string | null;

  @Column("bigint", { name: "apply_by", nullable: true, comment: "申请人id" })
  applyBy: string | null;

  @Column("varchar", {
    name: "applicant",
    nullable: true,
    comment: "申请人名称",
    length: 50,
  })
  applicant: string | null;

  @Column("datetime", {
    name: "apply_date",
    nullable: true,
    comment: "申请时间",
  })
  applyDate: Date | null;

  @Column("varchar", {
    name: "legal_advice",
    nullable: true,
    comment: "法务审批驳回意见",
    length: 255,
  })
  legalAdvice: string | null;

  @Column("varchar", {
    name: "risk_control_advice",
    nullable: true,
    comment: "风控审批驳回意见",
    length: 255,
  })
  riskControlAdvice: string | null;
}
