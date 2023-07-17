import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BoardStatus } from "./board-status.enum";

@Entity('board_tb') // 테이블 명 입력
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn()
    board_idx: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: BoardStatus
}
