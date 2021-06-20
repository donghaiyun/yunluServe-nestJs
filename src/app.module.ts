import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import mysql from "./config/db";
import { Connection } from 'typeorm';
import { AdminModule } from './admin/admin.module';
import { UploadFileModule } from './upload-file/upload-file.module';

@Module({
  imports: [mysql,AdminModule, UploadFileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
