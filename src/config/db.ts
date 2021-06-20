import {TypeOrmModule} from "@nestjs/typeorm";
export default TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'dhy4017981',
  database: 'yunlu', // 库名
  entities: [__dirname+'/../entities/*.entity{.ts,.js}'],
  synchronize: true
})
