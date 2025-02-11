import { Module } from '@nestjs/common';
import { MixinsService } from './mixins.service';
import { MixinsController } from './mixins.controller';

@Module({
  controllers: [MixinsController],
  providers: [MixinsService],
})
export class MixinsModule {}
