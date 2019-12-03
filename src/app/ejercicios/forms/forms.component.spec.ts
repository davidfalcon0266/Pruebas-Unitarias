import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponent } from './forms.component';
import { FormBuilder } from '@angular/forms';

describe('Probando funcionalidades del form', () => {
  let component: FormsComponent;

  beforeEach(() => {
    component = new FormsComponent(new FormBuilder());
  });

  it('Debe crear un form con un campo nombre', () => {
    expect(component.form.contains('nombre')).toBeTruthy();
  });

  it('Debe crear un form con un campo email', () => {
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('El nombre debe ser requerido', () => {
    let control = component.form.get('nombre');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });
});
