import { Injectable } from '@angular/core';
import { Post, User } from '../../models';

let id: number = 1;

@Injectable()
export class PostService {
  public db: Post[] = [];
  constructor() {}

  insert(author: User, title: string, content: string) : void {
    const { db } = this;
    if (title.length < 4) {
      throw new Error('Length of title should be at least 4 characters');
    }
    if (content.length < 7) {
      throw new Error('Length of content should be at least 7 characters');
    }
    db.push({
      id,
      title,
      content,
      createdAt: new Date(),
      author
    });
    id++;
  }

  getById(postId: number) : Post | null {
    const { db } = this;
    return db.find((value) => {
      return value.id === postId;
    });
  }

  update(post: Post) : void {
    const { db } = this;
    const exists = db.some((value) => {
      return value.id === post.id;
    });
    if (!exists) {
      throw new Error('Post with that ID does not exist');
    }
    const postToReplace = db.find((value) => {
      return value.id === post.id;
    });
    const index = db.indexOf(postToReplace);
    db.splice(index, 1, post);
  }

  updateUser(user: User) : void {
    const { db } = this;
    db.forEach((value) => {
      if (value.author.email === user.email) {
        value.author = user;
      }
    });
  }

  delete(post: Post) : void {
    const { db } = this;
    const exists = db.some((value) => {
      return value.id === post.id;
    });
    if (!exists) {
      throw new Error('That post does not exist');
    }
    db.splice(db.indexOf(post), 1);
  }

  deleteByUser(user: User) : void {
    const { db } = this;
    db.forEach((value) => {
      if (value.author.email === user.email) {
        db.splice(db.indexOf(value), 1);
      }
    });
  }

  getDb() : Post[] {
    const { db } = this;
    return db;
  }
}
