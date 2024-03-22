import {PostModel} from "../../models/post.model";
import {createFeatureSelector, createSelector} from "@ngrx/store";

const getPostState = createFeatureSelector<PostModel>('post');

export const getPostsSelector = createSelector(getPostState,
  (state) =>{
    return state.list
  }
);

export const getPostSelector = createSelector(getPostState,
  (state) =>{
    return state.post
  }
);

export const getPostsByUserIdSelector = createSelector(getPostState,
  (state) =>{
    return state.list
  }
);


