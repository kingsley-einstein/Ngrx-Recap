import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoadUserAction, LoadUsersAction, UserActionTypes } from '../../actions';
import { AppState } from '../../states';
import { UserService } from '../../../services';
import { selectUsers } from '../../selectors';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private store$: Store<AppState>, private service: UserService) {}
}

