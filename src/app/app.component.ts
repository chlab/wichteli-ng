import { Component, OnInit } from '@angular/core';
import { AddPerson } from './store/person.actions';
import { Person } from './models/person.model';
import { Store } from '@ngrx/store';
import { State } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'wichteli';

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(new AddPerson(new Person()));
  }
}
