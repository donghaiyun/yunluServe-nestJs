import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './Product.entity';

@Entity('pic', { schema: 'yunlu' })
export class Pic {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'type', nullable: true, length: 255 })
  type: string | null;

  @Column('varchar', { name: 'save_name', nullable: true, length: 255 })
  saveName: string | null;

  @ManyToOne(() => Product, (product) => product.id)
  product: Product;
}
