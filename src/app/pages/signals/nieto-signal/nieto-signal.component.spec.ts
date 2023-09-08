import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NietoSignalComponent } from './nieto-signal.component';

describe('NietoSignalComponent', () => {
  let component: NietoSignalComponent;
  let fixture: ComponentFixture<NietoSignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NietoSignalComponent]
    });
    fixture = TestBed.createComponent(NietoSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
