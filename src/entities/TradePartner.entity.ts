import { Column, Entity, PrimaryGeneratedColumn, Generated, BeforeInsert, BeforeUpdate} from "typeorm";
@Entity("scb_trade_partner")
export class TradePartner {
    // bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
    @PrimaryGeneratedColumn({
        name: 'id'
    })
    id: number
    // varchar(16) DEFAULT NULL COMMENT '业务主体名称',
    @Column({
        name: 'business_part'
    })
    businessPart: string
    // varchar(9) DEFAULT NULL COMMENT '业务主体代码 CS02 金融机构CS03 企业',
    @Column({
        name: 'business_code'
    })
    businessCode: string
    // varchar(128) DEFAULT NULL COMMENT '交易对手名称',
    @Column({
        name: 'trade_name'
    })
    tradeName: string
    // varchar(128) DEFAULT NULL COMMENT '机构参与者名称',
    @Column({
        name: 'agency_name'
    })
    agencyName:string
    // varchar(32) DEFAULT NULL COMMENT '机构参与者代码',
    @Column({
        name: 'agency_code'
    })
    agencyCode:string
    // varchar(32) DEFAULT NULL COMMENT '统一社会信用代码',
    @Column({
        name: 'society_credit_code'
    })
    societyCreditCode:string
    // varchar(128) DEFAULT NULL COMMENT '业务办理渠道名称',
    @Column({
        name: 'channel_name'
    })
    channelName:string
    // varchar(16) DEFAULT NULL COMMENT '业务办理渠道代码',
    @Column({
        name: 'channel_code'
    })
    channelCode:string
    // char(1) DEFAULT NULL COMMENT '是否供票平台企业  0否1是',
    @Column({
        name: 'Is_ticket_platform'
    })
    IsTicketPlatform:string
    // varchar(4) DEFAULT NULL COMMENT '识别类型DT01 票据账户 DT02 银行账户',
    @Column({
        name: 'bill_type'
    })
    billType:string
    // varchar(64) DEFAULT NULL COMMENT '票据账号',
    @Column({
        name: 'bill_account'
    })
    billAccount:string
    // varchar(32) DEFAULT NULL COMMENT '银行账号',
    @Column({
        name: 'bank_account'
    })
    bankAccount:string
    // varchar(128) DEFAULT NULL COMMENT '银行账户名称',
    @Column({
        name: 'bank_account_name'
    })
    bankAccountName:string
    // varchar(9) DEFAULT NULL COMMENT '银行账户账号',
    @Column({
        name: 'bank_code'
    })
    bankCode:string
    // varchar(128) DEFAULT NULL COMMENT '银行账户开户行机构参与者名称',
    @Column({
        name: 'bank_open_name'
    })
    bankOpenName:string
    // varchar(9) DEFAULT NULL COMMENT '银行账户开户行机构参与者代码',
    @Column({
        name: 'bank_open_code'
    })
    bankOpenCode:string
    // varchar(32) DEFAULT NULL COMMENT '乐观锁',
    @Column({
        name: 'revision'
    })
    revision:string
    // bigint(20) DEFAULT NULL COMMENT '创建人',
    @Column({
        name: 'create_by'
    })
    createBy:number
    // datetime DEFAULT NULL COMMENT '创建时间',
    @Column({
        name: 'create_time'
    })
    createTime:Date
    // bigint(20) DEFAULT NULL COMMENT '更新人',
    @Column({
        name: 'update_by'
    })
    updateBy: number
    // datetime DEFAULT NULL COMMENT '更新时间',
    @Column({
        name: 'update_time'
    })
    updateTime:Date
    // char(1) DEFAULT NULL COMMENT '删除标识  是：1，否：0',
    @Column({
        name: 'delete_flag'
    })
    deleteFlag:string
    // varchar(128) DEFAULT NULL COMMENT '备注',
    @Column({
        name: 'remark'
    })
    remark:string
    // bigint(20) DEFAULT NULL COMMENT '当前企业id',
    @Column({
        name: 'enterprise_id'
    })
    enterpriseId:string
    // varchar(30) DEFAULT NULL COMMENT '创建人',
    @Column({
        name: 'creator'
    })
    creator:string
    // varchar(30) DEFAULT NULL COMMENT '修改人',
    @Column({
        name: 'updater'
    })
    updater:string

    @BeforeInsert()
    updateCreateTime() {
        this.createTime = new Date()
        this.deleteFlag = '0'
    }

    @BeforeUpdate()
    updateUpdateTime() {
        this.updateTime = new Date()
    }
}