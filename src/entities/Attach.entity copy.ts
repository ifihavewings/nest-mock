import { Column, Entity, PrimaryGeneratedColumn, Generated } from "typeorm";

enum demo {
    one = 1,
    two = 2,
    three = 3
}

@Entity()
export class User {
    // 自增
    @PrimaryGeneratedColumn()
    id: Number
    @Column()
    name: string
    @Column()
    // 创建具有生成值的列
    @Generated("uuid")
    uuid: string
    // 将json转字符串存入数据库
    @Column("simple-json")
    json: { one: string; tow: string }
    // 它可以将原始数组值存储在单个字符串列中，所有值都以逗号分隔
    @Column("simple-array")
    array: string[]
    // 枚举类型
    @Column({ type: 'enum', enum: demo, default: demo.one })
    enum: number
    // 列选项部分介绍
    @Column({
        type: "varchar",
        name: "ipaaa", //数据库表中的列名
        nullable: true, //在数据库中使列NULL或NOT NULL。 默认情况下，列是nullable：false
        comment: "注释",
        select: true,  //定义在进行查询时是否默认隐藏此列。 设置为false时，列数据不会显示标准查询。 默认情况下，列是select：true
        default: "xxxx", //加数据库级列的DEFAULT值
        primary: false, //将列标记为主要列。 使用方式和@ PrimaryColumn相同。
        update: true, //指示"save"操作是否更新列值。如果为false，则只能在第一次插入对象时编写该值。 默认值为"true"
        collation: "", //定义列排序规则。
    })
    ip: string
}
