import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user', { schema: 'yunlu' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'username', comment: '姓名', length: 255 })
  username: string;

  @Column('varchar', {
    name: 'phone',
    nullable: true,
    comment: '手机号',
    length: 255,
  })
  phone: string | null;

  @Column('varchar', {
    name: 'password',
    nullable: true,
    comment: '加密后的密码',
    length: 255,
  })
  password: string | null;

  @Column('varchar', {
    name: 'salt',
    nullable: false,
    comment: '密码盐',
    length: 255,
  })
  salt: string;

  @Column('varchar', {
    name: 'email',
    nullable: true,
    comment: '邮箱',
    length: 255,
  })
  email: string | null;

  @Column('varchar', {
    name: 'avatar',
    nullable: true,
    comment: '头像',
    length: 255,
  })
  avatar: string | null;

  @Column('tinyint', {
    name: 'gender',
    nullable: true,
    comment: '性别',
    default: () => "'0'",
  })
  gender: number | null;

  @Column('datetime', {
    name: 'create_time',
    nullable: true,
    comment: '创建时间',
  })
  createTime: Date | null;
}
