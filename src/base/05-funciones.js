/**
 *
 * @returns {Object} Retorna un objeto con las propiedades uid y username
 */
export const getUser = () => ({
  uid: "ABC123",
  username: "Felipao444",
});

/**
 *
 * @param {string} nombre Nombre que va a retornar la funcion en la propiedad username
 * @returns
 */
export const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});
