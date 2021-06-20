import { Body, Controller, Post } from "@nestjs/common";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {
  }
  /*用户登录*/
  @Post('login')
  login(@Body() loginParams ) {
    return this.AuthService.login(loginParams);
  }
}
