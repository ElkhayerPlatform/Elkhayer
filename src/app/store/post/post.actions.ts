import {createAction, props} from "@ngrx/store";
import {Post} from "../../models/post.model";

export const LOAD_POSTS = '[Post] Load Posts';
export const LOAD_POSTS_SUCCESS = '[Post] Load Posts Success';
export const LOAD_POSTS_FAILURE = '[Post] Load Posts Failure';

export const GET_POSTS_BY_USER_ID = '[Post] Get Posts By User Id';
export const GET_POSTS_BY_USER_ID_SUCCESS = '[Post] Get Posts By User Id Success';

export const ADD_POST = '[Post] Add Post';
export const ADD_POST_SUCCESS = '[Post] Add Post Success';
export const ADD_POST_FAILURE = '[Post] Add Post Failure';

export const GET_POST = '[Post] Get Post';
export const GET_POST_SUCCESS = '[Post] Get Post Success';

export const loadPosts = createAction(LOAD_POSTS);
export const loadPostsSuccess = createAction(LOAD_POSTS_SUCCESS,props<{list: Post[]}>());
export const loadPostsFailure = createAction(LOAD_POSTS_FAILURE,props<{errorMessage: string}>());

export const getPostsByUserId = createAction(GET_POSTS_BY_USER_ID,props<{id: number}>());
export const getPostsByUserIdSuccess = createAction(GET_POSTS_BY_USER_ID_SUCCESS,props<{list: Post[]}>());

export const getPost = createAction(GET_POST,props<{id: number}>());
export const getPostSuccess = createAction(GET_POST_SUCCESS,props<{post: Post}>());

export const addPost = createAction(ADD_POST,props<{post: Post}>());
export const addPostSuccess = createAction(ADD_POST_SUCCESS,props<{post: Post}>());
export const addPostFailure = createAction(ADD_POST_FAILURE,props<{errorMessage: string}>());
