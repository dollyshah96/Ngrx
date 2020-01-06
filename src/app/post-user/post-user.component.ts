
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as fromUsers from "../store";
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.scss']
})
export class PostUserComponent implements OnInit {

  FG = new FormGroup({
    userId: new FormControl(101),
    id: new FormControl(2000),
    title: new FormControl('test title'),
    body: new FormControl('test body')
  });
  isLoading: boolean;

  constructor(private _store: Store<fromUsers.IUserState>) { }

  ngOnInit() {
  }

  public onSubmit() {
    this._store.dispatch(new fromUsers.PostUser(this.FG.value));

    const users$ = this._store.pipe(select(fromUsers.allUsers));

    users$.subscribe(res => {
      this.isLoading = res.isLoading;
    });
  }
}
