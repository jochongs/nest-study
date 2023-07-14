import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardsStatus } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { isNotEmpty } from 'class-validator';
import { BoardStatusValidationPipe } from './board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
    //priave은 ts에서만 사용할 수 있는 접근 제한자
    constructor(private boardsSerivce: BoardsService) {}

    @Get('all')
    getAllBoards(): Board[] {
        return this.boardsSerivce.getAllBoards();
    }

    @Get('/:id')
    getBoardById(
        @Param('id') boardId: string
    ): Board {
        console.log(boardId);
        return this.boardsSerivce.getBoardById(boardId);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(
        @Body() CreateBoardDto: CreateBoardDto
    ) {
        this.boardsSerivce.createBoard(CreateBoardDto);
    }

    @Put('/:id/status')
    updateBoard(
        @Body('status', BoardStatusValidationPipe) status: BoardsStatus,
        @Param('id') boardId: string
    ) {
        this.boardsSerivce.updateBoardStatus(boardId, status);
    }

    @Delete('/:id')
    deleteBoardById(
        @Param('id') id: string
    ) {
        this.boardsSerivce.deleteBoardById(id);
    }
}
