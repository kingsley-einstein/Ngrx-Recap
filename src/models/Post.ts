import { User } from './User';

export interface Post {
  title: string;
  content: string;
  createdAt: Date;
  author: User
}
