import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleStartComponent } from './google-start.component';

describe('GoogleStartComponent', () => {
  let component: GoogleStartComponent;
  let fixture: ComponentFixture<GoogleStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
