import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn  } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity("scb_bill", { schema: "scb_bill" })

export class ScbBill {

  constructor() {
    console.log(uuidv4())
  }

  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", {
    name: "bill_package_num",
    // nullable: true,
    comment: "票据(包)号",
    length: 50,
  })
  billPackageNum: string | null;

  @Column("varchar", {
    name: "subinterval_num",
    // nullable: true,
    comment: "子区间号",
    length: 100,
  })
  subintervalNum: string | null;

  @Column("varchar", {
    name: "init_subinterval_num",
    // nullable: true,
    comment: "初始子区间",
    length: 100,
  })
  initSubintervalNum: string | null;

  @Column("varchar", {
    name: "bill_type",
    nullable: true,
    comment: "票据种类，商票AC02，银票AC01",
    length: 4,
  })
  billType: string | null;

  @Column("decimal", {
    name: "bill_package_init_amount",
    nullable: true,
    comment: "初始金额(元)",
    precision: 13,
    scale: 2,
  })
  billPackageInitAmount: string | null;

  @Column("decimal", {
    name: "bill_package_amount",
    nullable: true,
    comment: "票据(包)金额（元）",
    precision: 13,
    scale: 2,
  })
  billPackageAmount: string | null;

  @Column("decimal", {
    name: "bill_package_available_amount",
    nullable: true,
    comment: "票据(包)可用金额（元）",
    precision: 13,
    scale: 2,
  })
  billPackageAvailableAmount: string | null;

  @Column("char", {
    name: "is_root_bill",
    nullable: true,
    comment: "是否根票0不是1是",
    length: 2,
  })
  isRootBill: string | null;

  @Column("bigint", { name: "root_bill_id", nullable: true, comment: "根票id" })
  rootBillId: string | null;

  @Column("bigint", {
    name: "parent_bill_id",
    nullable: true,
    comment: "上一级票据id",
  })
  parentBillId: string | null;

  @Column("char", {
    name: "un_transferable_flag",
    nullable: true,
    comment: "不得转让标记EM01不得转让EM00可再转让",
    length: 4,
  })
  unTransferableFlag: string | null;

  @Column("varchar", {
    name: "subcontract_flag",
    nullable: true,
    comment: "分包流转标记0不是1是",
    length: 10,
  })
  subcontractFlag: string | null;

  @Column("varchar", {
    name: "trade_register_state",
    nullable: true,
    comment: "贸易背景登记状态",
    length: 4,
  })
  tradeRegisterState: string | null;

  @Column("varchar", {
    name: "lock_flag",
    nullable: true,
    comment: "挑票锁定标识0未锁定1锁定",
    length: 4,
  })
  lockFlag: string | null;

  @Column("char", {
    name: "freeze_status",
    nullable: true,
    comment: "冻结标识0未冻结1全部冻结2部分冻结",
    length: 2,
  })
  freezeStatus: string | null;

  @Column("char", {
    name: "is_split_flag",
    nullable: true,
    comment: "是否拆包0否1是",
    length: 2,
  })
  isSplitFlag: string | null;

  @Column("varchar", {
    name: "bill_state",
    nullable: true,
    comment:
      "票据状态：已出票CS01，已承兑CS02，已收票CS03，已到期CS04，已终止CS05，已结清CS06",
    length: 4,
  })
  billState: string | null;

  @Column("varchar", {
    name: "bill_flow_flag",
    nullable: true,
    comment:
      "票据流转标识：待收票TF0101，可流通TF0301，已锁定TF0302，不可转让TF0303，已质押TF0304，待赎回TF0305，托收在途TF0401，追索中TF0402，已结束TF0501",
    length: 6,
  })
  billFlowFlag: string | null;


  @Column("datetime", {
    name: "bill_open_time",
    nullable: true,
    comment: "出票日期",
  })
  billOpenTime: Date | null;

  @Column("datetime", {
    name: "bill_expire_time",
    nullable: true,
    comment: "到期日期，出票日期不超6个月",
  })
  billExpireTime: Date | null;

  @Column("varchar", {
    name: "drawer_name",
    nullable: true,
    comment: "出票人名称",
    length: 128,
  })
  drawerName: string | null;

  @Column("bigint", {
    name: "drawer_ent_id",
    nullable: true,
    comment: "出票人id",
  })
  drawerEntId: string | null;

  @Column("varchar", {
    name: "drawer_ent_code",
    nullable: true,
    comment: "出票人统一社会信用代码",
    length: 30,
  })
  drawerEntCode: string | null;

  @Column("varchar", {
    name: "drawer_account_name",
    nullable: true,
    comment: "出票人银行账户名称",
    length: 128,
  })
  drawerAccountName: string | null;

  @Column("varchar", {
    name: "drawer_account_no",
    nullable: true,
    comment: "出票人银行账号",
    length: 100,
  })
  drawerAccountNo: string | null;

  @Column("varchar", {
    name: "drawer_bank_name",
    nullable: true,
    comment: "出票人银行账户开户行机构参与者名称",
    length: 128,
  })
  drawerBankName: string | null;

  @Column("varchar", {
    name: "drawer_channel_code",
    nullable: true,
    comment: "出票人渠道号",
    length: 50,
  })
  drawerChannelCode: string | null;

  @Column("varchar", {
    name: "drawer_channel_name",
    nullable: true,
    comment: "出票人渠道名称",
    length: 128,
  })
  drawerChannelName: string | null;

  @Column("varchar", {
    name: "payee_is_bill_plat",
    nullable: true,
    comment: "收款人是否为供票平台企业",
    length: 4,
  })
  payeeIsBillPlat: string | null;

  @Column("varchar", {
    name: "payee_name",
    nullable: true,
    comment: "收款人名称",
    length: 128,
  })
  payeeName: string | null;

  @Column("bigint", {
    name: "payee_ent_id",
    nullable: true,
    comment: "收款人id",
  })
  payeeEntId: string | null;

  @Column("varchar", {
    name: "payee_ent_code",
    nullable: true,
    comment: "收款人统一社会信用代码",
    length: 30,
  })
  payeeEntCode: string | null;

  @Column("varchar", {
    name: "payee_account_no",
    nullable: true,
    comment: "收款人账户号",
    length: 30,
  })
  payeeAccountNo: string | null;

  @Column("varchar", {
    name: "payee_account_name",
    nullable: true,
    comment: "收款人银行账户名称",
    length: 128,
  })
  payeeAccountName: string | null;

  @Column("varchar", {
    name: "payee_bank_name",
    nullable: true,
    comment: "收款人银行账户开户行机构参与者名称",
    length: 128,
  })
  payeeBankName: string | null;

  @Column("varchar", {
    name: "payee_bank_code",
    nullable: true,
    comment: "收款人银行账户开户行机构参与者编码",
    length: 20,
  })
  payeeBankCode: string | null;

  @Column("varchar", {
    name: "payee_is_special",
    nullable: true,
    comment: "是否特殊收款人0不是1是",
    length: 4,
  })
  payeeIsSpecial: string | null;

  @Column("varchar", {
    name: "payee_channel_code",
    nullable: true,
    comment: "收款人渠道号",
    length: 50,
  })
  payeeChannelCode: string | null;

  @Column("varchar", {
    name: "payee_channel_name",
    nullable: true,
    comment: "收款人渠道名称",
    length: 128,
  })
  payeeChannelName: string | null;

  @Column("varchar", {
    name: "acceptor_is_bill_plat",
    nullable: true,
    comment: "承兑人是否为供票平台企业",
    length: 10,
  })
  acceptorIsBillPlat: string | null;

  @Column("varchar", {
    name: "acceptor_channel_name",
    nullable: true,
    comment: "承兑人渠道名称",
    length: 100,
  })
  acceptorChannelName: string | null;

  @Column("varchar", {
    name: "acceptor_channel_code",
    nullable: true,
    comment: "承编码兑人渠道",
    length: 20,
  })
  acceptorChannelCode: string | null;

  @Column("varchar", {
    name: "acceptor_name",
    nullable: true,
    comment: "承兑人名称",
    length: 128,
  })
  acceptorName: string | null;

  @Column("bigint", {
    name: "acceptor_ent_id",
    nullable: true,
    comment: "承兑人id",
  })
  acceptorEntId: string | null;

  @Column("varchar", {
    name: "acceptor_ent_code",
    nullable: true,
    comment: "承兑人统一社会信用代码",
    length: 30,
  })
  acceptorEntCode: string | null;

  @Column("varchar", {
    name: "acceptor_account_no",
    nullable: true,
    comment: "承兑人账户号",
    length: 30,
  })
  acceptorAccountNo: string | null;

  @Column("varchar", {
    name: "acceptor_account_name",
    nullable: true,
    comment: "承兑人银行账户名称",
    length: 255,
  })
  acceptorAccountName: string | null;

  @Column("varchar", {
    name: "acceptor_bank_name",
    nullable: true,
    comment: "承兑人银行账户开户行机构参与者名称",
    length: 255,
  })
  acceptorBankName: string | null;

  @Column("varchar", {
    name: "acceptor_bank_code",
    nullable: true,
    comment: "承兑人银行账户开户行机构参与者编码",
    length: 20,
  })
  acceptorBankCode: string | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "说明",
    length: 128,
  })
  remark: string | null;

  @Column("char", {
    name: "delete_flag",
    comment: "删除标识，是：1，否：0",
    length: 1,
    default: () => "'0'",
  })
  deleteFlag: string;

  @Column("datetime", {
    name: "create_time",
    comment: "创建时间",
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date;

  @Column("bigint", {
    name: "create_by",
    comment: "创建人ID(申请人id)",
    unsigned: true,
  })
  createBy: string;

  @Column("varchar", {
    name: "creator",
    comment: "创建人名称(申请人名称)",
    length: 30,
  })
  creator: string;

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

  @Column("int", {
    name: "revision",
    comment: "修改版本号",
    unsigned: true,
    default: () => "'0'",
  })
  revision: number;

  @BeforeInsert()
  updateCreateTime() {
    console.log('--------------------------------------???')
    this.createTime = new Date()
    this.deleteFlag = '0'
    this.billPackageNum = uuidv4();
    this.subintervalNum = '10000'
    this.rootBillId = uuidv4()
    this.lockFlag = '0'
    this.freezeStatus = '0'
    this.isSplitFlag = '0'
    this.billState = 'CS01'
    this.billFlowFlag = 'TF0101'
    this.billOpenTime = new Date()
    this.billExpireTime = new Date('2024-07-30')

  }
  @BeforeUpdate()
  updateUpdateTime() {
    this.updateTime = new Date()
  }
}
