/*function caricaFatto() {
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
} */

window.addEventListener("load", function () {
  caricaBrani();
});

function caricaBrani() {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=muse")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const brani = data.data;
      let lista = document.getElementById("contenitoreBrano");
      console.log(brani);

      brani.forEach((element) => {
        let cards = document.createElement("div");
        cards.classList.add(
          "card d-flex justify-content-center text-center  align-items-center "
        );
        cards.innerHTML = ` 
                      <img src="${element.album.cover}">
                      <div class="card-body">
                        <h3>${element.artist.name}</h3>
                        <h4>${element.artist.title}</h4>
                        <h5>${element.album.title}</h5>`;

        lista.appendChild(cards);
      });
    })
    .catch((error) => {
      console.error("errore: ", error);
    });
}
