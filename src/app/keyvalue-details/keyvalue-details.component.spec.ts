import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyvalueDetailsComponent } from './keyvalue-details.component';

describe('KeyvalueDetailsComponent', () => {
  let component: KeyvalueDetailsComponent;
  let fixture: ComponentFixture<KeyvalueDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyvalueDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyvalueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
