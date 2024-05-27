import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fnc_ctr", { schema: "dc_scm_payment" })
export class FncCtr {
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

  @Column("bigint", { name: "create_id", comment: "创建人id" })
  createId: string;

  @Column("bigint", { name: "update_id", nullable: true, comment: "修改人id" })
  updateId: string | null;

  @Column("tinyint", {
    name: "del_flag",
    comment: "删除标识：0-正常，1-删除",
    width: 1,
    default: () => "'0'",
  })
  delFlag: boolean;

  @Column("varchar", {
    name: "fnc_bus_no",
    nullable: true,
    comment: "融资业务编号",
    length: 40,
  })
  fncBusNo: string | null;

  @Column("bigint", { name: "ctr_id", comment: "合同表id" })
  ctrId: string;
}
