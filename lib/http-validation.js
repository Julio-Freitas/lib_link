function manejaErros(error) {
  throw new Error(error.message);
}

async function checkStatus(arrayURLs) {
  try {
    const arrayStatus = await Promise.all(
      arrayURLs.map(async (url) => {
        const res = await fetch(url);
        return res.status;
      })
    );
    return arrayStatus;
  } catch (error) {
    manejaErros(error);
  }
}

function generateArrayURLs(arrayLinks) {
  return arrayLinks.map((objetoLink) => Object.values(objetoLink).join());
}

async function validaURLs(arrayLinks) {
  console.log(arrayLinks);
  const links = generateArrayURLs(arrayLinks);
  const statusLinks = await checkStatus(links);

  const resultados = arrayLinks.map((obj, indice) => ({
    ...obj,
    status: statusLinks[indice],
  }));
  return resultados;
}

module.exports = validaURLs;
