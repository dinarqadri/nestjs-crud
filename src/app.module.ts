import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { QuizesService } from './quizes/quizes.service';
import { QuizesController } from './quizes/quizes.controller';
import { DatabaseModule } from './core/database/database.module';


@Module({
  imports: [UsersModule, DatabaseModule],
  controllers: [AppController, QuizesController],
  providers: [AppService, QuizesService],
})
export class AppModule {}
