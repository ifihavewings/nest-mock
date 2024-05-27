import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("message_notice", { schema: "dc_scm_payment_test" })
export class MessageNotice {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键id" })
  id: string;

  @Column("varchar", {
    name: "msg_type",
    nullable: true,
    comment: "消息类型 0融资消息",
    length: 2,
  })
  msgType: string | null;

  @Column("varchar", {
    name: "fnc_bus_no",
    nullable: true,
    comment: "融资编号",
    length: 40,
  })
  fncBusNo: string | null;

  @Column("varchar", {
    name: "credit_bill_code",
    nullable: true,
    comment: "龙单编号",
    length: 150,
  })
  creditBillCode: string | null;

  @Column("varchar", {
    name: "rec_acct_no",
    nullable: true,
    comment: "应付账款编号",
    length: 32,
  })
  recAcctNo: string | null;

  @Column("varchar", {
    name: "msg_status",
    nullable: true,
    comment: "消息状态 0已读 1未读",
    length: 2,
  })
  msgStatus: string | null;

  @Column("varchar", {
    name: "msg_title",
    nullable: true,
    comment: "消息标题",
    length: 200,
  })
  msgTitle: string | null;

  @Column("varchar", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
    length: 20,
  })
  createTime: string | null;

  @Column("varchar", {
    name: "update_time",
    nullable: true,
    comment: "更新时间",
    length: 20,
  })
  updateTime: string | null;

  @Column("varchar", {
    name: "core_cust_no",
    nullable: true,
    comment: "核心企业编号",
    length: 50,
  })
  coreCustNo: string | null;

  @Column("varchar", {
    name: "supply_cust_no",
    nullable: true,
    comment: "供应商企业编号",
    length: 50,
  })
  supplyCustNo: string | null;
}
