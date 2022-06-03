import { Injectable } from '@nestjs/common';

export type User = {
      id: number;
      name: string;
      username: string;
      password: string;
}

@Injectable()
export class UsersService {
      //Mock data
      private readonly users: User[] = [
            {
                  id: 1,
                  name: "Jonas",
                  username: "sejereje",
                  password: "secure",
            },
            {
                  id: 2,
                  name: "John",
                  username: "jonhTheDoe",
                  password: "secureJohn",
            },
            {
                  id: 3,
                  name: "Bob",
                  username: "TheBuilder",
                  password: "secureBob",
            },
            {
                  id: 4,
                  name: "Oliver",
                  username: "olivenOliver",
                  password: "secureOliver",
            },
      ]

      async findOne(username: User["username"]): Promise<User | undefined> {
            return this.users.find(user => user.username === username);
      }
}
