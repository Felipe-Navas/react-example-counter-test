
/**
 * 
 * @returns {string} URL a la imagen retornada por el API de giphy
 */
export const getImagen = async () => {
  try {
    const apiKey = "A8aSSDTgOffsfgDSFLAtf1daqEtYIs8K";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    return "No existe";
  }
};
