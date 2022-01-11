import { Test, TestingModule } from '@nestjs/testing';
import { MessageController } from './controller/app.controller';
import { MessageService } from './Service/app.service';

describe('AppController', () => {
  let appController: MessageController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MessageController],
      providers: [MessageService],
    }).compile();

    appController = app.get<MessageController>(MessageController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
