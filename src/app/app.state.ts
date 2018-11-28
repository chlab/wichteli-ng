import { Person } from './models/person.model';

export interface State {
  participants: Person[];
}

export const initialState: State = {
  participants: []
};
