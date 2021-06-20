import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/User.entity';
import { encryptPassword, makeSalt } from '../../utils/cryptogram'; //引用加密函数

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  /*查询用户信息*/
  async find(obj: object) {
    let res = await this.usersRepository.find(obj);
    return { code: 200, msg: 'ok', user: res[0] };
  }

  //用户注册
  async register(obj) {
    const { phone, password } = obj;
    if (!phone || !password) {
      return { code: 400, msg: '不能为空' };
    }
    const { user } = await this.find({ phone: phone });
    if (user) {
      return { code: 400, msg: '该手机号已存在' };
    }
    obj.createTime = new Date(); //添加创建时间

    const salt = makeSalt(); // 制作密码盐
    obj.password = encryptPassword(obj.password, salt); // 加密密码
    obj.salt = salt; //存入密码盐
    const insertRes = await this.usersRepository.save(obj);
    if (insertRes) return { code: 200, msg: 'register success,' };
  }

  /*更新用户信息*/
  async update(updateObj) {
    const result = await this.usersRepository.update(
      { id: updateObj.id },
      updateObj,
    );
    if (result.affected > 0) {
      return {
        code: 200,
        msg: 'update success!',
        result: { username: updateObj.username },
      };
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
