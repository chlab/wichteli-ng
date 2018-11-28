import * as ParticipantActions from './participant.actions';
import { initialState, State } from './app.state';

export function reducer(state: State = initialState, action: ParticipantActions.Actions) {
  switch (action.type) {
    case ParticipantActions.ADD_PARTICIPANT:
      const participants = state.participants;
      participants.push(action.payload);
      return {...state, participants};

    default:
      return state;
  }
}
