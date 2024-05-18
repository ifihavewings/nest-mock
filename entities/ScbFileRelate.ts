import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scb_file_relate", { schema: "scb_bill" })
export class ScbFileRelate {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键" })
  id: string;

  @Column("bigint", { name: "business_id", nullable: true, comment: "业务id" })
  businessId: string | null;

  @Column("bigint", {
    name: "file_manage_id",
    nullable: true,
    comment: "file_manage表id",
  })
  fileManageId: string | null;

  @Column("varchar", {
    name: "revision",
    nullable: true,
    comment: "乐观锁",
    length: 32,
  })
  revision: string | null;

  @Column("bigint", { name: "create_by", nullable: true, comment: "创建人" })
  createBy: string | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
  })
  createTime: Date | null;

  @Column("bigint", { name: "update_by", nullable: true, comment: "更新人" })
  updateBy: string | null;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    comment: "更新时间",
  })
  updateTime: Date | null;

  @Column("varchar", {
    name: "delete_flag",
    nullable: true,
    comment: "删除标识 是：1，否：0",
    length: 2,
  })
  deleteFlag: string | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 128,
  })
  remark: string | null;

  @Column("varchar", {
    name: "creator",
    nullable: true,
    comment: "创建人",
    length: 30,
  })
  creator: string | null;

  @Column("varchar", {
    name: "updater",
    nullable: true,
    comment: "修改人",
    length: 30,
  })
  updater: string | null;
}
