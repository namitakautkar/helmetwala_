import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhelmetComponent } from './addhelmet.component';

describe('AddhelmetComponent', () => {
  let component: AddhelmetComponent;
  let fixture: ComponentFixture<AddhelmetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhelmetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhelmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
