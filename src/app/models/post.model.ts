import {User} from "./user.model";
import {Category} from "./category.model";

export interface Post {
  id: number
  title: string
  content: string
  image: string
  createdAt: string
  updatedAt: string
  donation: number
  user: User
  category: Category
}

export interface PostModel {
  list: Post[]
  post: Post
  errorMessage: string
}
