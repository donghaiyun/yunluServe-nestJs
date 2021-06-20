import { Injectable } from '@nestjs/common';
import { writeFileSync } from 'fs';

@Injectable()
export class UploadFileService {
  //上传文件
  uploadImage(file) {
    if (file.mimetype.split('/')[0] !== 'image') {
      console.log(file.mimetype.split('/'));
      return { code: 400, msg: 'file is not image!' };
    }

    const saveName = `${new Date().getTime()}_${file.originalname}`;
    const writeName = `${__dirname}/../../static/image/${saveName}`;
    try {
      writeFileSync(writeName, file.buffer);
      return {
        code: 200,
        msg: 'upload success',
        result: { oldName: file.originalname, saveName: saveName },
      };
    } catch (e) {
      return { code: 500, msg: 'writeFile err', err: e };
    }
  }
}
