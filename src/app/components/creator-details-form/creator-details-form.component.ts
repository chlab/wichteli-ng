import { AddParticipant, ADD_PARTICIPANT } from '../../store/participant.actions';
import { Component, OnInit } from '@angular/core';
import { Participant } from '../../models/participant.model';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import * as fromRoot from '../../store/participant.reducer';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-creator-details-form',
  templateUrl: './creator-details-form.component.html',
  styleUrls: ['./creator-details-form.component.scss']
})
export class CreatorDetailsFormComponent implements OnInit {
  creator$: Observable<Participant>;

  constructor(private store: Store<AppState>) {
    this.creator$ = store.select('app').pipe(
      select(fromRoot.getCreator)
    );
  }

  ngOnInit() {
  }
}
