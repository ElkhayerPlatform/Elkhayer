import {Injectable} from "@angular/core";
import {catchError, map, of, switchMap} from "rxjs";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProfileService} from "../../services/profile.service";
import {getProfile, getProfileSuccess} from "./profile.actions";
import {loadPostsFailure} from "../post/post.actions";


@Injectable()
export class ProfileEffects {
  constructor(private actions$: Actions, private profileService: ProfileService) {
  }

  getProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProfile),
      switchMap((action) => {
        return this.profileService.getProfile(action.id).pipe(
          map((data) => {
            console.log('profile form effect');
            console.log(data);
            return getProfileSuccess({profile: data})
          }),
          catchError((error) => {
            return of(loadPostsFailure({errorMessage: error.message}))
          }))
      }))
  )
}
