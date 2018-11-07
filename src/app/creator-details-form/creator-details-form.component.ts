import { Component, OnInit } from '@angular/core';
import { Person } from '../person'

@Component({
  selector: 'app-creator-details-form',
  templateUrl: './creator-details-form.component.html',
  styleUrls: ['./creator-details-form.component.scss']
})
export class CreatorDetailsFormComponent implements OnInit {
  person: Person = {
    name: '',
    email: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
