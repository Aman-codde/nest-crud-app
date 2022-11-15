import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: any = [
    { id: 0, name: 'Aman' },
    { id: 1, name: 'Paul' },
  ];
  findAll() {
    return this.users;
  }

  findById(userId: number) {
    return this.users.find((user) => user.id === userId);
  }
}
