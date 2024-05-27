import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cust_dct", { schema: "dc_scm_payment" })
export class CustDct {
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

  @Column("bigint", { name: "cust_id", comment: "建档企业id" })
  custId: string;

  @Column("bigint", { name: "credit_cust_id", comment: "授信主体企业id" })
  creditCustId: string;

  @Column("smallint", {
    name: "dct_sta",
    comment: "建档状态 0-处理中，1-建档成功，2-建档失败",
  })
  dctSta: number;

  @Column("datetime", { name: "dct_time", nullable: true, comment: "建档时间" })
  dctTime: Date | null;

  @Column("datetime", {
    name: "sign_time",
    nullable: true,
    comment: "签约时间",
  })
  signTime: Date | null;

  @Column("smallint", {
    name: "sign_sta",
    comment: "签约状态 0-未签约，1-签约处理中，2-签约成功，3-签约失败",
  })
  signSta: number;

  @Column("varchar", {
    name: "dct_bus_no",
    nullable: true,
    comment: "建档业务编号",
    length: 40,
  })
  dctBusNo: string | null;

  @Column("text", { name: "dct_message", nullable: true, comment: "建档信息" })
  dctMessage: string | null;

  @Column("text", { name: "sign_message", nullable: true, comment: "签约信息" })
  signMessage: string | null;
}
