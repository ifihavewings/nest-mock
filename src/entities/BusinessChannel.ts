import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('scb_business_channel')
export class BusinessChannel {
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

    // varchar(16) DEFAULT NULL COMMENT '业务办理渠道类别代码',
    @Column({
        name: 'channel_sort_code'
    })
    channelSortCode: string
    
    // varchar(128) DEFAULT NULL COMMENT '业务办理渠道名称',
    @Column({
        name: 'channel_name'
    })
    channelName: string
    
    // varchar(4) DEFAULT NULL COMMENT '业务办理渠道状态',
    @Column({
        name: 'channel_state'
    })
    channelState: string
    
    // varchar(18) DEFAULT NULL COMMENT '统一社会信用代码',
    @Column({
        name: 'credit_code'
    })
    creditCode: string
    
    // varchar(16) DEFAULT NULL COMMENT '大额支付系统行号',
    @Column({
        name: 'pay_system_num'
    })
    paySystemNum: string
    
    // varchar(6) DEFAULT NULL COMMENT '清算模式',
    @Column({
        name: 'settle_type'
    })
    settleType: string
    
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
    updateBy: string
    
    // varchar(30) DEFAULT NULL COMMENT '更新人名称',
    @Column({
        name: 'updater'
    })
    updater: string
    
}