import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scb_withdraw_bill", { schema: "scb_bill" })
export class ScbWithdrawBill {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键" })
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

  @Column("varchar", {
    name: "acceptor_ent_id",
    nullable: true,
    comment: "承兑人id",
    length: 32,
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
    name: "business_status",
    nullable: true,
    comment: "业务状态 10:未发送 11:发送中 12:发送失败 13:确认失败 14:确认成功",
    length: 2,
  })
  businessStatus: string | null;

  @Column("varchar", {
    name: "approval_status",
    nullable: true,
    comment: "审批状态00:未提交 01:待复核 02:已通过 03:已驳回",
    length: 2,
  })
  approvalStatus: string | null;

  @Column("varchar", {
    name: "return_info",
    nullable: true,
    comment: "发送申请返回信息",
    length: 128,
  })
  returnInfo: string | null;

  @Column("datetime", {
    name: "apply_date",
    nullable: true,
    comment: "申请日期",
  })
  applyDate: Date | null;

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

  @Column("bigint", {
    name: "approve_peo_id",
    nullable: true,
    comment: "审批人id",
  })
  approvePeoId: string | null;

  @Column("varchar", {
    name: "approve_peo_name",
    nullable: true,
    comment: "审批人姓名",
    length: 128,
  })
  approvePeoName: string | null;

  @Column("datetime", {
    name: "send_date",
    nullable: true,
    comment: "发送日期",
  })
  sendDate: Date | null;

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

  @Column("bigint", { name: "apply_by", nullable: true, comment: "申请人id" })
  applyBy: string | null;

  @Column("varchar", {
    name: "apply_name",
    nullable: true,
    comment: "申请人名称",
    length: 50,
  })
  applyName: string | null;
}
