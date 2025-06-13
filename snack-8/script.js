const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'
let classe = ''
students.forEach((nome) => {
  if (nome.name === "Marco Lanci") {
    classe = nome.class
  }
})

const nome = students.filter(names => names.name === "Marco Lanci")
console.log(nome[0].class)
console.log(classe)