import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scb_agency_partner", { schema: "scb_bill" })
export class ScbAgencyPartner {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键" })
  id: string;

  @Column("varchar", {
    name: "channel_code",
    nullable: true,
    comment: "业务办理渠道代码",
    length: 6,
  })
  channelCode: string | null;

  @Column("varchar", {
    name: "agency_code",
    nullable: true,
    comment: "机构参与者代码",
    length: 32,
  })
  agencyCode: string | null;

  @Column("varchar", {
    name: "agency_encode",
    nullable: true,
    comment: "机构参与者编码",
    length: 32,
  })
  agencyEncode: string | null;

  @Column("varchar", {
    name: "agency_category",
    nullable: true,
    comment: "机构参与者类别代码",
    length: 6,
  })
  agencyCategory: string | null;

  @Column("varchar", {
    name: "agency_type_code",
    nullable: true,
    comment: "机构参与者类型代码",
    length: 6,
  })
  agencyTypeCode: string | null;

  @Column("varchar", {
    name: "agency_name",
    nullable: true,
    comment: "机构参与者全称（中文）",
    length: 128,
  })
  agencyName: string | null;

  @Column("varchar", {
    name: "agency_english_name",
    nullable: true,
    comment: "机构参与者全称（英文）",
    length: 32,
  })
  agencyEnglishName: string | null;

  @Column("varchar", {
    name: "agency_short_name",
    nullable: true,
    comment: "机构参与者简称（中文）",
    length: 128,
  })
  agencyShortName: string | null;

  @Column("varchar", {
    name: "agency_short_english_name",
    nullable: true,
    comment: "机构参与者简称（英文）",
    length: 32,
  })
  agencyShortEnglishName: string | null;

  @Column("varchar", {
    name: "credit_code",
    nullable: true,
    comment: "统一社会信用代码",
    length: 18,
  })
  creditCode: string | null;

  @Column("varchar", {
    name: "province_code",
    nullable: true,
    comment: "省份代码",
    length: 6,
  })
  provinceCode: string | null;

  @Column("varchar", {
    name: "legal_person_code",
    nullable: true,
    comment: "法人级别代码",
    length: 16,
  })
  legalPersonCode: string | null;

  @Column("datetime", {
    name: "product_start_date",
    nullable: true,
    comment: "产品有效日期开始日期",
  })
  productStartDate: Date | null;

  @Column("datetime", {
    name: "product_end_date",
    nullable: true,
    comment: "产品有效日期结束日期",
  })
  productEndDate: Date | null;

  @Column("varchar", {
    name: "agency_partner_state",
    nullable: true,
    comment: "机构参与者状态",
    length: 4,
  })
  agencyPartnerState: string | null;

  @Column("varchar", {
    name: "trade_account_state",
    nullable: true,
    comment: "交易账户状态",
    length: 4,
  })
  tradeAccountState: string | null;

  @Column("varchar", {
    name: "trusteeship_state",
    nullable: true,
    comment: "托管账户状态",
    length: 4,
  })
  trusteeshipState: string | null;

  @Column("varchar", {
    name: "legal_person",
    nullable: true,
    comment: "法定代表人或负责人",
    length: 128,
  })
  legalPerson: string | null;

  @Column("decimal", {
    name: "register_capital",
    nullable: true,
    comment: "注册资本",
    precision: 24,
    scale: 2,
  })
  registerCapital: string | null;

  @Column("varchar", {
    name: "address",
    nullable: true,
    comment: "地址",
    length: 128,
  })
  address: string | null;

  @Column("varchar", {
    name: "contacts_person",
    nullable: true,
    comment: "联系人",
    length: 64,
  })
  contactsPerson: string | null;

  @Column("varchar", {
    name: "telephone",
    nullable: true,
    comment: "联系电话",
    length: 11,
  })
  telephone: string | null;

  @Column("varchar", {
    name: "fax",
    nullable: true,
    comment: "传真",
    length: 32,
  })
  fax: string | null;

  @Column("varchar", {
    name: "postcode",
    nullable: true,
    comment: "邮编",
    length: 6,
  })
  postcode: string | null;

  @Column("varchar", {
    name: "pay_bank_number",
    nullable: true,
    comment: "机构参与者大额支付系统行号",
    length: 32,
  })
  payBankNumber: string | null;

  @Column("varchar", {
    name: "mercialdraft_bank_number",
    nullable: true,
    comment: "电票代理行大额支付系统行号",
    length: 32,
  })
  mercialdraftBankNumber: string | null;

  @Column("varchar", {
    name: "mercialdraft_account_number",
    nullable: true,
    comment: "电票代理账户账号",
    length: 32,
  })
  mercialdraftAccountNumber: string | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "说明",
    length: 128,
  })
  remark: string | null;

  @Column("char", {
    name: "delete_flag",
    nullable: true,
    comment: "删除标识，是：1，否：0",
    length: 1,
    default: () => "'0'",
  })
  deleteFlag: string | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date | null;

  @Column("bigint", {
    name: "create_by",
    nullable: true,
    comment: "创建人ID(申请人id)",
    unsigned: true,
  })
  createBy: string | null;

  @Column("varchar", {
    name: "creator",
    nullable: true,
    comment: "创建人名称(申请人名称)",
    length: 30,
  })
  creator: string | null;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    comment: "修改时间",
  })
  updateTime: Date | null;

  @Column("bigint", {
    name: "update_by",
    nullable: true,
    comment: "修改人ID",
    unsigned: true,
  })
  updateBy: string | null;

  @Column("varchar", {
    name: "updater",
    nullable: true,
    comment: "更新人名称",
    length: 30,
  })
  updater: string | null;
}
