import * as ParticipantActions from './participant.actions';
import { initialState, AppState } from './app.state';
import { find } from 'lodash-es';
import { createSelector } from '@ngrx/store';
import { Participant } from '../models/participant.model';

export const getParticipants = (state: AppState) => state.participants;

export const getCreator = createSelector(getParticipants, (participants: Participant[]) => {
  return find(participants, { isCreator: true });
});

export function reducer(state: AppState = initialState, action: ParticipantActions.Actions) {
  switch (action.type) {
    case ParticipantActions.ADD_PARTICIPANT:
      const participants = state.participants;
      participants.push(action.payload);
      return {...state, participants};

    default:
      return state;
  }
}
