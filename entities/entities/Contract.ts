import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("contract", { schema: "dc_scm_payment" })
export class Contract {
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

  @Column("varchar", {
    name: "ctr_no",
    nullable: true,
    comment: "合同编号",
    length: 100,
  })
  ctrNo: string | null;

  @Column("varchar", {
    name: "ctr_name",
    nullable: true,
    comment: "合同名称",
    length: 300,
  })
  ctrName: string | null;

  @Column("date", {
    name: "sign_date",
    nullable: true,
    comment: "合同签署日期",
  })
  signDate: string | null;

  @Column("date", { name: "ext_date", nullable: true, comment: "合同到期日" })
  extDate: string | null;

  @Column("varchar", {
    name: "first_party",
    nullable: true,
    comment: "甲方企业名称（买方，即付款方）",
    length: 300,
  })
  firstParty: string | null;

  @Column("varchar", {
    name: "second_party",
    nullable: true,
    comment: "乙方企业名称（卖方，即供应商）",
    length: 300,
  })
  secondParty: string | null;

  @Column("decimal", {
    name: "ctr_amt",
    nullable: true,
    comment: "合同金额",
    precision: 20,
    scale: 2,
  })
  ctrAmt: string | null;
}
