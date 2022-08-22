import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionComandaComponent } from './gestion-comanda.component';

describe('GestionComandaComponent', () => {
  let component: GestionComandaComponent;
  let fixture: ComponentFixture<GestionComandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionComandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionComandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
