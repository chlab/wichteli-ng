import { Action } from '@ngrx/store';
import { Person } from '../models/person.model';

export const ADD_PERSON = '[PERSON] Add';

export class AddPerson implements Action {
  readonly type = ADD_PERSON;

  constructor(public payload: Person) {}
}

export type Actions = AddPerson;
