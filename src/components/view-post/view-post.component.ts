import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../management/states';
import { selectPost } from '../../management/selectors';
import { LoadPostActionPing } from '../../management/actions';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  id$: any = null;
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.id$ = params.id;
    });
  }
  post$ = this.store.pipe(select(selectPost));

  ngOnInit() {
    console.log('[ViewPostComponent] initialised');
    this.store.dispatch(new LoadPostActionPing(parseInt(this.id$)));
  }
}
