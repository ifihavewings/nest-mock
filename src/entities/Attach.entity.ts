import { Column, Entity, PrimaryGeneratedColumn, Generated} from "typeorm";
@Entity('scb_file_manage')
export class Attach {
    @PrimaryGeneratedColumn()
    id: number
    @Column({
        name: 'batch_number'
    })
    batchNumber: string
    @Column({
        name: 'annex_name'
    })
    annexName: string

    @Column({
        name: 'file_name'
    })
    // 附件类型 FT01 营业执照 FT02 法定代表人 FT03 财务报表 FT04 授权经办人 FT05 贴现申请人授权委托书 FT06 征信信息 FT07 其他 FT08 企业承诺函 FT09 冻结 FT10 冻结解除 FT11 贴现协议 FT12 征信授权书	
    fileName: string
    @Column({
        name: 'file_type'
    })
    fileType: string
    @Column({
        name: 'file_status'
    })
    fileStatus: string
    // 锁定标识0锁定1未锁定	
    @Column({
        name: 'file_sign'
    })
    fileSign: string

    // 乐观锁	
    @Column()
    revision: string
    @Column({
        name: 'create_by'
    })
    createBy: string
    @Column({
        name: 'create_time'
    })
    createTime: Date
    @Column({
        name: 'update_by'
    })
    updateBy: string
    @Column({
        name: 'update_time'
    })
    updateTime: Date
    // 删除标识 是：1，否：0
    @Column({
        name: 'delete_flag'
    })
    deleteFlag: string
    @Column({
        name: 'file_path'
    })
    filePath: string
    @Column()
    remark: string
    @Column()
    creator: string
    @Column()
    updater: string
}
