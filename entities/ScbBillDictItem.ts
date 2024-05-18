import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("scb_bill_dict_item", { schema: "scb_base" })
export class ScbBillDictItem {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键" })
  id: string;

  @Column("bigint", {
    name: "dict_id",
    nullable: true,
    comment: "字典id 外键指向scb_bill_dict.id",
  })
  dictId: string | null;

  @Column("varchar", {
    name: "item_value",
    nullable: true,
    comment: "字典项值",
    length: 50,
  })
  itemValue: string | null;

  @Column("varchar", {
    name: "item_name",
    nullable: true,
    comment: "字典项名称",
    length: 64,
  })
  itemName: string | null;

  @Column("int", {
    name: "item_order",
    nullable: true,
    comment: "字典项排序 从1开始递增",
  })
  itemOrder: number | null;

  @Column("varchar", {
    name: "revision",
    nullable: true,
    comment: "乐观锁",
    length: 32,
  })
  revision: string | null;

  @Column("bigint", { name: "create_by", nullable: true, comment: "创建人" })
  createBy: string | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
  })
  createTime: Date | null;

  @Column("bigint", { name: "update_by", nullable: true, comment: "更新人" })
  updateBy: string | null;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    comment: "更新时间",
  })
  updateTime: Date | null;

  @Column("char", {
    name: "delete_flag",
    nullable: true,
    comment: "删除标识 是：1，否：0",
    length: 1,
  })
  deleteFlag: string | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 128,
  })
  remark: string | null;

  @Column("varchar", {
    name: "creator",
    nullable: true,
    comment: "创建人",
    length: 30,
  })
  creator: string | null;

  @Column("varchar", {
    name: "updater",
    nullable: true,
    comment: "修改人",
    length: 30,
  })
  updater: string | null;
}
