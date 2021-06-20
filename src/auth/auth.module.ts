import { Module } from '@nestjs/common';
import {AuthService} from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { JwtStrategy } from "./jwt.strategy";
import {UserModule} from "../admin/user/user.module";
import { AuthController } from './auth.controller';

@Module({
  imports:[
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({
      secret:jwtConstants.secret,
      signOptions:{expiresIn:'8h'},
    }),
    UserModule
  ],
  providers: [AuthService,JwtStrategy],
  exports:[AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
