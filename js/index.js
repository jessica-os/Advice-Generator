const button = document.querySelector("button");
const id = document.querySelector("span");
const description = document.querySelector("#description");

button.addEventListener("click", () => {
  geradorDeConselhos();
});

async function geradorDeConselhos() {
  const url = await fetch("https://api.adviceslip.com/advice");
  const resposta = await url.json();
  id.innerHTML = `#${resposta.slip.id}`;
  description.innerHTML = `"${resposta.slip.advice}"`;
}
