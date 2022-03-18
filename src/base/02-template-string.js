/**
 *
 * @param {string} nombre [o] [d='Felipe'] nombre de la persona a saludar
 * @returns {string} - retorna Hola + nombre
 */

export function getSaludo(nombre = "Felipe") {
  const saludo = `Hola ${nombre}!`;
  return saludo;
}
