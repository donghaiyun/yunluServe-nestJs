import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { GoodsService } from './goods.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  /*根据商品状态查询获取对应列表*/
  @Get('getGoodsList')
  getGoodsList(@Query() params) {
    const { sid } = params;
    return this.goodsService.find(sid);
  }

  /*添加商品路由*/
  @Post('addGoods')
  addGoods(@Body() params) {
    return this.goodsService.save(params);
  }

  /*更新商品状态路由*/
  @Post('updateStatus')
  updateStatus(@Body() params) {
    return this.goodsService.update(params);
  }
}
