import {createReducer, on} from "@ngrx/store";
import {
  addPostFailure,
  addPostSuccess,
  getPostSuccess,
  loadPostsFailure,
  loadPostsSuccess, getPostsByUserIdSuccess
} from "./post.actions";
import {PostState} from "./post.state";


export const _PostReducer = createReducer(PostState,
  on(loadPostsSuccess, (state, action) => {
    return {
      ...state,
      list: action.list,
      errorMessage: ''
    }
  }),
  on(loadPostsFailure, (state, action) => {
    return {
      ...state,
      list: [],
      errorMessage: action.errorMessage
    }
  }),
  on(getPostsByUserIdSuccess, (state, action) => {
    return {
      ...state,
      list: action.list,
      errorMessage: ''
    }
  }),
  on(loadPostsFailure, (state, action) => {
    return {
      ...state,
      list: [],
      errorMessage: action.errorMessage
    }
  }),
  on(getPostSuccess, (state, action) => {
    return {
      ...state,
      post: action.post,
      errorMessage: ''
    }
  }),
  // on(addPostSuccess, (state, action) => {
  //   return {
  //     ...state,
  //     list: [...action.post],
  //     errorMessage: ''
  //   }
  // }),
  // on(addPostFailure, (state, action) => {
  //   return {
  //     ...state,
  //     errorMessage: action.errorMessage
  //   }
  // }),
)

export function PostReducer(state: any, action: any) {
  return _PostReducer(state, action);
}
