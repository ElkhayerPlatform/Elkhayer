import {createAction, props} from "@ngrx/store";
import {Profile} from "../../models/profile.model";

export const ADD_PROFILE = '[Profile] Add Profile';
export const ADD_PROFILE_SUCCESS = '[Profile] Add Profile Success';
export const ADD_PROFILE_FAILURE = '[Profile] Add Profile Failure';

export const GET_PROFILE = '[Profile] Get Profile';
export const GET_PROFILE_SUCCESS = '[Profile] Get Profile Success';

export const addProfile = createAction(ADD_PROFILE, props<{profile: Profile}>());
export const addProfileSuccess = createAction(ADD_PROFILE_SUCCESS, props<{profile: Profile}>());
export const addProfileFailure = createAction(ADD_PROFILE_FAILURE, props<{errorMessage: string}>());

export const getProfile = createAction(GET_PROFILE, props<{id: number}>());
export const getProfileSuccess = createAction(GET_PROFILE_SUCCESS, props<{profile: Profile}>());
