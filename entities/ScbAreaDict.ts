import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("name", ["areaName"], {})
@Index("depth", ["depth"], {})
@Index("topid", ["topId"], {})
@Index("code", ["code"], {})
@Index("weathercode", ["weatherCode"], {})
@Index("licenseplate", ["licenseplate"], {})
@Index("parentid", ["parentId"], {})
@Entity("scb_area_dict", { schema: "scb_base" })
export class ScbAreaDict {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("varchar", { name: "area_name", comment: "区域名称", length: 20 })
  areaName: string;

  @Column("bigint", { name: "parent_id", comment: "父级ID", unsigned: true })
  parentId: string;

  @Column("varchar", {
    name: "parent_name",
    nullable: true,
    comment: "父级名称",
    length: 20,
  })
  parentName: string | null;

  @Column("bigint", { name: "top_id", nullable: true, comment: "顶级区域ID" })
  topId: string | null;

  @Column("varchar", {
    name: "top_name",
    nullable: true,
    comment: "顶级区域名称",
    length: 20,
  })
  topName: string | null;

  @Column("varchar", {
    name: "district_code",
    nullable: true,
    comment: "行政区域代码",
    length: 8,
  })
  districtCode: string | null;

  @Column("varchar", {
    name: "id_card_code",
    nullable: true,
    comment: "身份证代码",
    length: 8,
  })
  idCardCode: string | null;

  @Column("varchar", {
    name: "zip_code",
    nullable: true,
    comment: "邮编",
    length: 8,
  })
  zipCode: string | null;

  @Column("varchar", {
    name: "area_code",
    nullable: true,
    comment: "区号",
    length: 8,
  })
  areaCode: string | null;

  @Column("varchar", {
    name: "licenseplate",
    nullable: true,
    comment: "车牌号代码",
    length: 50,
  })
  licenseplate: string | null;

  @Column("varchar", {
    name: "code",
    nullable: true,
    comment: "缩写",
    length: 50,
  })
  code: string | null;

  @Column("varchar", {
    name: "short_code",
    nullable: true,
    comment: "简写",
    length: 30,
  })
  shortCode: string | null;

  @Column("varchar", {
    name: "weather_code",
    nullable: true,
    comment: "气温代码",
    length: 20,
  })
  weatherCode: string | null;

  @Column("decimal", {
    name: "lat",
    nullable: true,
    comment: "经度",
    precision: 15,
    scale: 10,
  })
  lat: string | null;

  @Column("decimal", {
    name: "lng",
    nullable: true,
    comment: "纬度",
    precision: 15,
    scale: 10,
  })
  lng: string | null;

  @Column("tinyint", { name: "depth", comment: "深度级别", unsigned: true })
  depth: number;
}
