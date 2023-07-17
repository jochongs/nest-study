import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

//nest g module boards
//g : modudle을 생성한다
//board: moudle 이름

//nest g controller boards --no-spec
//g: controller를 생성한다
//boards: controller 이름
//--no-spec: 테스트 코드는 만들지 않는다.

//nest g service boards --no-spec
//g: service를 생성한다
//boards: service 이름
//--no-spec: 테스트 코드는 만들지 않는다.

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot(typeORMConfig()),
    BoardsModule,
    AuthModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
