import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("wx_user_openid_uindex", ["openid"], { unique: true })
@Index("wx_user_id_uindex", ["id"], { unique: true })
@Entity("wx_user", { schema: "yunlu" })
export class WxUser {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "openid",
    unique: true,
    comment: "微信用户openid",
    length: 255,
  })
  openid: string;

  @Column("varchar", {
    name: "username",
    nullable: true,
    comment: "用户名",
    length: 255,
    default: () => "'微信用户'",
  })
  username: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 255 })
  password: string | null;

  @Column("varchar", {
    name: "iphone",
    nullable: true,
    comment: "手机号",
    length: 64,
  })
  iphone: string | null;

  @Column("varchar", {
    name: "avatarUrl",
    nullable: true,
    comment: "头像地址",
    length: 255,
    default: () => "'default_avatar.png'",
  })
  avatarUrl: string | null;

  @Column("varchar", {
    name: "address",
    nullable: true,
    comment: "收货地址",
    length: 255,
  })
  address: string | null;

  @Column("int", {
    name: "gender",
    nullable: true,
    comment: "性别",
    default: () => "'1'",
  })
  gender: number | null;
}
