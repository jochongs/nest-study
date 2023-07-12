import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';

@Controller('boards')
export class BoardsController {
    //priave은 ts에서만 사용할 수 있는 접근 제한자
    constructor(private boardsSerivce: BoardsService) {}

    @Get('all')
    getAllBoards(): Board[] {
        return this.boardsSerivce.getAllBoards();
    }

    @Post()
    createBoard(
        @Body('title') title: string,
        @Body('description') description: string
    ) {
        this.boardsSerivce.createBoard(title, description);
    }
}
