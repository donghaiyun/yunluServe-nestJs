import { Module } from '@nestjs/common';
import { UserModule } from "./user/user.module";
import { AuthModule } from "../auth/auth.module";
import { GoodsModule } from './goods/goods.module';

@Module({
  imports:[UserModule,AuthModule, GoodsModule],
  controllers: []
})
export class AdminModule {}
