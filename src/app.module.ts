import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlertsModule } from './alerts/alerts.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AlertsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
