import { AddParticipant, ADD_PARTICIPANT } from '../store/participant.actions';
import { Component, OnInit } from '@angular/core';
import { Participant } from '../models/participant.model';
import { Store } from '@ngrx/store';
import { State } from '../store/app.state';

@Component({
  selector: 'app-creator-details-form',
  templateUrl: './creator-details-form.component.html',
  styleUrls: ['./creator-details-form.component.scss']
})
export class CreatorDetailsFormComponent implements OnInit {
  creator = new Participant();

  constructor(private store: Store<State>) {}

  ngOnInit() {
  }

  addCreatorDetails() {
    this.store.dispatch(new AddParticipant(this.creator));
  }
}
