import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("date_switch_record", { schema: "dc_scm_payment" })
export class DateSwitchRecord {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "主键id" })
  id: string;

  @Column("date", { name: "create_time", comment: "日切当前时间" })
  createTime: string;
}
