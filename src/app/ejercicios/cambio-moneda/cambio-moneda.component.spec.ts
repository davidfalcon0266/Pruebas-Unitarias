import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioMonedaComponent } from './cambio-moneda.component';

describe('CambioMonedaComponent', () => {
  let component: CambioMonedaComponent;
  let fixture: ComponentFixture<CambioMonedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioMonedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Validar funciones de casa de cambio', () => {
  let component: CambioMonedaComponent;

  beforeEach(() => {
    component = new CambioMonedaComponent();
  });

  it('Debe retornar el valor de mis CLP en USD', () => {
    let clp = 41500;

    let usd = component.calcularUSD(clp);

    expect(usd).toBe(50);
  });
  
  it('Debe retornar el valor de mis CLP en USD con nuevo valor de cambio', () => {
    let clp = 83830;

    let usd = component.calcularUSD(clp);

    expect(usd).toBeLessThan(100);
  });

});
