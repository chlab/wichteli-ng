import { Action } from '@ngrx/store';
import { Participant } from '../models/participant.model';

export const ADD_PARTICIPANT = '[PARTICIPANT] Add';
export const GET_CREATOR = '[CREATOR] Get';

export class AddParticipant implements Action {
  readonly type = ADD_PARTICIPANT;

  constructor(public payload: Participant) {}
}

export class GetCreator implements Action {
  readonly type = GET_CREATOR;
}

export type Actions = AddParticipant | GetCreator;
