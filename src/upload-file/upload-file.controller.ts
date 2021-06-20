import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadFileService } from './upload-file.service';

@UseGuards(AuthGuard('jwt'))
@Controller('upload')
export class UploadFileController {
  constructor(private readonly uploadService: UploadFileService) {}

  @Post('uploadImage')
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() file) {
    return this.uploadService.uploadImage(file);
  }
}
