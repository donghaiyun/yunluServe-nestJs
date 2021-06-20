import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {UserService} from "../admin/user/user.service";
import { encryptPassword } from '../utils/cryptogram';

@Injectable()
export class AuthService {
  constructor(
    @Inject('UserService') private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  // JWT验证 - Step 2: 校验用户信息
  async validateUser(body:{phone:string,password:string}): Promise<any> {
    const {phone,password}=body;
    const {user} = await this.usersService.find({phone:phone});
    if (user) {
      const hashedPassword = user.password;//加密后的密码
      const salt = user.salt;//密码盐
      // 通过密码盐，加密传参，再与数据库里的比较，判断是否相等
      const hashPassword = encryptPassword(password, salt);
      if (hashedPassword === hashPassword) {
        // 密码正确
        return {
          code: 1,
          user,
        };
      } else {
        // 密码错误
        return {
          code: 2,
          user: null,
        };
      }
    }else{
      //查询此人
      return {
        code: 3,
        user: null,
      };
    }
  }

  // JWT验证 - Step 3: 处理 jwt 签证
  async certificate(user: any) {
    const payload = {
      id: user.id,
      phone: user.phone,
      email:user.email,
      username: user.username,
    };
    try {
      const token = this.jwtService.sign(payload);
      return {
        code: 200,
        result:{
          username:payload.username,
        },
        token,
        msg: `登录成功`,
      };
    } catch (error) {
      return {
        code: 600,
        msg: `账号或密码错误`,
      };
    }
  }
  // 用户登录
  async login(loginParams){
    const authRes=await this.validateUser(loginParams);
    switch (authRes.code) {
      case 1:
        return this.certificate(authRes.user);
      case 2:
        return {
          code:400,
          msg:'账号或密码不正确'
        }
      default:
        return {
          code:401,
          msg:'当前用户未找到'
        }
    }
  }
}
