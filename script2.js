/*
fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=muse")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("errore: ", error);
  });
 */

function caricaFatto() {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=muse")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const brani = data.data;
      console.log(brani);
      mostraLista(brani);
    })
    .catch((error) => {
      console.error("errore: ", error);
    });
}

function mostraLista(elemento) {
  let lista = document.getElementById("inserisciContenuto");
  lista.innerHTML = ` <h3>${elemento[1].album.title}</h3>  `;
  lista.innerHTML = ` <img src="${elemento[1].album.cover}" alt=""></img> `;

  console.log(lista);
}
