import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZqModule } from './zq/zq.module';
import { CompaniesModule } from './companies/companies.module';
import { OilModule } from './oil/oil.module';
import { MixinsModule } from './mixins/mixins.module';

@Module({
  imports: [ZqModule, CompaniesModule, OilModule, MixinsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
