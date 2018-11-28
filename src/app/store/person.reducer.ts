import * as PersonActions from './person.actions';
import { initialState, State } from '../app.state';

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
