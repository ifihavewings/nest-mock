import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scb_transaction_record", { schema: "scb_base" })
export class ScbTransactionRecord {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键ID" })
  id: string;

  @Column("varchar", {
    name: "business_type",
    nullable: true,
    comment:
      "业务类型 01：注册 02：登录 03：企业入驻 10：出票登记 11：提示承兑 12：提示收票 13：撤票  20：出票贸易信息登记 30：背书转让 40：贴现申请 50：到期提示付款 60：冻结 61：解冻",
    length: 2,
  })
  businessType: string | null;

  @Column("bigint", { name: "business_id", nullable: true, comment: "业务ID" })
  businessId: string | null;

  @Column("varchar", {
    name: "business_num",
    nullable: true,
    comment: "业务编号",
    length: 32,
  })
  businessNum: string | null;

  @Column("char", {
    name: "trade_direct",
    nullable: true,
    comment: "交易方向 1：请求 2：通知",
    length: 1,
  })
  tradeDirect: string | null;

  @Column("varchar", {
    name: "trade_code",
    nullable: true,
    comment: "交易编码",
    length: 32,
  })
  tradeCode: string | null;

  @Column("varchar", {
    name: "req_path",
    nullable: true,
    comment: "请求路径",
    length: 200,
  })
  reqPath: string | null;

  @Column("text", { name: "req_msg", nullable: true, comment: "请求报文" })
  reqMsg: string | null;

  @Column("varchar", {
    name: "trace_id",
    nullable: true,
    comment: "日志追踪ID",
    length: 50,
  })
  traceId: string | null;

  @Column("varchar", {
    name: "ret_code",
    nullable: true,
    comment: "响应码",
    length: 32,
  })
  retCode: string | null;

  @Column("varchar", {
    name: "ret_msg",
    nullable: true,
    comment: "响应信息",
    length: 32,
  })
  retMsg: string | null;

  @Column("text", { name: "resp_msg", nullable: true, comment: "响应报文" })
  respMsg: string | null;

  @Column("char", {
    name: "delete_flag",
    nullable: true,
    comment: "删除标识 0：否1：是",
    length: 1,
    default: () => "'0'",
  })
  deleteFlag: string | null;

  @Column("int", { name: "revision", nullable: true, comment: "乐观锁" })
  revision: number | null;

  @Column("bigint", { name: "create_by", nullable: true, comment: "创建人" })
  createBy: string | null;

  @Column("varchar", {
    name: "creator",
    nullable: true,
    comment: "创建者名称",
    length: 32,
  })
  creator: string | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
  })
  createTime: Date | null;

  @Column("bigint", { name: "update_by", nullable: true, comment: "更新人" })
  updateBy: string | null;

  @Column("varchar", {
    name: "updater",
    nullable: true,
    comment: "更新者名称",
    length: 32,
  })
  updater: string | null;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    comment: "更新时间",
  })
  updateTime: Date | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 256,
  })
  remark: string | null;
}
