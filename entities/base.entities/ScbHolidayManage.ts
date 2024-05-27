import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("day_date_no_key", ["dayDate"], { unique: true })
@Entity("scb_holiday_manage", { schema: "scb_base" })
export class ScbHolidayManage {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键id" })
  id: string;

  @Column("datetime", { name: "create_time", comment: "创建时间" })
  createTime: Date;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    comment: "更新时间",
  })
  updateTime: Date | null;

  @Column("bigint", { name: "create_id", nullable: true, comment: "创建人id" })
  createId: string | null;

  @Column("bigint", { name: "update_id", nullable: true, comment: "修改人id" })
  updateId: string | null;

  @Column("tinyint", {
    name: "type_flag",
    nullable: true,
    comment: "日期类型：0-节假日，1-工作日",
    width: 1,
    default: () => "'1'",
  })
  typeFlag: boolean | null;

  @Column("date", { name: "day_date", unique: true, comment: "日期" })
  dayDate: string;

  @Column("varchar", {
    name: "day_date_title",
    comment: "日期描述",
    length: 100,
  })
  dayDateTitle: string;
}
