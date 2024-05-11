import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("scb_agency_partner")
export class InstitutionEntity {
    
    // bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
    @PrimaryGeneratedColumn({
        name: 'id'
    })
    id: number

    // varchar(6) DEFAULT NULL COMMENT '业务办理渠道代码',
    @Column({
        name: 'channel_code'
    })
    channelCode: string

    // varchar(32) DEFAULT NULL COMMENT '机构参与者代码',
    @Column({
        name: 'agency_code'
    })
    agencyCode: string

    // varchar(32) DEFAULT NULL COMMENT '机构参与者编码',
    @Column({
        name: 'agency_encode'
    })
    agencyEncode: string

    // varchar(6) DEFAULT NULL COMMENT '机构参与者类别代码',
    @Column({
        name: 'agency_category'
    })
    agencyCategory: string

    // varchar(6) DEFAULT NULL COMMENT '机构参与者类型代码',
    @Column({
        name: 'agency_type_code'
    })
    agencyTypeCode: string

    // varchar(128) DEFAULT NULL COMMENT '机构参与者全称（中文）',
    @Column({
        name: 'agency_name'
    })
    agencyName: string

    // varchar(32) DEFAULT NULL COMMENT '机构参与者全称（英文）',
    @Column({
        name: 'agency_english_name'
    })
    agencyEnglishName: string

    // varchar(128) DEFAULT NULL COMMENT '机构参与者简称（中文）',
    @Column({
        name: 'agency_short_name'
    })
    agencyShortName: string

    // varchar(32) DEFAULT NULL COMMENT '机构参与者简称（英文）',
    @Column({
        name: 'agency_short_english_name'
    })
    agencyShortEnglishName: string

    // varchar(18) DEFAULT NULL COMMENT '统一社会信用代码',
    @Column({
        name: 'credit_code'
    })
    creditCode: string

    // varchar(6) DEFAULT NULL COMMENT '省份代码',
    @Column({
        name: 'province_code'
    })
    provinceCode: string

    // varchar(16) DEFAULT NULL COMMENT '法人级别代码',
    @Column({
        name: 'legal_person_code'
    })
    legalPersonCode: string

    // datetime DEFAULT NULL COMMENT '产品有效日期开始日期',
    @Column({
        name: 'product_start_date'
    })
    productStartDate: Date

    // datetime DEFAULT NULL COMMENT '产品有效日期结束日期',
    @Column({
        name: 'product_end_date'
    })
    productEndDate: Date

    // varchar(4) DEFAULT NULL COMMENT '机构参与者状态',
    @Column({
        name: 'agency_partner_state'
    })
    agencyPartnerState: string

    // varchar(4) DEFAULT NULL COMMENT '交易账户状态',
    @Column({
        name: 'trade_account_state'
    })
    tradeAccountState: string

    // varchar(4) DEFAULT NULL COMMENT '托管账户状态',
    @Column({
        name: 'trusteeship_state'
    })
    trusteeshipState: string

    // varchar(128) DEFAULT NULL COMMENT '法定代表人或负责人',
    @Column({
        name: 'legal_person'
    })
    legalPerson: string

    // decimal(24,2) DEFAULT NULL COMMENT '注册资本',
    @Column({
        name: 'register_capital'
    })
    registerCapital: number

    // varchar(128) DEFAULT NULL COMMENT '地址',
    @Column({
        name: 'address'
    })
    address: string

    // varchar(64) DEFAULT NULL COMMENT '联系人',
    @Column({
        name: 'contacts_person'
    })
    contactsPerson: string

    // varchar(11) DEFAULT NULL COMMENT '联系电话',
    @Column({
        name: 'telephone'
    })
    telephone: string

    // varchar(32) DEFAULT NULL COMMENT '传真',
    @Column({
        name: 'fax'
    })
    fax: string

    // varchar(6) DEFAULT NULL COMMENT '邮编',
    @Column({
        name: 'postcode'
    })
    postcode: string

    // varchar(32) DEFAULT NULL COMMENT '机构参与者大额支付系统行号',
    @Column({
        name: 'pay_bank_number'
    })
    payBankNumber: string

    // varchar(32) DEFAULT NULL COMMENT '电票代理行大额支付系统行号',
    @Column({
        name: 'mercialdraft_bank_number'
    })
    mercialdraftBankNumber: string

    // varchar(32) DEFAULT NULL COMMENT '电票代理账户账号',
    @Column({
        name: 'mercialdraft_account_number'
    })
    mercialdraftAccountNumber: string

    // varchar(128) DEFAULT '' COMMENT '说明',
    @Column({
        name: 'remark'
    })
    remark: string

    // char(1) DEFAULT '0' COMMENT '删除标识，是：1，否：0',
    @Column({
        name: 'delete_flag'
    })
    deleteFlag: string

    // datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    @Column({
        name: 'create_time'
    })
    createTime: Date

    // bigint(20) unsigned DEFAULT NULL COMMENT '创建人ID(申请人id)',
    @Column({
        name: 'create_by'
    })
    createBy: number

    // varchar(30) DEFAULT NULL COMMENT '创建人名称(申请人名称)',
    @Column({
        name: 'creator'
    })
    creator: string

    // datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
    @Column({
        name: 'update_time'
    })
    updateTime: Date

    // bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
    @Column({
        name: 'update_by'
    })
    updateBy: number

    // varchar(30) DEFAULT NULL COMMENT '更新人名称',
    @Column({
        name: 'updater'
    })
    updater: string


}
