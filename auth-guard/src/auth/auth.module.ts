import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [AuthService],
})
export class AuthModule {}
