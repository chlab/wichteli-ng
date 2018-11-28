import { Component, OnInit } from '@angular/core';
import { AddParticipant } from './store/participant.actions';
import { Participant } from './models/participant.model';
import { Store } from '@ngrx/store';
import { State } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'wichteli';

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(new AddParticipant(new Participant()));
  }
}
