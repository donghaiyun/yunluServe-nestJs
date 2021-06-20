import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_id_uindex", ["id"], { unique: true })
@Entity("order", { schema: "yunlu" })
export class Order {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "place_order_time",
    nullable: true,
    comment: "下单时间(毫秒)",
    length: 32,
  })
  placeOrderTime: string | null;

  @Column("varchar", {
    name: "total_price",
    nullable: true,
    comment: "总价",
    length: 32,
  })
  totalPrice: string | null;

  @Column("varchar", {
    name: "customer_name",
    nullable: true,
    comment: "客户姓名",
    length: 32,
  })
  customerName: string | null;

  @Column("int", { name: "phone", nullable: true, comment: "收货手机号" })
  phone: number | null;

  @Column("int", { name: "address", nullable: true, comment: "收货地址" })
  address: number | null;

  @Column("varchar", {
    name: "openid",
    nullable: true,
    comment: "小程序openid",
    length: 32,
  })
  openid: string | null;
}
