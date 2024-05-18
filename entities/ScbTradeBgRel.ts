import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_scb_trade_bg_rel_1", ["registerApplyId"], {})
@Index("idx_scb_trade_bg_rel_2", ["bgAttachId"], {})
@Index("idx_scb_trade_bg_rel_3", ["bgAttachType"], {})
@Entity("scb_trade_bg_rel", { schema: "scb_bill" })
export class ScbTradeBgRel {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "自增主键" })
  id: string;

  @Column("bigint", {
    name: "register_apply_id",
    comment: "贸易申请表Id，外键指向 scb_trade_bg_register_apply.id",
  })
  registerApplyId: string;

  @Column("bigint", {
    name: "bg_attach_id",
    comment:
      "背景附件Id，外键指向 scb_trade_bg_contract.attach_id 或 scb_trade_bg_invoice.attach_id",
  })
  bgAttachId: string;

  @Column("char", {
    name: "bg_attach_type",
    comment: "背景附件类型 合同 1  发票 2",
    length: 1,
  })
  bgAttachType: string;

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
