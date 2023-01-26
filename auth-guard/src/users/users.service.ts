import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class UsersService {
  users = [
    {
      serviceId: 'leeeonsang',
      password: '1111',
    },
  ];

  findUser(serviceId: string, password: string) {
    const user = this.users.find((user) => user.serviceId === serviceId);
    if (!user) throw new NotFoundException('유저를 찾을 수 없습니다.');

    if (user.password !== password) {
      throw new ConflictException('비밀번호가 일치하지 않습니다.');
    }

    return user;
  }
}
