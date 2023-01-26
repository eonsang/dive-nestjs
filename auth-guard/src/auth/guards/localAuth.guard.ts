import { CanActivate, ExecutionContext, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

export class LocalAuthGuard implements CanActivate {
  constructor(@Inject(UsersService) private usersService: UsersService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const { serviceId, password } = request.body;
    const user = await this.usersService.findUser(serviceId, password);

    if (user) {
      request.user = user;
      return true;
    }

    return false;
  }
}
