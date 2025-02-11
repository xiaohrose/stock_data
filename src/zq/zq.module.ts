import { Module } from '@nestjs/common';
import { ZqService } from './zq.service';
import { ZqController } from './zq.controller';

@Module({
  controllers: [ZqController],
  providers: [ZqService],
})
export class ZqModule {}
