import { Module } from '@nestjs/common';
import { BoardsController } from './board.controller';
import { BoardService } from './board.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Board])],
    controllers: [BoardsController],
    providers: [BoardService]
})
export class BoardsModule {}
