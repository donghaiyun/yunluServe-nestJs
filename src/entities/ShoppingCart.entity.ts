import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shopping_cart", { schema: "yunlu" })
export class ShoppingCart {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id", nullable: true, comment: "外键=>用户id" })
  userId: number | null;

  @Column("int", {
    name: "product_id",
    nullable: true,
    comment: "外键=>商品id",
  })
  productId: number | null;

  @Column("int", { name: "count", nullable: true, comment: "数量" })
  count: number | null;

  @Column("decimal", {
    name: "price",
    nullable: true,
    comment: "一份商品的价格",
    precision: 10,
    scale: 2,
  })
  price: string | null;

  @Column("varchar", { name: "spec", nullable: true, length: 32 })
  spec: string | null;

  @Column("varchar", {
    name: "openid",
    nullable: true,
    comment: "用户openid（加密后的）",
    length: 32,
  })
  openid: string | null;
}
