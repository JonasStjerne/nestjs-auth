import { Injectable } from '@nestjs/common';
import {  JwtService } from "@nestjs/jwt";
import { UsersService, User } from 'src/users/users.service';

@Injectable()
export class AuthService {
      constructor(private usersService: UsersService, private jwtService: JwtService){}

      async validateUser(username: User["username"], password: User["password"]): Promise<any> {
            const user = await this.usersService.findOne(username);
            if (user && user.password === password) {
                  const { password, username, ...rest } = user;
                  return rest;
            }
            return null;
      }

      async login(user: User) {
            const payload = {username: user.username, sub: user.id}

            return {
                  access_token: this.jwtService.sign(payload)
            }
      }

}
