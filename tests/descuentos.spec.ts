import { test, expect } from '@playwright/test';
import { calcularTotal } from '../src/descuentos';

// Suite existente de RF-12. Está en verde. ¿Qué no está probando?

test('sin descuento: 5 unidades a 100', () => {
  expect(calcularTotal({ precioUnitario: 100, cantidad: 5 })).toBe(500);
});

test('volumen 8 %: 12 unidades a 100', () => {
  expect(calcularTotal({ precioUnitario: 100, cantidad: 12 })).toBe(1104);
});

test('volumen 15 %: 30 unidades a 100', () => {
  expect(calcularTotal({ precioUnitario: 100, cantidad: 30 })).toBe(2550);
});

test('cupón BIENVENIDA en el primer pedido: 10 %', () => {
  expect(calcularTotal({ precioUnitario: 100, cantidad: 5, cupon: 'BIENVENIDA', primerPedido: true })).toBe(450);
});

test('cupón BIENVENIDA fuera del primer pedido: no aplica', () => {
  expect(calcularTotal({ precioUnitario: 100, cantidad: 5, cupon: 'BIENVENIDA', primerPedido: false })).toBe(500);
});

test('tope del 20 %: volumen 15 % más BIENVENIDA 10 %', () => {
  expect(calcularTotal({ precioUnitario: 100, cantidad: 30, cupon: 'BIENVENIDA', primerPedido: true })).toBe(2400);
});

test('un cupón que no existe no aplica descuento', () => {
  expect(calcularTotal({ precioUnitario: 100, cantidad: 5, cupon: 'VERANO' })).toBe(500);
});

test('más de 99 unidades: error', () => {
  expect(() => calcularTotal({ precioUnitario: 100, cantidad: 100 })).toThrow('Cantidad fuera de rango (1 a 99)');
});
