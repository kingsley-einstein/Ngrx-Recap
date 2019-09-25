import { Injectable } from '@angular/core';
import { User } from '../../models';
import { PostService } from '../post';

@Injectable()
export class UserService {
  public db: User[] = [];
  constructor(private postService: PostService) {}

  insert(user: User) : void {
    const { db } = this;
    const exists = db.some((value) => {
      return value.email === user.email;
    });
    if (exists) {
      throw new Error('User with email already exists');
    }
    db.push(user);
  }

  delete(user: User) : void {
    const { db } = this;
    const exists = db.some((value) => {
      return value.email === user.email;
    });
    if (!exists) {
      throw new Error("User with that email doesn't exist");
    }
    db.splice(db.indexOf(user), 1);
  }

  getByEmail(email: string) : User | null {
    const { db } = this;
    return db.find((value) => {
      return value.email === email;
    });
  }

  updateUser(user: User, cascade: boolean = true) : void {
    const { db, postService } = this;
    const exists = db.some((value) => {
      return value.email === user.email;
    });
    if (!exists) {
      throw new Error("User with that email doesn't exist");
    }
    const userToReplace = db.find((value) => {
      return value.email === user.email;
    });
    const index = db.indexOf(userToReplace);
    db.splice(index, 1, user);
    if (cascade) {
      postService.updateUser(user);
    }
  }

  getDb() : User[] {
    const { db } = this;
    return db;
  }
}
