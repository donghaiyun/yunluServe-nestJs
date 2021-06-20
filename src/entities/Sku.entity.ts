import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.entity";

@Entity("sku", { schema: "yunlu" })
export class Sku {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  // @Column("int", {
  //   name: "product_id",
  //   nullable: true,
  //   comment: "外键=>商品id",
  // })
  // productId: number | null;

  @Column("varchar", { name: "spec", nullable: true, length: 255 })
  spec: string | null;

  @Column("decimal", {
    name: "price",
    nullable: true,
    comment: "价格",
    precision: 10,
    scale: 2,
  })
  price: string | null;

  @Column("double", {
    name: "weight",
    nullable: true,
    comment: "重量",
    precision: 22,
  })
  weight: number | null;

  @Column("int", { name: "stock", nullable: true, comment: "库存" })
  stock: number | null;

  @Column("varchar", {
    name: "totalsale",
    nullable: true,
    comment: "已售数量",
    length: 255,
    default: () => "'0'",
  })
  totalsale: string | null;

  @ManyToOne(
    ()=>Product,
    product=>product.id
  )
  product:Product
}
