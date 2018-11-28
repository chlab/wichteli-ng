import { AddPerson, ADD_PERSON } from '../store/person.actions';
import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';
import { Store } from '@ngrx/store';
import { State } from '../app.state';

@Component({
  selector: 'app-creator-details-form',
  templateUrl: './creator-details-form.component.html',
  styleUrls: ['./creator-details-form.component.scss']
})
export class CreatorDetailsFormComponent implements OnInit {
  person: Person = {
    id: '',
    name: '',
    email: ''
  };

  constructor(private store: Store<State>) {}

  ngOnInit() {
  }

  addCreatorDetails() {
    this.store.dispatch(new AddPerson(this.person));
  }
}
