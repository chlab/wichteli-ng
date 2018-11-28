import { Action } from '@ngrx/store';
import { Participant } from '../models/participant.model';

export const ADD_PARTICIPANT = '[PARTICIPANT] Add';

export class AddParticipant implements Action {
  readonly type = ADD_PARTICIPANT;

  constructor(public payload: Participant) {}
}

export type Actions = AddParticipant;
