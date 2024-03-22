import {User} from "./user.model";

export interface Profile {
  id: number
  name: string
  email: string
  phone: string
  address: string
  image: string
  createdAt: string
  updatedAt: string
  user: User
}

export interface ProfileModel {
  list: Profile[]
  profile: Profile
  errorMessage: string
}
