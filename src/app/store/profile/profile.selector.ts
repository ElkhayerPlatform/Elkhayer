import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProfileModel} from "../../models/profile.model";

const getProfileState = createFeatureSelector<ProfileModel>('profile');

export const getProfileSelector = createSelector(getProfileState,
  (state) =>{
    return state.profile
  }
);
