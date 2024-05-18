import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scb_trade_bg_invoice", { schema: "scb_bill" })
export class ScbTradeBgInvoice {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "自增主键" })
  id: string;

  @Column("bigint", { name: "attach_id", comment: "附件id" })
  attachId: string;

  @Column("bigint", {
    name: "batch_no",
    comment: "文件批次号，外键指向 附件表的批次id",
  })
  batchNo: string;

  @Column("varchar", {
    name: "invoice_type",
    comment: "发票类型，增值税专用：01，增值税普通：02 全电发票：03",
    length: 2,
  })
  invoiceType: string;

  @Column("varchar", { name: "invoice_code", comment: "发票代码", length: 20 })
  invoiceCode: string;

  @Column("varchar", { name: "invoice_no", comment: "发票号码", length: 30 })
  invoiceNo: string;

  @Column("decimal", {
    name: "include_tax_amt",
    comment: "发票金额（含税）",
    precision: 20,
    scale: 2,
  })
  includeTaxAmt: string;

  @Column("decimal", {
    name: "exclude_tax_amt",
    comment: "发票金额（不含税）",
    precision: 20,
    scale: 2,
  })
  excludeTaxAmt: string;

  @Column("decimal", {
    name: "tax_amt",
    comment: "税额",
    precision: 20,
    scale: 2,
  })
  taxAmt: string;

  @Column("datetime", { name: "invoice_date", comment: "发票日期（开票日期）" })
  invoiceDate: Date;

  @Column("varchar", { name: "check_code", comment: "校验码", length: 30 })
  checkCode: string;

  @Column("varchar", {
    name: "check_state",
    comment: "状态：未验真：01，已验真：02，验真失败：03",
    length: 2,
  })
  checkState: string;

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

  @Column("bigint", { name: "create_by", comment: "创建人ID", unsigned: true })
  createBy: string;

  @Column("varchar", { name: "creator", comment: "创建人名称", length: 30 })
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

  @Column("bigint", {
    name: "revision",
    comment: "修改版本号",
    unsigned: true,
    default: () => "'0'",
  })
  revision: string;
}
