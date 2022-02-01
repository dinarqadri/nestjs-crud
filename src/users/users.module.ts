import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Logger } from '../core/middlewears/logger.middlewear';
import { usersProviders } from './users.providers';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders]
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Logger)
    .forRoutes('users')
    // throw new Error('Method not implemented.');
  }
}
