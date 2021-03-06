import "@testing-library/jest-dom";

import { getSaludo } from "../../base/02-template-string";

describe("Pruebas sobre la funcion getSaludo", () => {
  test("getSaludo debe de retornar Hola Felipao!", () => {
    const nombre = "Felipao";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre + "!");
  });

  test("getSaludo debe de retorar Hola Felipe! si no se envia el parametro nombre", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Felipe!");
  });
});
