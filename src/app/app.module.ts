import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import * as storeModuleConfig from 'src/app/store/reducers/index' 
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UserDetailModule } from './user-detail/user-detail.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { reducers, metaReducers } from 'src/app/store/reducers/index';
import { UserDetailResolver } from './user-detail/user-detail.resolver';
import { userReducer } from './store/reducers/user.reducers';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    UserDetailModule,
    HomeModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([])   ,

    StoreModule.forFeature('user-detail', userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [UserDetailResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }


