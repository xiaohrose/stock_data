import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZqModule } from './zq/zq.module';
import { CompaniesModule } from './companies/companies.module';
import { OilModule } from './oil/oil.module';
import { MixinsModule } from './mixins/mixins.module';
import { SqlModule } from './sql/sql.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Zq} from './companies/entities/company.entity'
import { TestModuleModule } from './test_module/test_module.module';
import { FffModule } from './fff/fff.module';

@Module({
  imports: [ZqModule, CompaniesModule, OilModule, MixinsModule, SqlModule, TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "123456",
      database: "stock",
      synchronize: true,
      logging: true,
      entities: [Zq],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
          authPlugin: 'sha256_password',
      }
    }), TestModuleModule, FffModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
