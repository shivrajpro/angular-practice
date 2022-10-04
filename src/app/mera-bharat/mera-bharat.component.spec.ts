import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeraBharatComponent } from './mera-bharat.component';

describe('MeraBharatComponent', () => {
  let component: MeraBharatComponent;
  let fixture: ComponentFixture<MeraBharatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeraBharatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeraBharatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
