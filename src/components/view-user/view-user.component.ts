import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../management/states';
import { LoadUserActionPing } from '../../management/actions';
import { selectUser } from '../../management/selectors';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  email$: string = '';
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.email$ = params.email;
    });
  }

  user$ = this.store.pipe(select(selectUser));

  ngOnInit() {
    console.log('[ViewUserComponent] initialised');
    this.store.dispatch(new LoadUserActionPing(this.email$));
  }
}
