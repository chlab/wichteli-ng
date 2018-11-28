import { Person } from '../models/person.model';
import * as PersonActions from '../actions/person.actions';

export interface State {
  participants: Person[];
}

export const initialState: State = {
  participants: []
};

export function reducer(state: State = initialState, action: PersonActions.Actions) {
  switch (action.type) {
    case PersonActions.ADD_PERSON:
      const participants = state.participants;
      participants.push(action.payload);
      return {...state, participants};

    default:
      return state;
  }
}
