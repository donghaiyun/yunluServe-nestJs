import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("receiving_address", { schema: "yunlu" })
export class ReceivingAddress {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "wx_user_id", nullable: true })
  wxUserId: number | null;

  @Column("varchar", { name: "address", nullable: true, length: 255 })
  address: string | null;
}
