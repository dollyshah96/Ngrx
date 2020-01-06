
import { Action } from '@ngrx/store';
import { IUser } from '../_interfaces/user';
import { HttpErrorResponse } from '@angular/common/http';

export enum UserActionTypes {
    GetUserLoad = '[User] Get User',
    GetUserSuccess = '[User] Get User Success',
    GetUserFail = '[User] Get User Fail',
    PostUser = '[User] Post User',
    PostUserSuccess = '[User] Post User Success',
    PostUserFail = '[User] Post User Fail',
}


export class GetUserLoad implements Action {
    public readonly type = UserActionTypes.GetUserLoad;
}

export class GetUserSuccess implements Action {
    public readonly type = UserActionTypes.GetUserSuccess;

    constructor(public payload: IUser[]) { }
}

export class GetUserFail implements Action {
    public readonly type = UserActionTypes.GetUserFail;

    constructor(public error: HttpErrorResponse) { }
}

export class PostUser implements Action {
    public readonly type = UserActionTypes.PostUser;

    constructor(public payload: IUser) { }
}

export class PostUserSuccess implements Action {
    public readonly type = UserActionTypes.PostUserSuccess;

    constructor(public payload: IUser) { }
}

export class PostUserFail implements Action {
    public readonly type = UserActionTypes.PostUserFail;

    constructor(public error: HttpErrorResponse) { }
}

export type UserActions = GetUserLoad | GetUserSuccess | GetUserFail | PostUser | PostUserSuccess | PostUserFail;
