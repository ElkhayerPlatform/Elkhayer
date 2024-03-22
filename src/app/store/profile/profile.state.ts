import {Post, PostModel} from "../../models/post.model";
import {Profile, ProfileModel} from "../../models/profile.model";

export const ProfileState: ProfileModel = {
  list: [],
  profile: {} as Profile,
  errorMessage: ''
}
