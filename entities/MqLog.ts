import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bus_no", ["busNo"], {})
@Entity("mq_log", { schema: "dc_scm_payment_test" })
export class MqLog {
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

  @Column("smallint", { name: "msg_type", comment: "消息类型，1-生产，2-消费" })
  msgType: number;

  @Column("varchar", {
    name: "sender_server",
    comment: "发送方服务",
    length: 50,
  })
  senderServer: string;

  @Column("varchar", {
    name: "receiver_server",
    comment: "接收方服务",
    length: 50,
  })
  receiverServer: string;

  @Column("text", { name: "msg_data", comment: "消息体" })
  msgData: string;

  @Column("smallint", {
    name: "trs_sta",
    comment: "交易状态，0-待处理，1-成功，2-失败，3-状态未知",
  })
  trsSta: number;

  @Column("varchar", { name: "bus_no", comment: "关联的业务编号", length: 40 })
  busNo: string;

  @Column("varchar", { name: "queue", comment: "队列", length: 100 })
  queue: string;

  @Column("smallint", {
    name: "pro_count",
    comment: "处理次数,默认0",
    default: () => "'0'",
  })
  proCount: number;

  @Column("varchar", { name: "exchange", comment: "交换机", length: 100 })
  exchange: string;

  @Column("smallint", { name: "bus_type", comment: "业务类型，1-龙信融资" })
  busType: number;

  @Column("varchar", {
    name: "msg_id",
    nullable: true,
    comment: "消息ID",
    length: 40,
  })
  msgId: string | null;
}
