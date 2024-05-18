import { Column, Entity, Index } from "typeorm";

@Index("idx_scb_endorse_detail_1", ["id"], {})
@Entity("scb_endorse_detail", { schema: "scb_bill" })
export class ScbEndorseDetail {
  @Column("bigint", { primary: true, name: "id", comment: "自增主键" })
  id: string;

  @Column("bigint", {
    name: "endorse_apply_id",
    comment: "背书申请表Id，外键指向 scb_endorse_apply.id",
  })
  endorseApplyId: string;

  @Column("bigint", { name: "bill_id", comment: "票据Id，外键指向 票据表.id" })
  billId: string;

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

  @Column("varchar", {
    name: "package_flow_type",
    nullable: true,
    comment: "分包流转标记 0可流转 1不可流转",
    length: 4,
    default: () => "'0'",
  })
  packageFlowType: string | null;

  @Column("decimal", {
    name: "package_amount",
    comment: "票据包金额",
    precision: 20,
    scale: 2,
    default: () => "'0.00'",
  })
  packageAmount: string;

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
    name: "endorse_remaining_interval",
    nullable: true,
    comment: "背书剩余金额区间",
    length: 30,
  })
  endorseRemainingInterval: string | null;

  @Column("datetime", { name: "createtime", comment: "出票日期" })
  createtime: Date;

  @Column("datetime", { name: "endtime", nullable: true, comment: "到期日期" })
  endtime: Date | null;

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
    name: "apply_res",
    nullable: true,
    comment: "发送申请返回结果",
    length: 120,
  })
  applyRes: string | null;

  @Column("varchar", {
    name: "buss_state",
    comment: "明细状态，发送成功：01，发送失败：02",
    length: 2,
  })
  bussState: string;

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
