import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Sku } from './Sku.entity';
import { Pic } from './Pic.entity';

@Entity('product', { schema: 'yunlu' })
export class Product {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'category_id', comment: '所属商品分类编号' })
  categoryId: number;

  @Column('varchar', {
    name: 'name',
    nullable: true,
    comment: '商品名称',
    length: 255,
  })
  name: string | null;

  @Column('varchar', {
    name: 'title',
    nullable: true,
    comment: '主标题',
    length: 255,
  })
  title: string | null;

  @Column('varchar', {
    name: 'details',
    nullable: true,
    comment: '商品详细说明',
    length: 255,
  })
  details: string | null;

  @Column('varchar', {
    name: 'area',
    nullable: true,
    comment: '生产地区',
    length: 255,
    default: () => "'0'",
  })
  area: string | null;

  @Column('varchar', {
    name: 'isActual',
    nullable: true,
    comment: '是否现货',
    length: 255,
  })
  isActual: string | null;

  @Column('varchar', {
    name: 'service',
    nullable: true,
    comment: '服务',
    length: 255,
  })
  service: string | null;

  @Column('datetime', { name: 'createTime', nullable: true })
  createTime: Date | null;

  @Column('tinyint', {
    name: 'status',
    nullable: true,
    comment: '商品状态：0-售罄 1-在仓库 2-上架中',
    default: () => "'1'",
  })
  status: number | null;

  @OneToMany(() => Sku, (sku) => sku.product, {
    cascade: true,
  })
  skus: [];

  @OneToMany(() => Pic, (pic) => pic.product, {
    cascade: true,
  })
  pics: [];
}
