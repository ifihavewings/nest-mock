import { Column, Entity, Index } from "typeorm";

@Index("idx_scb_trade_register_1", ["applyId"], {})
@Entity("scb_trade_register", { schema: "scb_bill" })
export class ScbTradeRegister {
  @Column("bigint", { primary: true, name: "id", comment: "自增主键" })
  id: string;

  @Column("bigint", {
    name: "apply_id",
    comment: "申请表id，外键指向 scb_trade_register_apply.id",
  })
  applyId: string;

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

  @Column("varchar", { name: "reg_state", comment: "登记状态，", length: 2 })
  regState: string;

  @Column("varchar", { name: "buss_state", comment: "业务状态，", length: 2 })
  bussState: string;

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
