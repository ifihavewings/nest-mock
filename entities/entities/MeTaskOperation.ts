import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "me_task_operation_i0",
  ["relId", "taskType", "dealState", "resultState"],
  {}
)
@Index("corp_id_idx", ["corpId"], {})
@Entity("me_task_operation", { schema: "dc_scm_payment_test" })
export class MeTaskOperation {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "corp_id", comment: "企业id", length: 32 })
  corpId: string;

  @Column("varchar", { name: "corp_name", comment: "企业名称", length: 32 })
  corpName: string;

  @Column("varchar", {
    name: "task_type",
    comment:
      "任务类型 企业端待办任务: 1龙信签发 2应付账款导入 3龙信转让 4龙信融资；运营端待办任务：1企业入驻 2企业信息变更 3企业人员设置 4龙信融资申请 5龙信兑付申请",
    length: 8,
  })
  taskType: string;

  @Column("varchar", {
    name: "rel_id",
    comment: "关联应付账款 龙信表主键",
    length: 32,
  })
  relId: string;

  @Column("varchar", {
    name: "deal_state",
    comment: "处理状态 0未处理 1已处理",
    length: 32,
  })
  dealState: string;

  @Column("varchar", { name: "apply_id", comment: "经办人id", length: 32 })
  applyId: string;

  @Column("varchar", { name: "apply_name", comment: "经办人", length: 32 })
  applyName: string;

  @Column("varchar", { name: "apply_time", comment: "经办时间", length: 32 })
  applyTime: string;

  @Column("varchar", {
    name: "review_id",
    nullable: true,
    comment: "复核人id",
    length: 32,
  })
  reviewId: string | null;

  @Column("varchar", {
    name: "review_name",
    nullable: true,
    comment: "复核人",
    length: 32,
  })
  reviewName: string | null;

  @Column("varchar", {
    name: "review_time",
    nullable: true,
    comment: "复核时间",
    length: 32,
  })
  reviewTime: string | null;

  @Column("varchar", {
    name: "result_state",
    nullable: true,
    comment: "复核结果 0待审核  1通过 2拒绝",
    length: 8,
  })
  resultState: string | null;

  @Column("varchar", {
    name: "result_remark",
    nullable: true,
    comment: "复核意见",
    length: 256,
  })
  resultRemark: string | null;

  @Column("varchar", {
    name: "ext_field1",
    nullable: true,
    comment: "预留字段",
    length: 32,
  })
  extField1: string | null;

  @Column("varchar", {
    name: "ext_field2",
    nullable: true,
    comment: "预留字段",
    length: 32,
  })
  extField2: string | null;

  @Column("varchar", {
    name: "ext_field3",
    nullable: true,
    comment: "预留字段",
    length: 32,
  })
  extField3: string | null;

  @Column("varchar", {
    name: "corp_no",
    nullable: true,
    comment: "企业机构编号",
    length: 40,
  })
  corpNo: string | null;

  @Column("varchar", {
    name: "corp_credit",
    nullable: true,
    comment: "企业统一社会信用代码",
    length: 50,
  })
  corpCredit: string | null;

  @Column("varchar", {
    name: "auth_type",
    nullable: true,
    comment: "审批待办任务类型，1-企业端待办任务，2-运营端待办任务",
    length: 2,
  })
  authType: string | null;

  @Column("varchar", {
    name: "cust_type",
    nullable: true,
    comment: "企业类型",
    length: 3,
  })
  custType: string | null;

  @Column("smallint", {
    name: "position",
    comment: "任务所在岗位 1供应商授权岗 2核心企业经办岗务 3核心企业授权岗",
    default: () => "'0'",
  })
  position: number;

  @Column("smallint", {
    name: "bus_type",
    nullable: true,
    comment: "0应付账款 1应收账款",
  })
  busType: number | null;
}
