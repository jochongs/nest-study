import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(Board)
        private boardRepository: Repository<Board>
    ) {}

    // 게시글 데이터 전부 가져오기
    async getBoardAll(): Promise<Board[]> {
        return await this.boardRepository.find();;
    }
    
    // 특정 게시글 데이터 가져오기
    async getBoardById(id: number): Promise<Board> {
        const result = await this.boardRepository.findOne({
            where: {
                board_idx: id
            }
        });

        if(!result){
            throw new NotFoundException(`게시글을 찾을 수 없습니다.`);
        }

        return result;
    }

    // 게시글 생성하기
    async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
        const { title, description } = createBoardDto;

        const board = this.boardRepository.create({
            title,
            description,
            status: BoardStatus.PUBLIC
        });

        return this.boardRepository.save(board)
    }
}