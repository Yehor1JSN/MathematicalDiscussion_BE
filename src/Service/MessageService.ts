import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from "../dto/CreateMessageDto";
import { InjectRepository } from "@nestjs/typeorm";
import { Message } from "../entity/Message";
import { Repository } from "typeorm";

@Injectable()
export class MessageService {

  constructor(
      @InjectRepository(Message)
      private messageRepository: Repository<Message>,
  ) {
  }

  async createMessage(createMessageDto: CreateMessageDto) {

    if (createMessageDto.parent_message_id) {
        const parentMessage = await this.messageRepository.findOne(createMessageDto.parent_message_id);

        if (!parentMessage) {
          throw new NotFoundException('Parent message is not found');
        }
    }

    let message = this.messageRepository.create(createMessageDto);

    return await this.messageRepository.save(message);
  }

  async getMessages() {
    let messages = await this.messageRepository.find();
    let messagesWithIds = {};

    for (let message of messages) {
        messagesWithIds[message.id] = {
            ...message,
            children: [],
        };
    }

    for (let messageId in messagesWithIds) {
        let message = messagesWithIds[messageId];

        if (message.parent_message_id && messagesWithIds[message.parent_message_id]) {
            messagesWithIds[message.parent_message_id].children.push(message);
        }
    }

    return Object.values(messagesWithIds)
        .filter((message: Message) => !message.parent_message_id);
  }

}
