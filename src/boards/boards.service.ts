import { Injectable } from '@nestjs/common';
import { Board, BoardsStatus } from './boards.model';
import { v1 as uuid } from 'uuid';

@Injectable() //nestjs프로젝트 어디에서도 사용할 수 있게 해주는 데코레이터
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards() {
        return this.boards;
    }

    createBoard(title: string, description: string) {
        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardsStatus.PUBLIC
        }

        this.boards.push(board);
    }
}
