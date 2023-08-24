// Possiveis caracteres
caracteres = [
  [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "",
    "]",
    "^",
    "_",
    "{",
    "|",
    "}",
    "~",
  ],
];

// Seletores
const button = window.document.querySelector("#gerador");
const numeroDigitado = window.document.querySelector("#caracteres");
const paragrafo = window.document.querySelector(".senha");
console.log(button, numeroDigitado, paragrafo);

// Criando um numero aleatório de zero até o "max"
const NumeroAleatorio = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

//Embaralhando senha - Referência https://mail.horadecodar.com.br/como-embaralhar-um-array-em-javascript-shuffle/

function EmbaralhaArray(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const newIndex = NumeroAleatorio(array.length - 1);
    [array[i], array[newIndex]] = [array[newIndex], array[i]];
  }

  return array;
}

//Criando Senha
const generatePassword = (size) => {
  const senha = [];
  let senhaFormatada;

  //Adicionando um caracter de cada tipo a senha.
  for (classe of caracteres) {
    let letra = classe[NumeroAleatorio(classe.length - 1)];
    senha.push(letra);
  }

  // Adicionando o resto dos caracteres sorteados na senha
  for (let i = 0; i < size - 4; i += 1) {
    let tipoCaracter = caracteres[NumeroAleatorio(3)];
    let letra = tipoCaracter[NumeroAleatorio(tipoCaracter.length - 1)];
    senha.push(letra);
  }

  //Embaralhando senha criada
  senhaFormatada = EmbaralhaArray(senha).join("");

  return senhaFormatada;
};

//Adicionando Senha ao HTML
const showPassword = (size, campo) => {
  if (size < 8 || size > 20) {
    campo.innerHTML = "A senha deve ter no mínimo 8 caracteres e no máximo 20.";
    campo.style.color = "red";
  } else {
    const senha = generatePassword(size);
    campo.innerHTML = senha;
    campo.style.color = "black";
  }
  numeroDigitado.focus();
};

//Adicionando Events
button.addEventListener("click", () => {
  showPassword(numeroDigitado.value, paragrafo);
});
