const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const msg = document.getElementById("msg");
const regras = document.getElementById("regras");

function showMessage(texto, ok) {
  msg.style.display = "block";
  msg.className = "msg " + (ok ? "ok" : "erro");
  msg.textContent = texto;
}

function validarEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function validarSenha(v) {
  const s = v.trim();
  const erros = [];
  if (s.length < 8) erros.push("Senha deve ter no mínimo 8 caracteres.");
  if (!/[A-Za-z]/.test(s)) erros.push("Senha deve ter pelo menos 1 letra.");
  if (!/\d/.test(s)) erros.push("Senha deve ter pelo menos 1 número.");
  return erros;
}

form.addEventListener("submit", (e) => {
  msg.style.display = "none";
  regras.innerHTML = "";

  const erros = [];
  if (nome.value.trim().length < 3) erros.push("Nome deve ter pelo menos 3 caracteres.");
  if (!validarEmail(email.value)) erros.push("E-mail inválido.");
  erros.push(...validarSenha(senha.value));

  if (erros.length > 0) {
    e.preventDefault();
    regras.innerHTML = erros.map(er => `<li>${er}</li>`).join("");
    showMessage("Corrija os itens acima antes de enviar.", false);
  }
});
const estados = [
  { sigla: "AC", nome: "Acre" },
  { sigla: "AL", nome: "Alagoas" },
  { sigla: "AP", nome: "Amapá" },
  { sigla: "AM", nome: "Amazonas" },
  { sigla: "BA", nome: "Bahia" },
  { sigla: "CE", nome: "Ceará" },
  { sigla: "DF", nome: "Distrito Federal" },
  { sigla: "ES", nome: "Espírito Santo" },
  { sigla: "GO", nome: "Goiás" },
  { sigla: "MA", nome: "Maranhão" },
  { sigla: "MT", nome: "Mato Grosso" },
  { sigla: "MS", nome: "Mato Grosso do Sul" },
  { sigla: "MG", nome: "Minas Gerais" },
  { sigla: "PA", nome: "Pará" },
  { sigla: "PB", nome: "Paraíba" },
  { sigla: "PR", nome: "Paraná" },
  { sigla: "PE", nome: "Pernambuco" },
  { sigla: "PI", nome: "Piauí" },
  { sigla: "RJ", nome: "Rio de Janeiro" },
  { sigla: "RN", nome: "Rio Grande do Norte" },
  { sigla: "RS", nome: "Rio Grande do Sul" },
  { sigla: "RO", nome: "Rondônia" },
  { sigla: "RR", nome: "Roraima" },
  { sigla: "SC", nome: "Santa Catarina" },
  { sigla: "SP", nome: "São Paulo" },
  { sigla: "SE", nome: "Sergipe" },
  { sigla: "TO", nome: "Tocantins" }
];

const selectEstado = document.getElementById("estado");

estados.forEach(estado => {
  const option = document.createElement("option");
  option.value = estado.sigla;
  option.textContent = estado.nome;
  selectEstado.appendChild(option);
});