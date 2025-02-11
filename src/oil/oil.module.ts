import { Module } from '@nestjs/common';
import { OilService } from './oil.service';
import { OilController } from './oil.controller';

@Module({
  controllers: [OilController],
  providers: [OilService],
})
export class OilModule {}
