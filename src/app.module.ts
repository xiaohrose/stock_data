import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZqModule } from './zq/zq.module';
import { ZqModule } from './zq/zq.module';

@Module({
  imports: [ZqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
