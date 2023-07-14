import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardsStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable() //nestjs프로젝트 어디에서도 사용할 수 있게 해주는 데코레이터
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards() {
        return this.boards;
    }

    createBoard(CreateBoardDto: CreateBoardDto) {
        const { title, description } = CreateBoardDto;

        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardsStatus.PUBLIC
        }

        this.boards.push(board);
    }

    getBoardById(id: string): Board {
        const found = this.boards.find((board) => board.id === id);

        if(!found){
            throw new NotFoundException('게시글을 찾을 수 없습니다.');
        }else{
            return found;
        }
    }

    updateBoardStatus(id: string, status: BoardsStatus): void {
        const board = this.getBoardById(id);

        board.status = status;
    }

    deleteBoardById(id: string): void {
        const found = this.getBoardById(id);

        this.boards = this.boards.filter((board) => board.id !== found.id);
    }
}
