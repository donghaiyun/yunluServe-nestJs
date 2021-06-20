import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("category", { schema: "yunlu" })
export class Category {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "cname", nullable: true, length: 255 })
  cname: string | null;
}
