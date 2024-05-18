import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scb_trade_partner", { schema: "scb_bill" })
export class ScbTradePartner {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键" })
  id: string;

  @Column("varchar", {
    name: "business_part",
    nullable: true,
    comment: "业务主体名称",
    length: 16,
  })
  businessPart: string | null;

  @Column("varchar", {
    name: "business_code",
    nullable: true,
    comment: "业务主体代码 CS02 金融机构CS03 企业",
    length: 9,
  })
  businessCode: string | null;

  @Column("varchar", {
    name: "trade_name",
    nullable: true,
    comment: "交易对手名称",
    length: 128,
  })
  tradeName: string | null;

  @Column("varchar", {
    name: "agency_name",
    nullable: true,
    comment: "机构参与者名称",
    length: 128,
  })
  agencyName: string | null;

  @Column("varchar", {
    name: "agency_code",
    nullable: true,
    comment: "机构参与者代码",
    length: 32,
  })
  agencyCode: string | null;

  @Column("varchar", {
    name: "society_credit_code",
    nullable: true,
    comment: "统一社会信用代码",
    length: 32,
  })
  societyCreditCode: string | null;

  @Column("varchar", {
    name: "channel_name",
    nullable: true,
    comment: "业务办理渠道名称",
    length: 128,
  })
  channelName: string | null;

  @Column("varchar", {
    name: "channel_code",
    nullable: true,
    comment: "业务办理渠道代码",
    length: 16,
  })
  channelCode: string | null;

  @Column("char", {
    name: "Is_ticket_platform",
    nullable: true,
    comment: "是否供票平台企业  0否1是",
    length: 1,
  })
  isTicketPlatform: string | null;

  @Column("varchar", {
    name: "bill_type",
    nullable: true,
    comment: "识别类型DT01 票据账户 DT02 银行账户",
    length: 4,
  })
  billType: string | null;

  @Column("varchar", {
    name: "bill_account",
    nullable: true,
    comment: "票据账号",
    length: 64,
  })
  billAccount: string | null;

  @Column("varchar", {
    name: "bank_account",
    nullable: true,
    comment: "银行账号",
    length: 32,
  })
  bankAccount: string | null;

  @Column("varchar", {
    name: "bank_account_name",
    nullable: true,
    comment: "银行账户名称",
    length: 128,
  })
  bankAccountName: string | null;

  @Column("varchar", {
    name: "bank_code",
    nullable: true,
    comment: "银行账户账号",
    length: 9,
  })
  bankCode: string | null;

  @Column("varchar", {
    name: "bank_open_name",
    nullable: true,
    comment: "银行账户开户行机构参与者名称",
    length: 128,
  })
  bankOpenName: string | null;

  @Column("varchar", {
    name: "bank_open_code",
    nullable: true,
    comment: "银行账户开户行机构参与者代码",
    length: 9,
  })
  bankOpenCode: string | null;

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
    comment: "删除标识  是：1，否：0",
    length: 1,
  })
  deleteFlag: string | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 128,
  })
  remark: string | null;

  @Column("bigint", {
    name: "enterprise_id",
    nullable: true,
    comment: "当前企业id",
  })
  enterpriseId: string | null;

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
