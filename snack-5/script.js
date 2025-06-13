const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]
const numPari = []
nums.forEach((numeri)=>{
    if (numeri % 2 === 0){
        numPari.push(numeri)
    }
})

const pari = nums.filter(numero => numero % 2 === 0)
console.log(pari)
console.log(numPari)