import { Module } from '@nestjs/common';
import { MessageController } from './controller/MessageController';
import { MessageService } from './Service/MessageService';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

const dynamicConfigModule = ConfigModule.forRoot();

import typeOrmConfig from "./config/ormconfig";
import { Message } from "./entity/Message";

@Module({
    imports: [
        dynamicConfigModule,
        TypeOrmModule.forRoot(typeOrmConfig),
        TypeOrmModule.forFeature([Message]),
    ],

    controllers: [MessageController],
    providers: [MessageService],
})

export class AppModule {
}
