import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZqModule } from './zq/zq.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [ZqModule, CompaniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
