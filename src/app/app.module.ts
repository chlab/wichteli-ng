import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CreatorDetailsFormComponent } from './components/creator-details-form/creator-details-form.component';
import { reducer } from './store/participant.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ParticipantComponent } from './components/participant/participant.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatorDetailsFormComponent,
    ParticipantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      app: reducer
    }),
    !environment.production
      ? StoreDevtoolsModule.instrument({ maxAge: 20 })
      : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
