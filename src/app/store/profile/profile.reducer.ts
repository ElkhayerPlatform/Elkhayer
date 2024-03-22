import {createReducer, on} from "@ngrx/store";
import {addProfileFailure, addProfileSuccess, getProfileSuccess} from "./profile.actions";
import {ProfileState} from "./profile.state";

export const _ProfileReducer = createReducer(ProfileState,
  on(addProfileSuccess, (state, action) => {
    return {
      ...state,
      profile: action.profile,
      errorMessage: ''
    }
  }),
  on(addProfileFailure, (state, action) => {
    return {
      ...state,
      errorMessage: action.errorMessage
    }
  }),
  on(getProfileSuccess, (state, action) => {
    return {
      ...state,
      profile: action.profile,
      errorMessage: ''
    }
  })
);

export function ProfileReducer(state: any, action: any) {
  return _ProfileReducer(state, action);
}
