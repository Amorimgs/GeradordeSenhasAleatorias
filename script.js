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

// Criando um numero aleatório de zero até o "max"
const NumeroAleatorio = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

//Embaralhando senha
const EmbaralhaArray = (array) => {
  const arrayEmbaralhado = [];
  for (let i = 0; arrayEmbaralhado.length < array.length; i += 1) {
    let index = NumeroAleatorio(array.length - 1);
    if (!arrayEmbaralhado.includes(array[index])) {
      arrayEmbaralhado.push(array[index]);
    }
  }
  return arrayEmbaralhado;
};

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
console.log(generatePassword(10));

//const showPassword = (size) => {};
