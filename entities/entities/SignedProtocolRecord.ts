import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "signed_protocol_record_i0",
  ["templateService", "custNo", "custName", "busNo", "fileType"],
  {}
)
@Entity("signed_protocol_record", { schema: "dc_scm_payment_test" })
export class SignedProtocolRecord {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键id" })
  id: string;

  @Column("varchar", {
    name: "template_service",
    comment:
      "使用模板的数据库名称 dc_scm,dc_scm_e,dc_scm_payment_test,dc_scm_credit,dc_scm_company,dc_scm_debt",
    length: 20,
  })
  templateService: string;

  @Column("bigint", { name: "cust_id", nullable: true, comment: "企业id" })
  custId: string | null;

  @Column("varchar", {
    name: "cust_no",
    nullable: true,
    comment: "企业编号",
    length: 50,
  })
  custNo: string | null;

  @Column("varchar", {
    name: "cust_name",
    nullable: true,
    comment: "企业名称",
    length: 300,
  })
  custName: string | null;

  @Column("varchar", {
    name: "file_name",
    nullable: true,
    comment: "资料名称",
    length: 255,
  })
  fileName: string | null;

  @Column("varchar", {
    name: "file_url",
    nullable: true,
    comment: "资料路径",
    length: 255,
  })
  fileUrl: string | null;

  @Column("varchar", {
    name: "file_type",
    nullable: true,
    comment: "资料类型",
    length: 2,
  })
  fileType: string | null;

  @Column("varchar", { name: "agreement_no", comment: "协议编号", length: 30 })
  agreementNo: string;

  @Column("varchar", {
    name: "bus_no",
    nullable: true,
    comment: "业务编号（账款导入编号龙单编号 融资编号）",
    length: 50,
  })
  busNo: string | null;

  @Column("bigint", { name: "create_id", nullable: true, comment: "创建人id" })
  createId: string | null;

  @Column("varchar", {
    name: "create_name",
    nullable: true,
    comment: "创建人名称",
    length: 255,
  })
  createName: string | null;

  @Column("datetime", { name: "create_time", comment: "创建时间" })
  createTime: Date;

  @Column("bigint", { name: "update_id", nullable: true, comment: "修改人id" })
  updateId: string | null;

  @Column("varchar", {
    name: "update_name",
    nullable: true,
    comment: "修改人名称",
    length: 255,
  })
  updateName: string | null;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    comment: "更新时间",
  })
  updateTime: Date | null;
}
