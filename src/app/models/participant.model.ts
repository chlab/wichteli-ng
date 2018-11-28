import { uniqueId } from 'lodash-es';

export class Participant {
  id = uniqueId();
  name = '';
  email = '';

  constructor(public isCreator: boolean = false) {}
}
