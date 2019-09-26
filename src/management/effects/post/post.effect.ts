import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoadPostAction, LoadPostsAction, PostActionTypes } from '../../actions';
import { AppState } from '../../states';
import { selectPosts } from '../../selectors';
import { PostService } from '../../../services';

@Injectable()
export class PostEffects {
  @Effect()
  getPost$ = this.actions$.pipe(
    ofType<LoadPostAction>(PostActionTypes.LoadPost),
    map((action) => action.payload.data),
    withLatestFrom(this.store$.pipe(select(selectPosts))),
    switchMap(([post, posts]) => {
      const data = this.service.getById(post.id);
      return of(new LoadPostAction({
        data
      }));
    })
  );
  constructor(private actions$: Actions, private store$: Store<AppState>, private service: PostService) {}
}
