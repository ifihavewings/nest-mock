import { Column, Entity, Index } from "typeorm";

@Index("idx_scb_endorse_sign_1", ["billNo"], {})
@Index("idx_scb_endorse_sign_2", ["subticketInterval"], {})
@Entity("scb_endorse_sign", { schema: "scb_bill" })
export class ScbEndorseSign {
  @Column("bigint", { primary: true, name: "id", comment: "自增主键" })
  id: string;

  @Column("varchar", {
    name: "bill_no",
    comment: "票据（包）号，外键指向 票据表.票据号",
    length: 32,
  })
  billNo: string;

  @Column("varchar", {
    name: "subticket_interval",
    comment: "子票区间",
    length: 30,
  })
  subticketInterval: string;

  @Column("varchar", {
    name: "bill_type",
    nullable: true,
    comment: "票据种类 0商票 1银票",
    length: 4,
    default: () => "'0'",
  })
  billType: string | null;

  @Column("datetime", { name: "createtime", comment: "出票日期" })
  createtime: Date;

  @Column("datetime", { name: "endtime", comment: "到期日期" })
  endtime: Date;

  @Column("varchar", {
    name: "drawer_name",
    nullable: true,
    comment: "出票人名称",
    length: 128,
  })
  drawerName: string | null;

  @Column("varchar", {
    name: "acceptor_name",
    nullable: true,
    comment: "承兑人名称",
    length: 128,
  })
  acceptorName: string | null;

  @Column("varchar", {
    name: "non_transfer_mark",
    comment: "不可转让标记，可转让：，不可转让： ",
    length: 4,
  })
  nonTransferMark: string;

  @Column("varchar", {
    name: "package_flow_type",
    nullable: true,
    comment: "分包流转标记 0可流转 1不可流转",
    length: 4,
    default: () => "'0'",
  })
  packageFlowType: string | null;

  @Column("decimal", {
    name: "endorse_amt",
    comment: "背书金额",
    precision: 20,
    scale: 2,
    default: () => "'0.00'",
  })
  endorseAmt: string;

  @Column("varchar", {
    name: "endorse_interval",
    comment: "背书金额区间",
    length: 30,
  })
  endorseInterval: string;

  @Column("varchar", {
    name: "endorse_name",
    nullable: true,
    comment: "背书人名称",
    length: 128,
  })
  endorseName: string | null;

  @Column("bigint", {
    name: "endorse_cust_id",
    nullable: true,
    comment: "背书人企业id",
  })
  endorseCustId: string | null;

  @Column("varchar", {
    name: "endorse_credit",
    nullable: true,
    comment: "背书人统一社会信用代码",
    length: 50,
  })
  endorseCredit: string | null;

  @Column("datetime", { name: "apply_date", comment: "背书申请日期" })
  applyDate: Date;

  @Column("varchar", {
    name: "approve_state",
    comment: "审批状态，",
    length: 2,
  })
  approveState: string;

  @Column("varchar", { name: "buss_state", comment: "业务状态，", length: 2 })
  bussState: string;

  @Column("varchar", { name: "sign_type", comment: "签收类型，", length: 2 })
  signType: string;

  @Column("varchar", {
    name: "cancel_reson",
    nullable: true,
    comment: "作废原因",
    length: 120,
  })
  cancelReson: string | null;

  @Column("varchar", {
    name: "sign_fail_reson",
    nullable: true,
    comment: "签收失败原因",
    length: 120,
  })
  signFailReson: string | null;

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

  @Column("bigint", {
    name: "revision",
    comment: "修改版本号",
    unsigned: true,
    default: () => "'0'",
  })
  revision: string;
}
