export class FileUploadDTO {
    fileType: string
    annexName: string
    fileName: string
    filePath: string
}


export class TraderDTO {
    // bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
    id: number
    // varchar(16) DEFAULT NULL COMMENT '业务主体名称',
    businessPart: string
    // varchar(9) DEFAULT NULL COMMENT '业务主体代码 CS02 金融机构CS03 企业',
    businessCode: string
    // varchar(128) DEFAULT NULL COMMENT '交易对手名称',
    tradeName: string
    // varchar(128) DEFAULT NULL COMMENT '机构参与者名称',
    agencyName:string
    // varchar(32) DEFAULT NULL COMMENT '机构参与者代码',
    agencyCode:string
    // varchar(32) DEFAULT NULL COMMENT '统一社会信用代码',
    societyCreditCode:string
    // varchar(128) DEFAULT NULL COMMENT '业务办理渠道名称',
    channelName:string
    // varchar(16) DEFAULT NULL COMMENT '业务办理渠道代码',
    channelCode:string
    // char(1) DEFAULT NULL COMMENT '是否供票平台企业  0否1是',
    IsTicketPlatform:string
    // varchar(4) DEFAULT NULL COMMENT '识别类型DT01 票据账户 DT02 银行账户',
    billType:string
    // varchar(64) DEFAULT NULL COMMENT '票据账号',
    billAccount:string
    // varchar(32) DEFAULT NULL COMMENT '银行账号',
    bankAccount:string
    // varchar(128) DEFAULT NULL COMMENT '银行账户名称',
    bankAccountName:string
    // varchar(9) DEFAULT NULL COMMENT '银行账户账号',
    bankCode
    // varchar(128) DEFAULT NULL COMMENT '银行账户开户行机构参与者名称',
    bankOpenName:string
    // varchar(9) DEFAULT NULL COMMENT '银行账户开户行机构参与者代码',
    bankOpenCode:string
    // varchar(32) DEFAULT NULL COMMENT '乐观锁',
    revision:string
    // bigint(20) DEFAULT NULL COMMENT '创建人',
    createBy:number
    // datetime DEFAULT NULL COMMENT '创建时间',
    createTime:Date
    // bigint(20) DEFAULT NULL COMMENT '更新人',
    updateBy
    // datetime DEFAULT NULL COMMENT '更新时间',
    updateTime:Date
    // char(1) DEFAULT NULL COMMENT '删除标识  是：1，否：0',
    deleteFlag:string
    // varchar(128) DEFAULT NULL COMMENT '备注',
    remark:string
    // bigint(20) DEFAULT NULL COMMENT '当前企业id',
    enterpriseId:string
    // varchar(30) DEFAULT NULL COMMENT '创建人',
    creator:string
    // varchar(30) DEFAULT NULL COMMENT '修改人',
    updater:string
}