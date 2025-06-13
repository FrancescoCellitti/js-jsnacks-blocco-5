const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]
const increment = []
numbers.forEach((numeri) => {
    increment.push(numeri + 1)
})
console.log(increment)


const incremento = numbers.map(numero => numero + 1)
console.log(incremento)