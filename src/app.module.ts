import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';

//nest g module boards
//g : modudle을 생성한다
//board: moudle 이름

//nest g controller boards --no-spec
//g: controller를 생성한다
//boards: controller 이름
//--no-spec: 테스트하는 코드는 만들지 않는다.

//nest g service boards --no-spec
//g: service를 생성한다
//boards: service 이름
//--no-spec: 테스트하는 코드는 만들지 않는다.

@Module({
  imports: [BoardsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
