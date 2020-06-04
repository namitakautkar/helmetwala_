import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McategoriesComponent } from './mcategories.component';

describe('McategoriesComponent', () => {
  let component: McategoriesComponent;
  let fixture: ComponentFixture<McategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
