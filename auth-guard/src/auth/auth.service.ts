import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

const securecode = 'secure';

@Injectable()
export class AuthService {
  async login(user) {
    const accessToken = jwt.sign({ serviceId: user.serviceId }, securecode, {
      expiresIn: '1h',
    });

    return {
      user,
      accessToken,
    };
  }
}
