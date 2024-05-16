import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('scb_bill')

export class Bill {

    // bigint(20) NOT NULL AUTO_INCREMENT,
    @PrimaryGeneratedColumn({
        name: 'id'
    })
    id: number

    //  varchar(50) DEFAULT NULL COMMENT '票据(包)号',
    @Column({
        name: 'bill_package_num'
    })
    billPackageNum: string

    //  varchar(100) DEFAULT NULL COMMENT '子区间号',
    @Column({
        name: 'subinterval_num'
    })
    subintervalNum: string

    //  varchar(100) DEFAULT NULL COMMENT '初始子区间',
    @Column({
        name: 'init_subinterval_num'
    })
    initSubintervalNum: string

    //  varchar(4) DEFAULT NULL COMMENT '票据种类，商票AC02，银票AC01',
    @Column({
        name: 'bill_type'
    })
    billType: string

    //  decimal(13,2) DEFAULT NULL COMMENT '初始金额(元)',
    @Column({
        name: 'bill_package_init_amount'
    })
    billPackageInitAmount: number

    //  decimal(13,2) DEFAULT NULL COMMENT '票据(包)金额（元）',
    @Column({
        name: 'bill_package_amount'
    })
    billPackageAmount: number

    //  decimal(13,2) DEFAULT NULL COMMENT '票据(包)可用金额（元）',
    @Column({
        name: 'bill_package_available_amount'
    })
    billPackageAvailableAmount: number

    //  char(2) DEFAULT NULL COMMENT '是否根票0不是1是',
    @Column({
        name: 'is_root_bill'
    })
    isRootBill: string

    //  bigint(20) DEFAULT NULL COMMENT '根票id',
    @Column({
        name: 'root_bill_id'
    })
    rootBillId: number

    //  bigint(20) DEFAULT NULL COMMENT '上一级票据id',
    @Column({
        name: 'parent_bill_id'
    })
    parentBillId: number

    //  char(4) DEFAULT NULL COMMENT '不得转让标记EM01不得转让EM00可再转让',
    @Column({
        name: 'un_transferable_flag'
    })
    unTransferableFlag: string

    //  varchar(10) DEFAULT NULL COMMENT '分包流转标记0不是1是',
    @Column({
        name: 'subcontract_flag'
    })
    subcontractFlag: string

    //  varchar(4) DEFAULT NULL COMMENT '贸易背景登记状态',
    @Column({
        name: 'trade_register_state'
    })
    tradeRegisterState: string

    //  varchar(4) DEFAULT NULL COMMENT '挑票锁定标识0未锁定1锁定',
    @Column({
        name: 'lock_flag'
    })
    lockFlag: string

    //  char(2) DEFAULT NULL COMMENT '冻结标识0未冻结1全部冻结2部分冻结',
    @Column({
        name: 'freeze_status'
    })
    freezeStatus: string

    //  char(2) DEFAULT NULL COMMENT '是否拆包0否1是',
    @Column({
        name: 'is_split_flag'
    })
    isSplitFlag: string

    //  varchar(4) DEFAULT NULL COMMENT '票据状态：已出票CS01，已承兑CS02，已收票CS03，已到期CS04，已终止CS05，已结清CS06',
    @Column({
        name: 'bill_state'
    })
    billState: string

    //  varchar(6) DEFAULT NULL COMMENT '票据流转标识：待收票TF0101，可流通TF0301，已锁定TF0302，不可转让TF0303，已质押TF0304，待赎回TF0305，托收在途TF0401，追索中TF0402，已结束TF0501',
    @Column({
        name: 'bill_flow_flag'
    })
    billFlowFlag: string

    //  datetime DEFAULT NULL COMMENT '出票日期',
    @Column({
        name: 'bill_open_time'
    })
    billOpenTime: Date

    //  datetime DEFAULT NULL COMMENT '到期日期，出票日期不超6个月',
    @Column({
        name: 'bill_expire_time'
    })
    billExpireTime: Date

    //  varchar(128) DEFAULT NULL COMMENT '出票人名称',
    @Column({
        name: 'drawer_name'
    })
    drawerName: string

    //  bigint(20) DEFAULT NULL COMMENT '出票人id',
    @Column({
        name: 'drawer_ent_id'
    })
    drawerEntId: number

    //  varchar(30) DEFAULT NULL COMMENT '出票人统一社会信用代码',
    @Column({
        name: 'drawer_ent_code'
    })
    drawerEntCode: string

    //  varchar(128) DEFAULT NULL COMMENT '出票人银行账户名称',
    @Column({
        name: 'drawer_account_name'
    })
    drawerAccountName: string

    //  varchar(100) DEFAULT NULL COMMENT '出票人银行账号',
    @Column({
        name: 'drawer_account_no'
    })
    drawerAccountNo: string

    //  varchar(128) DEFAULT NULL COMMENT '出票人银行账户开户行机构参与者名称',
    @Column({
        name: 'drawer_bank_name'
    })
    drawerBankName: string

    //  varchar(50) DEFAULT NULL COMMENT '出票人渠道号',
    @Column({
        name: 'drawer_channel_code'
    })
    drawerChannelCode: string

    //  varchar(128) DEFAULT NULL COMMENT '出票人渠道名称',
    @Column({
        name: 'drawer_channel_name'
    })
    drawerChannelName: string

    //  varchar(4) DEFAULT NULL COMMENT '收款人是否为供票平台企业',
    @Column({
        name: 'payee_is_bill_plat'
    })
    payeeIsBillPlat: string

    //  varchar(128) DEFAULT NULL COMMENT '收款人名称',
    @Column({
        name: 'payee_name'
    })
    payeeName: string

    //  bigint(20) DEFAULT NULL COMMENT '收款人id',
    @Column({
        name: 'payee_ent_id'
    })
    payeeEntId: number

    //  varchar(30) DEFAULT NULL COMMENT '收款人统一社会信用代码',
    @Column({
        name: 'payee_ent_code'
    })
    payeeEntCode: string

    //  varchar(30) DEFAULT NULL COMMENT '收款人账户号',
    @Column({
        name: 'payee_account_no'
    })
    payeeAccountNo: string

    //  varchar(128) DEFAULT NULL COMMENT '收款人银行账户名称',
    @Column({
        name: 'payee_account_name'
    })
    payeeAccountName: string

    //  varchar(128) DEFAULT NULL COMMENT '收款人银行账户开户行机构参与者名称',
    @Column({
        name: 'payee_bank_name'
    })
    payeeBankName: string

    //  varchar(20) DEFAULT NULL COMMENT '收款人银行账户开户行机构参与者编码',
    @Column({
        name: 'payee_bank_code'
    })
    payeeBankCode: string

    //  varchar(4) DEFAULT NULL COMMENT '是否特殊收款人0不是1是',
    @Column({
        name: 'payee_is_special'
    })
    payeeIsSpecial: string

    //  varchar(50) DEFAULT NULL COMMENT '收款人渠道号',
    @Column({
        name: 'payee_channel_code'
    })
    payeeChannelCode: string

    //  varchar(128) DEFAULT NULL COMMENT '收款人渠道名称',
    @Column({
        name: 'payee_channel_name'
    })
    payeeChannelName: string

    //  varchar(10) DEFAULT NULL COMMENT '承兑人是否为供票平台企业',
    @Column({
        name: 'accept_is_bill_plat'
    })
    acceptIsBillPlat: string

    //  varchar(100) DEFAULT NULL COMMENT '承兑人渠道名称',
    @Column({
        name: 'accept_channel_name'
    })
    acceptChannelName: string

    //  varchar(20) DEFAULT NULL COMMENT '承编码兑人渠道',
    @Column({
        name: 'accept_channel_code'
    })
    acceptChannelCode: string

    //  varchar(128) DEFAULT NULL COMMENT '承兑人名称',
    @Column({
        name: 'accept_ent_name'
    })
    acceptEntName: string

    //  bigint(20) DEFAULT NULL COMMENT '承兑人id',
    @Column({
        name: 'accept_ent_id'
    })
    acceptEntId: number

    //  varchar(30) DEFAULT NULL COMMENT '承兑人统一社会信用代码',
    @Column({
        name: 'accept_ent_code'
    })
    acceptEntCode: string

    //  varchar(30) DEFAULT NULL COMMENT '承兑人账户号',
    @Column({
        name: 'accept_account_no'
    })
    acceptAccountNo: string

    //  varchar(255) DEFAULT NULL COMMENT '承兑人银行账户名称',
    @Column({
        name: 'accept_account_name'
    })
    acceptAccountName: string

    //  varchar(255) DEFAULT NULL COMMENT '承兑人银行账户开户行机构参与者名称',
    @Column({
        name: 'accept_bank_name'
    })
    acceptBankName: string

    //  varchar(20) DEFAULT NULL COMMENT '承兑人银行账户开户行机构参与者编码',
    @Column({
        name: 'accept_bank_code'
    })
    acceptBankCode: string

    //  varchar(128) DEFAULT '' COMMENT '说明',
    @Column({
        name: 'remark'
    })
    remark: string

    //  char(1) NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
    @Column({
        name: 'delete_flag'
    })
    deleteFlag: string

    //  datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    @Column({
        name: 'create_time'
    })
    createTime: Date

    //  bigint(20) unsigned NOT NULL COMMENT '创建人ID(申请人id)',
    @Column({
        name: 'create_by',
        default: 100
    })
    createBy: number

    //  varchar(30) NOT NULL COMMENT '创建人名称(申请人名称)',
    @Column({
        name: 'creator',
        default: 'ssv'
    })
    creator: string

    //  datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
    @Column({
        name: 'update_time'
    })
    updateTime: Date

    //  bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
    @Column({
        name: 'update_by'
    })
    updateBy: number

    //  varchar(30) DEFAULT NULL COMMENT '更新人名称',
    @Column({
        name: 'updater'
    })
    updater: string

    //  int(11) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
    @Column({
        name: 'revision'
    })
    revision: number


}