export class WithdrawDTO {
      // bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
 
    id: number

    // varchar(32) DEFAULT NULL COMMENT '票据（包）号',
    billPackageNum: string

    // varchar(32) DEFAULT NULL COMMENT '子区间号',
    subintervalNum: string

    // varchar(4) DEFAULT NULL COMMENT '票据种类 AC01 银票/财票 AC02 商票',
    billType: string

    // decimal(16,2) DEFAULT NULL COMMENT '票据（包）金额（元）',
    billPackageAmount: string

    // varchar(2) DEFAULT NULL COMMENT '分包流转标记',
    subcontractFlag: string

    // datetime DEFAULT NULL COMMENT '出票日期',
    billOpenTime: Date

    // datetime DEFAULT NULL COMMENT '到期日期',
    billExpireTime: Date

    // bigint(20) DEFAULT NULL COMMENT '出票人id',
    drawerEntId: number

    // varchar(128) DEFAULT NULL COMMENT '出票人名称',
    drawerName: string

    // bigint(20) DEFAULT NULL COMMENT '收款人id',
    payeeEntId: number

    // varchar(128) DEFAULT NULL COMMENT '收款人名称',
    payeeName: string

    // varchar(32) DEFAULT NULL COMMENT '承兑人id',
    acceptorEntId: string

    // varchar(128) DEFAULT NULL COMMENT '承兑人名称',
    acceptorName: string

    // varchar(2) DEFAULT NULL COMMENT '业务状态 10:未发送 11:发送中 12:发送失败 13:确认失败 14:确认成功',
    businessStatus: string

    // varchar(2) DEFAULT NULL COMMENT '审批状态00:未提交 01:待复核 02:已通过 03:已驳回',
    approveStatus: string

    // varchar(128) DEFAULT NULL COMMENT '发送申请返回信息',
    returnInfo: string

    // datetime DEFAULT NULL COMMENT '申请日期',
    applyDate: Date

    // varchar(32) DEFAULT NULL COMMENT '乐观锁',
    revision: string

    // bigint(20) DEFAULT NULL COMMENT '创建人',
    createBy: number

    // datetime DEFAULT NULL COMMENT '创建时间',
    createTime: Date

    // bigint(20) DEFAULT NULL COMMENT '更新人',
    updateBy: number

    // datetime DEFAULT NULL COMMENT '更新时间',
    updateTime: Date

    // char(1) DEFAULT NULL COMMENT '删除标识 是：1，否：0',
    deleteFlag: string

    // varchar(128) DEFAULT NULL COMMENT '备注',
    remark: string

    // bigint(20) DEFAULT NULL COMMENT '审批人id',
    approvePeoId: number

    // varchar(128) DEFAULT NULL COMMENT '审批人姓名',
    approvePeoName: string

    // datetime DEFAULT NULL COMMENT '发送日期',
    sendDate: Date

    // varchar(30) DEFAULT NULL COMMENT '创建人',
    creator: string

    // varchar(30) DEFAULT NULL COMMENT '修改人',
    updater: string

}
