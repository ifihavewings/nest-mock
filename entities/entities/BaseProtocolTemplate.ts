import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "base_protocol_template_i0",
  ["templateService", "custNo", "custName", "protocolType", "templateType"],
  {}
)
@Entity("base_protocol_template", { schema: "dc_scm_payment_test" })
export class BaseProtocolTemplate {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键id" })
  id: string;

  @Column("varchar", {
    name: "template_type",
    comment: "协议模板类型 0公共模板 1个性化模板",
    length: 2,
  })
  templateType: string;

  @Column("varchar", {
    name: "prd_type",
    comment: "产品类型 0龙盈链平台协议 1数字保理协议 ",
    length: 2,
  })
  prdType: string;

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

  @Column("bigint", { name: "template_version", comment: "协议版本编号" })
  templateVersion: string;

  @Column("varchar", {
    name: "template_name",
    comment: "协议模板名称",
    length: 255,
  })
  templateName: string;

  @Column("varchar", {
    name: "template_url",
    comment: "协议模板路径",
    length: 255,
  })
  templateUrl: string;

  @Column("varchar", { name: "protocol_type", comment: "协议类型", length: 2 })
  protocolType: string;

  @Column("bigint", { name: "create_id", comment: "创建人id" })
  createId: string;

  @Column("varchar", {
    name: "create_name",
    comment: "创建人名称",
    length: 255,
  })
  createName: string;

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
