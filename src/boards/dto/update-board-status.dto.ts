import { IsIn, IsNotEmpty } from "class-validator";
import { BoardStatus } from "../board-status.enum";

export class UpdateBoardStatusDto {
    @IsNotEmpty()
    @IsIn([BoardStatus.PUBLIC, BoardStatus.PRIVATE])
    status: boolean;
}