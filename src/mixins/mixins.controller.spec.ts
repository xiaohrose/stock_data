import { Test, TestingModule } from '@nestjs/testing';
import { MixinsController } from './mixins.controller';
import { MixinsService } from './mixins.service';

describe('MixinsController', () => {
  let controller: MixinsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MixinsController],
      providers: [MixinsService],
    }).compile();

    controller = module.get<MixinsController>(MixinsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
