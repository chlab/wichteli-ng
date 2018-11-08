import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CreatorDetailsFormComponent } from './creator-details-form/creator-details-form.component';
import { reducer } from './reducers/person.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CreatorDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      person: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
