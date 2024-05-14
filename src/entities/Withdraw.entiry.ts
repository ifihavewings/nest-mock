import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from "typeorm"

@Entity("scb_withdraw_bill")
export class Withdraw {

    // bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
    @PrimaryGeneratedColumn({
        name: 'id'
    })
    id: number

    // varchar(32) DEFAULT NULL COMMENT '票据（包）号',
    @Column({
        name: 'bill_package_num'
    })
    billPackageNum: string

    // varchar(32) DEFAULT NULL COMMENT '子区间号',
    @Column({
        name: 'subinterval_num'
    })
    subintervalNum: string

    // varchar(4) DEFAULT NULL COMMENT '票据种类 AC01 银票/财票 AC02 商票',
    @Column({
        name: 'bill_type'
    })
    billType: string

    // decimal(16,2) DEFAULT NULL COMMENT '票据（包）金额（元）',
    @Column({
        name: 'bill_package_amount'
    })
    billPackageAmount: number

    // varchar(2) DEFAULT NULL COMMENT '分包流转标记',
    @Column({
        name: 'subcontract_flag'
    })
    subcontractFlag: string

    // datetime DEFAULT NULL COMMENT '出票日期',
    @Column({
        name: 'bill_open_time'
    })
    billOpenTime: Date

    // datetime DEFAULT NULL COMMENT '到期日期',
    @Column({
        name: 'bill_expire_time'
    })
    billExpireTime: Date

    // bigint(20) DEFAULT NULL COMMENT '出票人id',
    @Column({
        name: 'drawer_ent_id'
    })
    drawerEntId: number

    // varchar(128) DEFAULT NULL COMMENT '出票人名称',
    @Column({
        name: 'drawer_name'
    })
    drawerName: string

    // bigint(20) DEFAULT NULL COMMENT '收款人id',
    @Column({
        name: 'payee_ent_id'
    })
    payeeEntId: number

    // varchar(128) DEFAULT NULL COMMENT '收款人名称',
    @Column({
        name: 'payee_name'
    })
    payeeName: string

    // varchar(32) DEFAULT NULL COMMENT '承兑人id',
    @Column({
        name: 'acceptor_ent_id'
    })
    acceptorEntId: string

    // varchar(128) DEFAULT NULL COMMENT '承兑人名称',
    @Column({
        name: 'acceptor_name'
    })
    acceptorName: string

    // varchar(2) DEFAULT NULL COMMENT '业务状态 10:未发送 11:发送中 12:发送失败 13:确认失败 14:确认成功',
    @Column({
        name: 'business_status'
    })
    businessStatus: string

    // varchar(2) DEFAULT NULL COMMENT '审批状态00:未提交 01:待复核 02:已通过 03:已驳回',
    @Column({
        name: 'approve_status'
    })
    approveStatus: string

    // varchar(128) DEFAULT NULL COMMENT '发送申请返回信息',
    @Column({
        name: 'return_info'
    })
    returnInfo: string

    // datetime DEFAULT NULL COMMENT '申请日期',
    @Column({
        name: 'apply_date'
    })
    applyDate: Date

    // varchar(32) DEFAULT NULL COMMENT '乐观锁',
    @Column({
        name: 'revision'
    })
    revision: string

    // bigint(20) DEFAULT NULL COMMENT '创建人',
    @Column({
        name: 'create_by'
    })
    createBy: number

    // datetime DEFAULT NULL COMMENT '创建时间',
    @Column({
        name: 'create_time'
    })
    createTime: Date

    // bigint(20) DEFAULT NULL COMMENT '更新人',
    @Column({
        name: 'update_by'
    })
    updateBy: number

    // datetime DEFAULT NULL COMMENT '更新时间',
    @Column({
        name: 'update_time'
    })
    updateTime: Date

    // char(1) DEFAULT NULL COMMENT '删除标识 是：1，否：0',
    @Column({
        name: 'delete_flag'
    })
    deleteFlag: string

    // varchar(128) DEFAULT NULL COMMENT '备注',
    @Column({
        name: 'remark'
    })
    remark: string

    // bigint(20) DEFAULT NULL COMMENT '审批人id',
    @Column({
        name: 'approve_peo_id'
    })
    approvePeoId: number

    // varchar(128) DEFAULT NULL COMMENT '审批人姓名',
    @Column({
        name: 'approve_peo_name'
    })
    approvePeoName: string

    // datetime DEFAULT NULL COMMENT '发送日期',
    @Column({
        name: 'send_date'
    })
    sendDate: Date

    // varchar(30) DEFAULT NULL COMMENT '创建人',
    @Column({
        name: 'creator'
    })
    creator: string

    // varchar(30) DEFAULT NULL COMMENT '修改人',
    @Column({
        name: 'updater'
    })
    updater: string

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