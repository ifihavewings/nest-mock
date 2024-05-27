import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("serail_no_key", ["serialNo"], { unique: true })
@Index("cust_acc_key", ["custId", "creditCustId", "accNo"], { unique: true })
@Entity("cust_account_record", { schema: "dc_scm_payment_test" })
export class CustAccountRecord {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键id" })
  id: string;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
  })
  createTime: Date | null;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    comment: "更新时间",
  })
  updateTime: Date | null;

  @Column("bigint", { name: "create_id", nullable: true, comment: "创建人id" })
  createId: string | null;

  @Column("bigint", { name: "update_id", nullable: true, comment: "修改人id" })
  updateId: string | null;

  @Column("tinyint", {
    name: "del_flag",
    nullable: true,
    comment: "删除标识：0-正常，1-删除",
    width: 1,
    default: () => "'0'",
  })
  delFlag: boolean | null;

  @Column("bigint", { name: "cust_id", comment: "企业id" })
  custId: string;

  @Column("varchar", { name: "cust_name", comment: "企业名称", length: 200 })
  custName: string;

  @Column("varchar", { name: "cust_no", comment: "企业编号", length: 50 })
  custNo: string;

  @Column("varchar", { name: "cust_type", comment: "企业类型", length: 4 })
  custType: string;

  @Column("bigint", {
    name: "credit_cust_id",
    nullable: true,
    comment: "授信主体企业id，企业类型为核心企业时，该字段为空",
  })
  creditCustId: string | null;

  @Column("varchar", {
    name: "credit_cust_name",
    nullable: true,
    comment: "授信主体企业名称，企业类型为核心企业时，该字段为空",
    length: 50,
  })
  creditCustName: string | null;

  @Column("varchar", {
    name: "acc_no",
    nullable: true,
    comment: "账号",
    length: 50,
  })
  accNo: string | null;

  @Column("varchar", {
    name: "trade_mem_code",
    nullable: true,
    comment: "交易会员代码",
    length: 50,
  })
  tradeMemCode: string | null;

  @Column("varchar", {
    name: "serial_no",
    nullable: true,
    unique: true,
    comment: "开户交易流水号",
    length: 40,
  })
  serialNo: string | null;

  @Column("smallint", {
    name: "open_sta",
    nullable: true,
    comment: "开户状态，0-开户处理中，1-开户成功，2-开户失败",
  })
  openSta: number | null;

  @Column("varchar", {
    name: "merchant_no",
    nullable: true,
    comment: "商户编号",
    length: 50,
  })
  merchantNo: string | null;
}
