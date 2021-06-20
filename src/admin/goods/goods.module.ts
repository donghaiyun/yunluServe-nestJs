import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "../../entities/Product.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Product])],
  controllers: [GoodsController],
  providers: [GoodsService]
})
export class GoodsModule {}
