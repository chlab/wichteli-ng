import { Component, OnInit } from '@angular/core';
import { AddParticipant } from './store/participant.actions';
import { Participant } from './models/participant.model';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wichteli';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // add creator as an initial participant
    const creator = new Participant(true);
    this.store.dispatch(new AddParticipant(creator));
  }
}
