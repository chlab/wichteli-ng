import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorDetailsFormComponent } from './creator-details-form.component';

describe('CreatorDetailsFormComponent', () => {
  let component: CreatorDetailsFormComponent;
  let fixture: ComponentFixture<CreatorDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
