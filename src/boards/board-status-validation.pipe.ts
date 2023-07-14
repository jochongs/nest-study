import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { getRandomValues } from "crypto";
import { BoardsStatus } from "./boards.model";

export class BoardStatusValidationPipe implements PipeTransform {
    readonly StatusOptions = [
        BoardsStatus.PRIVATE,
        BoardsStatus.PUBLIC
    ]

    transform(value: string, metadata: ArgumentMetadata) {
        value = value.toUpperCase();

        if(!this.isStatusValid(value)){
            throw new BadRequestException();
        }

        return value;
    }

    private isStatusValid(status: any) {
        const index = this.StatusOptions.indexOf(status);   
        return index !== -1;
    }
}