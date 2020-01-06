
import { Component, OnInit } from '@angular/core';
import * as fromUsers from "../store";
import { Store, select } from '@ngrx/store';
import { IUser } from '../_interfaces/user';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.scss']
})
export class GetUserComponent implements OnInit {
  users: IUser[] = [];
  public isLoading: boolean;
  constructor(
    private _store: Store<fromUsers.IUserState>) { }

  ngOnInit() {
    this._store.dispatch(new fromUsers.GetUserLoad());
    const users$ = this._store.pipe(select(fromUsers.allUsers));

    users$.subscribe(res => {
      this.isLoading = res.isLoading;
      this.users = res.data;
    });
  }

  public getFirstTenUsers(): void {
    const firstTenUsers$ = this._store.pipe(select(fromUsers.firstTenUsers));

    firstTenUsers$.subscribe(res => {
      this.isLoading = res.isLoading;
      this.users = res.data;
    });
  }

}
