const button = document.querySelector("button");
const id = document.querySelector("span");
const description = document.querySelector("#description");

button.addEventListener("click", () => {
  gerarUmId();
  gerarUmAdvice();
});

async function geradorDeConselhos() {
  const url = "https://api.adviceslip.com/advice";
  const resposta = await fetch(url);
  return await resposta.json();
}

async function gerarId(slip_id) {
  const url = `https://api.adviceslip.com/advice/${slip_id}`;
  const resposta = await fetch(url);
  return await resposta.json();
}

async function gerarUmId() {
  const conselhos = await geradorDeConselhos();
  const conselho = await gerarId(conselhos.slip.id);
  const oConselho = conselho.slip.id;
  id.innerHTML = `# ${oConselho}`;
}

async function gerarAdvice(advice) {
  const url = `	https://api.adviceslip.com/advice/search/${advice}`;
  const resposta = await fetch(url);
  return await resposta.json();
}
async function gerarUmAdvice() {
  const conselhos = await geradorDeConselhos();
  const conselho = await gerarAdvice(conselhos.slip.advice);
  const oAdvice = conselho.query;
  description.innerHTML = oAdvice;
}

