import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoUsuarioComponent } from './ingreso-usuario.component';

describe('IngresoUsuarioComponent', () => {
  let component: IngresoUsuarioComponent;
  let fixture: ComponentFixture<IngresoUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresoUsuarioComponent]
    });
    fixture = TestBed.createComponent(IngresoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
