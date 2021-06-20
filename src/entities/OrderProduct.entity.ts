import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("order_product", { schema: "yunlu" })
export class OrderProduct {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "order_id", nullable: true, comment: "订单id" })
  orderId: number | null;

  @Column("int", { name: "product_id", nullable: true, comment: "商品id" })
  productId: number | null;

  @Column("varchar", {
    name: "product_name",
    nullable: true,
    comment: "商品名称",
    length: 255,
  })
  productName: string | null;

  @Column("int", { name: "count", nullable: true, comment: "数量" })
  count: number | null;

  @Column("varchar", {
    name: "price",
    nullable: true,
    comment: "价格",
    length: 32,
  })
  price: string | null;

  @Column("varchar", {
    name: "spec",
    nullable: true,
    comment: "规格",
    length: 32,
  })
  spec: string | null;
}
