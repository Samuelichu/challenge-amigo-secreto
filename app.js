let arrayAmigos = [];

const agregarAmigo = () => {
  let textAmigo = document.getElementById("amigo").value;
  arrayAmigos.push(textAmigo);
  console.log(arrayAmigos)
};
