import { Column, Entity } from "typeorm";

@Entity("scb_bill_state_flow", { schema: "scb_bill" })
export class ScbBillStateFlow {
  @Column("bigint", { primary: true, name: "id" })
  id: string;

  @Column("varchar", {
    name: "busi_scene",
    nullable: true,
    comment: "业务场景",
    length: 30,
  })
  busiScene: string | null;

  @Column("varchar", {
    name: "busi_act",
    nullable: true,
    comment: "业务行为",
    length: 30,
  })
  busiAct: string | null;

  @Column("varchar", {
    name: "bill_state_pre",
    nullable: true,
    comment:
      "前票据状态：已出票CS01，已承兑CS02，已收票CS03，已到期CS04，已终止CS05，已结清CS06",
    length: 20,
  })
  billStatePre: string | null;

  @Column("varchar", {
    name: "bill_flow_flag_pre",
    nullable: true,
    comment:
      "前流通标志：待收票TF0101，可流通TF0301，已锁定TF0302，不可转让TF0303，已质押TF0304，待赎回TF0305，托收在途TF0401，追索中TF0402，已结束TF0501",
    length: 6,
  })
  billFlowFlagPre: string | null;

  @Column("varchar", {
    name: "bill_state_after",
    nullable: true,
    comment: "后票据状态",
    length: 20,
  })
  billStateAfter: string | null;

  @Column("varchar", {
    name: "bill_flow_flag_after",
    nullable: true,
    comment: "后流通标志",
    length: 6,
  })
  billFlowFlagAfter: string | null;

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
}
