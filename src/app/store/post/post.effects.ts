import {Injectable} from "@angular/core";
import {catchError, exhaustMap, map, of, switchMap} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PostService} from "../../services/post.service";
import {
  getPost, getPostsByUserId,
  getPostsByUserIdSuccess,
  getPostSuccess,
  loadPosts,
  loadPostsFailure,
  loadPostsSuccess
} from "./post.actions";

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postService: PostService) {
  }

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts),
      exhaustMap((action) => {
        return this.postService.getPosts().pipe(
          map((data) => {
            // @ts-ignore
            return loadPostsSuccess({list: data.content})
          }),
          catchError((error) => {
            return of(loadPostsFailure({errorMessage: error.message}))
          }))
      })))

  getPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPost),
      switchMap((action) => {
        return this.postService.getPostById(action.id).pipe(
          map((data) => {
            return getPostSuccess({post: data})
          }),
          catchError((error) => {
            return of(loadPostsFailure({errorMessage: error.message}))
          }))
      }))
  )

  getPostsByUserId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPostsByUserId),
      exhaustMap((action) => {
        return this.postService.getPostsByUserId(action.id).pipe(
          map((data: any) => {
            console.log(data)
              return getPostsByUserIdSuccess({list: data})
          }),
          catchError((error) => {
            return of(loadPostsFailure({errorMessage: error.message}))
          }))
      })))
}
