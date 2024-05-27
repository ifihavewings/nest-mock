import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("common_file_i0", ["originTableId", "delFlag"], {})
@Entity("common_file", { schema: "dc_scm_payment" })
export class CommonFile {
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

  @Column("smallint", {
    name: "file_type",
    comment: "文件类型，见FileTypeEnum",
  })
  fileType: number;

  @Column("varchar", {
    name: "fastdfs_path",
    nullable: true,
    comment: "fastdfs文件存储路径",
    length: 300,
  })
  fastdfsPath: string | null;

  @Column("varchar", {
    name: "file_name",
    nullable: true,
    comment: "文件名称",
    length: 150,
  })
  fileName: string | null;

  @Column("bigint", { name: "origin_table_id", comment: "关联表id" })
  originTableId: string;

  @Column("varchar", {
    name: "file_no",
    nullable: true,
    comment: "上传文件唯一标识",
    length: 50,
  })
  fileNo: string | null;

  @Column("varchar", {
    name: "bank_file_name",
    nullable: true,
    comment: "sftp文件存储名称",
    length: 255,
  })
  bankFileName: string | null;

  @Column("varchar", {
    name: "origin_table_name",
    comment: "关联表名称",
    length: 100,
  })
  originTableName: string;

  @Column("varchar", {
    name: "esign_flow_id",
    nullable: true,
    comment: "e签宝流程id",
    length: 100,
  })
  esignFlowId: string | null;

  @Column("varchar", {
    name: "esign_file_id",
    nullable: true,
    comment: "e签宝文件id",
    length: 100,
  })
  esignFileId: string | null;

  @Column("varchar", {
    name: "esign_flow_state",
    nullable: true,
    comment: "e签宝签署状态0:签署中，1:签署成功，2：签署失败",
    length: 2,
  })
  esignFlowState: string | null;

  @Column("smallint", {
    name: "esign_upload_state",
    comment:
      "e签宝文件上传状态 0-文件未上传；1-文件上传中 ；2-文件上传已完成；3-文件上传失败 ；",
    default: () => "'0'",
  })
  esignUploadState: number;

  @Column("varchar", {
    name: "agreement_no",
    nullable: true,
    comment: "协议编号",
    length: 30,
  })
  agreementNo: string | null;

  @Column("varchar", {
    name: "sign_date",
    nullable: true,
    comment: "签章时间",
    length: 8,
  })
  signDate: string | null;
}
