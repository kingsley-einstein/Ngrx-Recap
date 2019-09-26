import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';

import { MaterialModule, FormModule } from '../modules';

import { AddUserComponent } from '../components';

import { appReducers } from '../management/reducers';
import { UserEffects, PostEffects } from '../management/effects';

import { UserService, PostService } from '../services';

import { SnackBarUtil } from '../utils';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, PostEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    UserService,
    PostService,
    SnackBarUtil
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
