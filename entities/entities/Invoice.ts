import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("invoice", { schema: "dc_scm_payment_test" })
export class Invoice {
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
    name: "inv_ctr_no",
    nullable: true,
    comment: "发票合同编号",
    length: 100,
  })
  invCtrNo: string | null;

  @Column("varchar", {
    name: "inv_code",
    nullable: true,
    comment: "发票代码",
    length: 50,
  })
  invCode: string | null;

  @Column("varchar", {
    name: "inv_num",
    nullable: true,
    comment: "发票号码",
    length: 100,
  })
  invNum: string | null;

  @Column("decimal", {
    name: "inv_tax_amt",
    comment: "发票含税金额",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  invTaxAmt: string;

  @Column("decimal", {
    name: "inv_amt",
    comment: "发票不含税金额",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  invAmt: string;

  @Column("date", { name: "open_date", nullable: true, comment: "开票日期" })
  openDate: string | null;

  @Column("varchar", {
    name: "inv_check_code",
    nullable: true,
    comment: "发票校验码",
    length: 100,
  })
  invCheckCode: string | null;
}
