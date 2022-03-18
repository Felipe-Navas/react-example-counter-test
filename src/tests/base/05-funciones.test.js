import "@testing-library/jest-dom";

import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas sobre 05-funciones", () => {
  test("getUser debe de retornar un objeto igual al userTest", () => {
    const userTest = {
      uid: "ABC123",
      username: "Felipao444",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("getUsuarioActivo debe de retonar un objeto con el mismo nombre que fue enviado por parametro", () => {
    const nombre = "Felipao Test";
    const user = getUsuarioActivo(nombre);

    expect(user).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
