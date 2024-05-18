import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scb_business_channel", { schema: "scb_bill" })
export class ScbBusinessChannel {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键" })
  id: string;

  @Column("varchar", {
    name: "channel_code",
    nullable: true,
    comment: "业务办理渠道代码",
    length: 6,
  })
  channelCode: string | null;

  @Column("varchar", {
    name: "channel_sort_code",
    nullable: true,
    comment: "业务办理渠道类别代码",
    length: 16,
  })
  channelSortCode: string | null;

  @Column("varchar", {
    name: "channel_name",
    nullable: true,
    comment: "业务办理渠道名称",
    length: 128,
  })
  channelName: string | null;

  @Column("varchar", {
    name: "channel_state",
    nullable: true,
    comment: "业务办理渠道状态",
    length: 4,
  })
  channelState: string | null;

  @Column("varchar", {
    name: "credit_code",
    nullable: true,
    comment: "统一社会信用代码",
    length: 18,
  })
  creditCode: string | null;

  @Column("varchar", {
    name: "pay_system_num",
    nullable: true,
    comment: "大额支付系统行号",
    length: 16,
  })
  paySystemNum: string | null;

  @Column("varchar", {
    name: "settle_type",
    nullable: true,
    comment: "清算模式",
    length: 6,
  })
  settleType: string | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "说明",
    length: 128,
  })
  remark: string | null;

  @Column("char", {
    name: "delete_flag",
    nullable: true,
    comment: "删除标识，是：1，否：0",
    length: 1,
    default: () => "'0'",
  })
  deleteFlag: string | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date | null;

  @Column("bigint", {
    name: "create_by",
    nullable: true,
    comment: "创建人ID(申请人id)",
    unsigned: true,
  })
  createBy: string | null;

  @Column("varchar", {
    name: "creator",
    nullable: true,
    comment: "创建人名称(申请人名称)",
    length: 30,
  })
  creator: string | null;

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
}
