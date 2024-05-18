import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scb_activity_approval_record", { schema: "scb_base" })
export class ScbActivityApprovalRecord {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键ID" })
  id: string;

  @Column("varchar", {
    name: "business_type",
    nullable: true,
    comment:
      "业务类型 01：注册 02：登录 03：企业入驻 10：出票登记 11：提示承兑 12：提示收票 13：撤票  20：出票贸易信息登记 30：背书转让 40：贴现申请 50：到期提示付款 60：冻结 61：解冻",
    length: 5,
  })
  businessType: string | null;

  @Column("bigint", { name: "business_id", nullable: true, comment: "业务ID" })
  businessId: string | null;

  @Column("varchar", {
    name: "business_num",
    nullable: true,
    comment: "业务单号",
    length: 32,
  })
  businessNum: string | null;

  @Column("varchar", {
    name: "approval_role",
    nullable: true,
    comment: "审批岗位 审批角色",
    length: 32,
  })
  approvalRole: string | null;

  @Column("bigint", { name: "approval_by", nullable: true, comment: "审批人" })
  approvalBy: string | null;

  @Column("varchar", {
    name: "approver",
    nullable: true,
    comment: "审批人名称",
    length: 32,
  })
  approver: string | null;

  @Column("datetime", {
    name: "approval_time",
    nullable: true,
    comment: "审批时间",
  })
  approvalTime: Date | null;

  @Column("varchar", {
    name: "approval_type",
    nullable: true,
    comment:
      "审批类型 00：待处理 01：提交  02：同意 03：拒绝 04：驳回 05：撤回",
    length: 32,
  })
  approvalType: string | null;

  @Column("varchar", {
    name: "approval_opinion",
    nullable: true,
    comment: "审批意见",
    length: 32,
  })
  approvalOpinion: string | null;

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
