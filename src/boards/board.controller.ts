import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';

@Controller('boards')
export class BoardsController {
    // //priave은 ts에서만 사용할 수 있는 접근 제한자
    constructor(private boardService: BoardService) {}

    // @Get('all')
    // getAllBoards(): Board[] {
    //     return this.boardsSerivce.getAllBoards();
    // }

    @Get('/all')
    getBoardAll() {
        return this.boardService.getBoardAll();
    }

    @Get('/:id')
    getBoardById(
        @Param('id') id: number
    ): Promise<Board> { 
        return this.boardService.getBoardById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(
        @Body() boardDto: CreateBoardDto
    ) {
        console.log(boardDto);
        return this.boardService.createBoard(boardDto);
    }

    // @Put('/:id/status')
    // updateBoard(
    //     @Body('status', BoardStatusValidationPipe) status: BoardsStatus,
    //     @Param('id') boardId: string
    // ) {
    //     this.boardsSerivce.updateBoardStatus(boardId, status);
    // }

    // @Delete('/:id')
    // deleteBoardById(
    //     @Param('id') id: string
    // ) {
    //     this.boardsSerivce.deleteBoardById(id);
    // }
}
