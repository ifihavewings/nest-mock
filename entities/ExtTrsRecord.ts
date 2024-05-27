import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ext_trs_record", { schema: "dc_scm_payment" })
export class ExtTrsRecord {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键id" })
  id: string;

  @Column("datetime", { name: "create_time", comment: "创建时间" })
  createTime: Date;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    comment: "更新时间",
  })
  updateTime: Date | null;

  @Column("bigint", { name: "create_id", comment: "创建人id" })
  createId: string;

  @Column("bigint", { name: "update_id", nullable: true, comment: "修改人id" })
  updateId: string | null;

  @Column("tinyint", {
    name: "del_flag",
    comment: "删除标识：0-正常，1-删除",
    width: 1,
    default: () => "'0'",
  })
  delFlag: boolean;

  @Column("smallint", { name: "trs_type", comment: "交易类型，1-请求，2-通知" })
  trsType: number;

  @Column("varchar", {
    name: "sender_no",
    nullable: true,
    comment: "发送方机构标识",
    length: 50,
  })
  senderNo: string | null;

  @Column("varchar", {
    name: "receiver_no",
    nullable: true,
    comment: "接收方机构标识",
    length: 50,
  })
  receiverNo: string | null;

  @Column("varchar", {
    name: "seq_no",
    nullable: true,
    comment: "请求流水号",
    length: 40,
  })
  seqNo: string | null;

  @Column("varchar", {
    name: "res_no",
    nullable: true,
    comment: "响应流水号",
    length: 40,
  })
  resNo: string | null;

  @Column("text", { name: "seq_msg", comment: "请求报文" })
  seqMsg: string;

  @Column("text", { name: "res_msg", nullable: true, comment: "响应报文" })
  resMsg: string | null;

  @Column("smallint", {
    name: "trs_sta",
    comment: "交易状态，0-处理中，1-成功，2-失败，3-状态未知",
  })
  trsSta: number;

  @Column("datetime", { name: "seq_time", nullable: true, comment: "请求时间" })
  seqTime: Date | null;

  @Column("datetime", { name: "res_time", nullable: true, comment: "响应时间" })
  resTime: Date | null;

  @Column("varchar", {
    name: "bus_no",
    nullable: true,
    comment: "关联的业务编号",
    length: 40,
  })
  busNo: string | null;
}
