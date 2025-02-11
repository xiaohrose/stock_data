import { Test, TestingModule } from '@nestjs/testing';
import { ZqService } from './zq.service';

describe('ZqService', () => {
  let service: ZqService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZqService],
    }).compile();

    service = module.get<ZqService>(ZqService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
