import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "src/users/users.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
      constructor(private authService: AuthService){
            super();
      }

      async validate(username: User["username"], password: User["password"]): Promise<any> {
            const user = await this.authService.validateUser(username, password );

            if (!user) {
                  throw new UnauthorizedException();
            }

            return user;
      }
}