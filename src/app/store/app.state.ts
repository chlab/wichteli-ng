import { Participant } from '../models/participant.model';

export interface State {
  participants: Participant[];
}

export const initialState: State = {
  participants: []
};
