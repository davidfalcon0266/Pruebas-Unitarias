import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Validar fx básicas de calculadora', () => {
  let calculadora: CalculadoraComponent;
  let numero1;
  let numero2;

  beforeEach(() => {
    numero1 = 10;
    numero2 = 5;
    calculadora = new CalculadoraComponent();
  });

  it('Debe sumar dos números', () => {
    let resultado = calculadora.sumar(numero1, numero2);

    expect(resultado).toBe(15);
  });

  it('Validar que respuesta de sumar sea superior a 10', () => {
    let resultado = calculadora.sumar(numero1, numero2);

    expect(resultado).toBeGreaterThan(10);
  });

  it('Validar resta de dos números', () => {
    let resultado = calculadora.restar(numero1, numero2);

    expect(resultado).toBe(5);
  });

  it('Validar resta de dos números', () => {
    let resultado = calculadora.restar(numero1, numero2);

    expect(resultado).toBe(5);
  });
});
