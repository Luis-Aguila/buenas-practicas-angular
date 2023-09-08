import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoSignalComponent } from './hijo-signal.component';

describe('HijoSignalComponent', () => {
  let component: HijoSignalComponent;
  let fixture: ComponentFixture<HijoSignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HijoSignalComponent]
    });
    fixture = TestBed.createComponent(HijoSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
