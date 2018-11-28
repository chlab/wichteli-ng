import { Participant } from '../models/participant.model';

export interface AppState {
  participants: Participant[];
}

export const initialState: AppState = {
  participants: []
};
