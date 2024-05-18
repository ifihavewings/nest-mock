import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scb_parameter_config", { schema: "scb_base" })
export class ScbParameterConfig {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键ID" })
  id: string;

  @Column("varchar", {
    name: "parameter_code",
    nullable: true,
    comment: "参数编码",
    length: 32,
  })
  parameterCode: string | null;

  @Column("varchar", {
    name: "parameter_name",
    nullable: true,
    comment: "参数名称",
    length: 32,
  })
  parameterName: string | null;

  @Column("varchar", {
    name: "parameter_value",
    nullable: true,
    comment: "参数值",
    length: 1024,
  })
  parameterValue: string | null;

  @Column("char", {
    name: "delete_flag",
    nullable: true,
    comment: "删除标识 0：否1：是",
    length: 1,
    default: () => "'0'",
  })
  deleteFlag: string | null;

  @Column("int", { name: "revision", nullable: true, comment: "乐观锁" })
  revision: number | null;

  @Column("bigint", { name: "create_by", nullable: true, comment: "创建人" })
  createBy: string | null;

  @Column("varchar", {
    name: "creator",
    nullable: true,
    comment: "创建者名称",
    length: 32,
  })
  creator: string | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
  })
  createTime: Date | null;

  @Column("bigint", { name: "update_by", nullable: true, comment: "更新人" })
  updateBy: string | null;

  @Column("varchar", {
    name: "updater",
    nullable: true,
    comment: "更新者名称",
    length: 32,
  })
  updater: string | null;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    comment: "更新时间",
  })
  updateTime: Date | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 256,
  })
  remark: string | null;
}
