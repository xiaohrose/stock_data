import { Test, TestingModule } from '@nestjs/testing';
import { ZqController } from './zq.controller';
import { ZqService } from './zq.service';

describe('ZqController', () => {
  let controller: ZqController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZqController],
      providers: [ZqService],
    }).compile();

    controller = module.get<ZqController>(ZqController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
