import { User } from './User';

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  author: User
}
