import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateMessageDto {

    @IsNotEmpty()
    sender_name: string;

    @IsNotEmpty()
    post: string;

    @IsOptional()
    @IsNumber()
    parent_message_id: number;
}
