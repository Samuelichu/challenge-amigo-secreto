const arrayAmigos = [];
const textAmigo = document.getElementById("amigo");
const listAmigo = document.getElementById("listaAmigos");
const parrafoAmigo = document.getElementById("resultado");

function agregarAmigo() {
  if (textAmigo.value === "") {
    alert("Por favor ingrese un nombre");
  } else {
    arrayAmigos.push(textAmigo.value);
    textAmigo.value = "";
    listaAmigo();
    console.log(arrayAmigos);
  }
};

function listaAmigo() {
  listAmigo.innerHTML = "";
  arrayAmigos.forEach((a) => {
    const lista = document.createElement("li");
    lista.innerHTML = a;
    listAmigo.appendChild(lista);
  });
};

function sortearAmigo() {
  if (arrayAmigos.length < 2 ) {
    alert("Tiene que ingresar al menos 2 amigos");
  } else {
    let posicionAmigoSecreto = Math.floor(Math.random() * arrayAmigos.length);
    listAmigo.innerHTML = " ";
    parrafoAmigo.innerHTML = `El amigo secreto es: ${arrayAmigos[posicionAmigoSecreto]}`;
    arrayAmigos.length = 0 ;
  }
};

