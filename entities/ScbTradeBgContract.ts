import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scb_trade_bg_contract", { schema: "scb_bill" })
export class ScbTradeBgContract {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "自增主键" })
  id: string;

  @Column("bigint", { name: "attach_id", comment: "附件id" })
  attachId: string;

  @Column("bigint", {
    name: "batch_no",
    comment: "文件批次号，外键指向 附件表的批次id",
  })
  batchNo: string;

  @Column("varchar", { name: "contract_no", comment: "合同编号", length: 30 })
  contractNo: string;

  @Column("varchar", { name: "contract_name", comment: "合同名称", length: 50 })
  contractName: string;

  @Column("decimal", {
    name: "contract_amt",
    comment: "合同金额",
    precision: 20,
    scale: 2,
  })
  contractAmt: string;

  @Column("date", { name: "sign_date", comment: "合同签订日期" })
  signDate: string;

  @Column("char", {
    name: "contract_type",
    comment: "合同类型，合同：1，订单：2",
    length: 1,
  })
  contractType: string;

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
