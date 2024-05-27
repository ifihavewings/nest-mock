import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scb_discount_related_bill", { schema: "dc_scm_payment_test" })
export class ScbDiscountRelatedBill {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键ID" })
  id: string;

  @Column("bigint", { name: "apply_id", nullable: true, comment: "贴现申请ID" })
  applyId: string | null;

  @Column("varchar", {
    name: "bill_package_num",
    nullable: true,
    comment: "票据（包）号",
    length: 32,
  })
  billPackageNum: string | null;

  @Column("varchar", {
    name: "subinterval_num",
    nullable: true,
    comment: "子区间号",
    length: 32,
  })
  subintervalNum: string | null;

  @Column("varchar", {
    name: "bill_type",
    nullable: true,
    comment: "票据种类 AC01：银票  AC02：商票",
    length: 4,
  })
  billType: string | null;

  @Column("decimal", {
    name: "bill_package_amount",
    nullable: true,
    comment: "票据（包）金额(元)",
    precision: 16,
    scale: 2,
  })
  billPackageAmount: string | null;

  @Column("varchar", {
    name: "subcontract_flag",
    nullable: true,
    comment: "分包流转标记 00：不可分包01：可分包",
    length: 2,
  })
  subcontractFlag: string | null;

  @Column("datetime", {
    name: "bill_open_time",
    nullable: true,
    comment: "出票日期",
  })
  billOpenTime: Date | null;

  @Column("datetime", {
    name: "bill_expire_time",
    nullable: true,
    comment: "到期日期",
  })
  billExpireTime: Date | null;

  @Column("bigint", {
    name: "drawer_ent_id",
    nullable: true,
    comment: "出票人id",
  })
  drawerEntId: string | null;

  @Column("varchar", {
    name: "drawer_ent_name",
    nullable: true,
    comment: "出票人名称",
    length: 128,
  })
  drawerEntName: string | null;

  @Column("bigint", {
    name: "payee_ent_id",
    nullable: true,
    comment: "收款人id",
  })
  payeeEntId: string | null;

  @Column("varchar", {
    name: "payee_ent_name",
    nullable: true,
    comment: "收款人名称",
    length: 128,
  })
  payeeEntName: string | null;

  @Column("bigint", {
    name: "acceptor_ent_id",
    nullable: true,
    comment: "承兑人id",
  })
  acceptorEntId: string | null;

  @Column("varchar", {
    name: "acceptor_ent_name",
    nullable: true,
    comment: "承兑人名称",
    length: 128,
  })
  acceptorEntName: string | null;

  @Column("varchar", {
    name: "previous_name",
    nullable: true,
    comment: "前手名称",
    length: 128,
  })
  previousName: string | null;

  @Column("decimal", {
    name: "discount_rate",
    nullable: true,
    comment: "贴现利率(%)",
    precision: 10,
    scale: 4,
  })
  discountRate: string | null;

  @Column("decimal", {
    name: "discount_amount",
    nullable: true,
    comment: "贴现金额(元)",
    precision: 16,
    scale: 2,
  })
  discountAmount: string | null;

  @Column("decimal", {
    name: "discount_interest",
    nullable: true,
    comment: "贴现利息(元)",
    precision: 16,
    scale: 2,
  })
  discountInterest: string | null;

  @Column("decimal", {
    name: "seller_pay_interest_ratio",
    nullable: true,
    comment: "卖方付息比例(%)",
    precision: 10,
    scale: 4,
  })
  sellerPayInterestRatio: string | null;

  @Column("decimal", {
    name: "settlement_amount",
    nullable: true,
    comment: "结算金额",
    precision: 16,
    scale: 2,
  })
  settlementAmount: string | null;

  @Column("varchar", {
    name: "detail_status",
    nullable: true,
    comment:
      "明细状态 00：未提交 01：待复核 02：已通过 03：已驳回 11：发送中 12：发送失败 13：确认失败 14：确认成功 15：已签收 16：已拒签 20：扣款确认拒绝 30：已清退 40：清分失败 41：清算成功 42：清算失败 50：撤回中 51：撤回成功 60：同意清偿",
    length: 2,
  })
  detailStatus: string | null;

  @Column("varchar", {
    name: "send_ret_msg",
    nullable: true,
    comment: "发送申请返回信息",
    length: 128,
  })
  sendRetMsg: string | null;

  @Column("varchar", {
    name: "msg_id",
    nullable: true,
    comment: "报文标识号",
    length: 50,
  })
  msgId: string | null;

  @Column("varchar", {
    name: "cre_dt_tm",
    nullable: true,
    comment: "报文时间",
    length: 32,
  })
  creDtTm: string | null;

  @Column("varchar", {
    name: "revoke_msg_id",
    nullable: true,
    comment: "撤销报文标识号",
    length: 50,
  })
  revokeMsgId: string | null;

  @Column("varchar", {
    name: "revoke_cre_dt_tm",
    nullable: true,
    comment: "撤销报文时间",
    length: 32,
  })
  revokeCreDtTm: string | null;

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
