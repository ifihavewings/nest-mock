import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scb_file_manage", { schema: "scb_bill" })
export class ScbFileManage {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键" })
  id: string;

  @Column("varchar", {
    name: "batch_number",
    nullable: true,
    comment: "附件批次号",
    length: 32,
  })
  batchNumber: string | null;

  @Column("varchar", {
    name: "annex_name",
    nullable: true,
    comment: "附件名称",
    length: 128,
  })
  annexName: string | null;

  @Column("datetime", {
    name: "file_date",
    nullable: true,
    comment: "上传日期",
  })
  fileDate: Date | null;

  @Column("varchar", {
    name: "file_name",
    nullable: true,
    comment: "文件名称",
    length: 128,
  })
  fileName: string | null;

  @Column("varchar", {
    name: "file_type",
    nullable: true,
    comment:
      "附件类型 FT01  营业执照 FT02  法定代表人 FT03  财务报表 FT04  授权经办人 FT05  贴现申请人授权委托书 FT06  征信信息 FT07  其他 FT08  企业承诺函 FT09  冻结 FT10  冻结解除 FT11  贴现协议 FT12  征信授权书",
    length: 4,
  })
  fileType: string | null;

  @Column("varchar", {
    name: "file_status",
    nullable: true,
    comment: "上传状态",
    length: 2,
  })
  fileStatus: string | null;

  @Column("varchar", {
    name: "file_sign",
    nullable: true,
    comment: "锁定标识0锁定1未锁定",
    length: 2,
  })
  fileSign: string | null;

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

  @Column("char", {
    name: "delete_flag",
    nullable: true,
    comment: "删除标识 是：1，否：0",
    length: 1,
  })
  deleteFlag: string | null;

  @Column("varchar", {
    name: "file_path",
    nullable: true,
    comment: "文件上传路径",
    length: 255,
  })
  filePath: string | null;

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
    length: 255,
  })
  updater: string | null;

  @Column("bigint", { name: "cust_id", nullable: true, comment: "企业id" })
  custId: string | null;
}
