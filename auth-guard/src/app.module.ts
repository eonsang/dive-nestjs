import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, AuthService, UsersService],
})
export class AppModule {}
