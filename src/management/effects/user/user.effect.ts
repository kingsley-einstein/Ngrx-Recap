import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, withLatestFrom, map } from 'rxjs/operators';
import { LoadUserAction, LoadUsersAction, LoadUserActionPing, LoadUsersActionPing, UserActionTypes } from '../../actions';
import { AppState } from '../../states';
import { UserService } from '../../../services';
import { selectUsers } from '../../selectors';

@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<LoadUserActionPing>(UserActionTypes.LoadUserPing),
    map((action) => action.payload),
    withLatestFrom(this.store$.pipe(select(selectUsers))),
    switchMap(([email, users]) => {
      const data = this.service.getByEmail(email);
      return of(new LoadUserAction({
        data
      }));
    })
  );

  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<LoadUsersActionPing>(UserActionTypes.LoadUsersPing),
    switchMap(() => of(new LoadUsersAction({
      data: this.service.getDb()
    })))
  );
  constructor(private actions$: Actions, private store$: Store<AppState>, private service: UserService) {}
}

