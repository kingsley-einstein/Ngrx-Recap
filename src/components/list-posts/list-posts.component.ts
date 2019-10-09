import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectPosts } from '../../management/selectors';
import { AppState } from '../../management/states';
import { LoadPostsActionPing } from '../../management/actions';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  data$ = this.store.pipe(select(selectPosts));
  columns$ = ['id', 'title', 'created_at', 'author'];

  ngOnInit() {
    console.log('[ListPostsComponent] initialised');
    this.store.dispatch(new LoadPostsActionPing());
  }
}
