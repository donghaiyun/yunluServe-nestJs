import {
  Controller,
  UseGuards,
  Get,
  Req,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /*注册接口*/
  @Post('register')
  register(@Body() saveBody) {
    return this.userService.register(saveBody);
  }

  /*获取用户信息*/
  @UseGuards(AuthGuard('jwt'))
  @Get('getUserinfo')
  getUserinfo(@Req() req) {
    const { id } = req.user;
    return this.userService.find({ id: id });
  }

  /*更新用户信息*/
  @UseGuards(AuthGuard('jwt'))
  @Post('updateUserinfo')
  updateUserinfo(@Body() updateParam, @Req() req) {
    const { id } = req.user;
    updateParam.id = id;
    return this.userService.update(updateParam);
  }
}
