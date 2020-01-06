import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GetUserComponent } from './get-user/get-user.component';
import { PostUserComponent } from './post-user/post-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './_services/users.service';
import { reducer } from './store/reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    GetUserComponent,
    PostUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ users: reducer }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 15, // Retains last 15 states
    }),
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
