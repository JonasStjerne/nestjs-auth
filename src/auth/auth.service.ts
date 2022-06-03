import { Injectable } from '@nestjs/common';
import { UsersService, User } from 'src/users/users.service';

@Injectable()
export class AuthService {
      constructor(private usersService: UsersService){}

      async validateUser(username: User["username"], password: User["password"]): Promise<any> {
            const user = await this.usersService.findOne(username);
            if (user && user.password === password) {
                  const { password, username, ...rest } = user;
                  return rest;
            }
            return null;
      }

}
