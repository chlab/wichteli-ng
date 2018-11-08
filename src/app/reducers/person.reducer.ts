import { Person } from '../models/person.model';
import * as PersonActions from '../actions/person.actions';

const initialState: Person = {
  id: '',  // TODO
  name: '',
  email: ''
};

export function reducer(state: Person[] = [initialState], action: PersonActions.Actions) {
  switch (action.type) {
    case PersonActions.ADD_PERSON:
      return [...state, action.payload];
    default:
      return state;
  }
}
