import { Test, TestingModule } from '@nestjs/testing';
import { MixinsService } from './mixins.service';

describe('MixinsService', () => {
  let service: MixinsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MixinsService],
    }).compile();

    service = module.get<MixinsService>(MixinsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
