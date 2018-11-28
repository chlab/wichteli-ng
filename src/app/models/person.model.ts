import { uniqueId } from 'lodash-es';

export class Person {
  id = uniqueId();
  name = '';
  email = '';
}
