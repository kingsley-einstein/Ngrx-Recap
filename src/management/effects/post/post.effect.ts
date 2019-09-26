import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoadPostAction, LoadPostsAction, LoadPostActionPing, LoadPostsActionPing, PostActionTypes } from '../../actions';
import { AppState } from '../../states';
import { selectPosts } from '../../selectors';
import { PostService } from '../../../services';

@Injectable()
export class PostEffects {
  @Effect()
  getPost$ = this.actions$.pipe(
    ofType<LoadPostActionPing>(PostActionTypes.LoadPostPing),
    map((action) => action.payload),
    withLatestFrom(this.store$.pipe(select(selectPosts))),
    switchMap(([id, posts]) => {
      const data = this.service.getById(id);
      return of(new LoadPostAction({
        data
      }));
    })
  );

  @Effect()
  getPosts$ = this.actions$.pipe(
    ofType<LoadPostsActionPing>(PostActionTypes.LoadPostsPing),
    switchMap(() => of(new LoadPostsAction({
      data: this.service.getDb()
    })))
  );
  constructor(private actions$: Actions, private store$: Store<AppState>, private service: PostService) {}
}
