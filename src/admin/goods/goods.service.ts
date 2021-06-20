import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../entities/Product.entity';

@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(Product)
    private goodsRepository: Repository<Product>,
  ) {}

  /*条件查询商品信息*/
  async find(sid: number) {
    if (!sid) {
      return { code: 400, msg: 'sid is require！' };
    }
    const goodsList = await this.goodsRepository.find({
      relations: ['skus', 'pics'], //一/多 对 一/多关系
      where: {
        status: sid,
      },
    });
    return { code: 200, msg: 'ok', result: goodsList };
  }

  /*保存商品*/
  async save(obj) {
    obj.createTime = new Date();
    const insertRes = await this.goodsRepository.save(obj);
    if (insertRes) {
      return { code: 200, msg: 'add Goods success' };
    }
  }

  /*更新商品状态*/
  async update(paramsObj) {
    if (!paramsObj.id) {
      return { code: 400, msg: 'id is require' };
    }
    const { affected } = await this.goodsRepository.update(
      paramsObj.id,
      paramsObj,
    );
    if (affected > 0) {
      return { code: 200, msg: 'update success' };
    }
  }
}
