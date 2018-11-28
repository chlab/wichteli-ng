import { Component, Input, OnInit } from '@angular/core';
import { Participant } from '../../models/participant.model';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {
  @Input() participant: Participant;

  constructor() { }

  ngOnInit() {
  }

}
