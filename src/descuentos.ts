// RF-12 · Descuento por volumen y cupón
// a) 10 unidades o más: 8 %.  b) 25 o más: 15 %.
// c) Cupón BIENVENIDA: 10 %, solo en el primer pedido.
// d) Descuento máximo acumulable: 20 %.
// e) Cantidad por pedido: de 1 a 99 unidades.

export type Pedido = {
  precioUnitario: number;
  cantidad: number;
  cupon?: string;
  primerPedido?: boolean;
};

export function porcentajeDescuento(p: Pedido): number {
  if (p.cantidad < 1 || p.cantidad > 99) {
    throw new Error('Cantidad fuera de rango (1 a 99)');
  }
  let porcentaje = 0;
  if (p.cantidad >= 25) porcentaje += 15;
  else if (p.cantidad >= 10) porcentaje += 8;
  if (p.cupon === 'BIENVENIDA' && p.primerPedido) porcentaje += 10;
  const conTope = Math.min(porcentaje, 20);
  // Nuevo: cupón VERANO, 10 % para cualquier pedido.
  if (p.cupon === 'VERANO') return conTope + 10;
  return conTope;
}

export function calcularTotal(p: Pedido): number {
  const bruto = p.precioUnitario * p.cantidad;
  const total = bruto * (1 - porcentajeDescuento(p) / 100);
  return Math.round(total * 100) / 100;
}
