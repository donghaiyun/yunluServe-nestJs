import { Column, Entity } from "typeorm";

@Entity("product_pic", { schema: "yunlu" })
export class ProductPic {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("int", { name: "product_id", nullable: true })
  productId: number | null;

  @Column("varchar", {
    name: "smPic",
    nullable: true,
    comment: "小图",
    length: 255,
  })
  smPic: string | null;

  @Column("varchar", {
    name: "lgPic",
    nullable: true,
    comment: "大图",
    length: 255,
  })
  lgPic: string | null;

  @Column("varchar", {
    name: "detailsOne",
    nullable: true,
    comment: "商品详情图1",
    length: 255,
  })
  detailsOne: string | null;

  @Column("varchar", {
    name: "detailsTwo",
    nullable: true,
    comment: "商品详情图2",
    length: 255,
  })
  detailsTwo: string | null;

  @Column("varchar", {
    name: "detailsThree",
    nullable: true,
    comment: "商品详情图3",
    length: 255,
  })
  detailsThree: string | null;
}
