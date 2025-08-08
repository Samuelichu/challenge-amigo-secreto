let arrayAmigos = [];

const agregarAmigo = () => {
  let textAmigo = document.getElementById("amigo").value;
  if (textAmigo === "") {
    alert("Por favor inserte un nombre");
  } else {
    arrayAmigos.push(textAmigo);
    listaAmigo();
    console.log(arrayAmigos);
  }
};

const listaAmigo = () => {
  const listAmigo = document.getElementById("listamigos");
  listAmigo.innerHTML = "";
  arrayAmigos.forEach((a) => {
    const lista = document.createElement("li");
    lista.innerHTML = a;
    listAmigo.appendChild(lista);
  });
};
