import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scb_bill_subinterval", { schema: "scb_bill" })
export class ScbBillSubinterval {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键ID" })
  id: string;

  @Column("bigint", { name: "bill_id", nullable: true, comment: "票据表ID" })
  billId: string | null;

  @Column("varchar", {
    name: "freeze_subinterval_begin",
    nullable: true,
    comment: "冻结子区间开始",
    length: 100,
  })
  freezeSubintervalBegin: string | null;

  @Column("varchar", {
    name: "freeze_subinterval_end",
    nullable: true,
    comment: "冻结子区间结束",
    length: 100,
  })
  freezeSubintervalEnd: string | null;

  @Column("char", {
    name: "freeze_type",
    comment: "冻结解冻标识 0冻结 1解冻 2部分解冻",
    length: 1,
  })
  freezeType: string;

  @Column("bigint", { name: "parent_id", nullable: true, comment: "父级ID" })
  parentId: string | null;

  @Column("decimal", {
    name: "freeze_amount",
    nullable: true,
    comment: "冻结解冻金额",
    precision: 16,
    scale: 2,
  })
  freezeAmount: string | null;

  @Column("datetime", {
    name: "freeze_date",
    nullable: true,
    comment: "冻结解冻日期",
  })
  freezeDate: Date | null;

  @Column("varchar", { name: "remark", nullable: true, length: 255 })
  remark: string | null;

  @Column("char", { name: "delete_flag", length: 1, default: () => "'0'" })
  deleteFlag: string;

  @Column("datetime", {
    name: "create_time",
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date;

  @Column("bigint", { name: "create_by", unsigned: true })
  createBy: string;

  @Column("varchar", { name: "creator", length: 30 })
  creator: string;

  @Column("datetime", { name: "update_time", nullable: true })
  updateTime: Date | null;

  @Column("bigint", { name: "update_by", nullable: true, unsigned: true })
  updateBy: string | null;

  @Column("varchar", { name: "updater", nullable: true, length: 30 })
  updater: string | null;

  @Column("int", { name: "revision", unsigned: true, default: () => "'0'" })
  revision: number;
}
