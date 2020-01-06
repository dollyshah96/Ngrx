
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUserState } from ".";

const getUserState = createFeatureSelector<IUserState>('users');

export const allUsers = createSelector(getUserState, (state: IUserState) => {
    return state;
});

export const firstTenUsers = createSelector(getUserState, (state: IUserState) => {
    const users = state.data.slice(0, 10);
    return { ...state, data: users };
});
