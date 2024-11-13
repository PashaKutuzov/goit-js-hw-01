// const numbes = [3, 5, 2, 8458, 1]
// let sum = 0
// for (let i = 0; i < numbes.length; i++) {
//     sum += numbes[i]
    
// }

// console.log(sum)






// const numbers = [2, 7, 5, 10, 3, 8]
// const min = 5
// let letNumbers = []

// for (const number of numbers) {
//     if (number > min)
//         letNumbers.push(number)
// }
// console.log(letNumbers)





// const numbers = [2, 7, 5, 10, 30, 8]
// let max = numbers[0]

// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] > max){
//         max = numbers[i]
//     }
// }
// console.log(max)





// let numbers = [1, 2, 3, 4, 10]
// let letNumbers = []
// for (let i = 0; i < numbers.length; i++) {
    
//     letNumbers.push(numbers[i] * 2)
// }

// console.log(letNumbers)




// let numbers = [1, 2, 3, 4, 10, 85, 11, 22, 53]

// let newNumber = []
// for (const number of numbers) {
//     if(number % 2 !== 0){
//         newNumber.push(number)
//     }
// }
// console.log(newNumber)




// let numbers = [1, 2, 3, 4, 10, 85, 11, 22, 53]
// let sum = 0

// for (let number of numbers){
//     sum += number
//    sum /= numbers.length

// }
// let fixSum = sum.toFixed(2)
// console.log(fixSum)




// let numbers = [1, 2, 3, 4, 10, 85, 11, 22, 53]
// let newNumber = []
// for (let i = 0; i < numbers.length; i++) {
//    if (numbers[i] % 2 === 0){
//     newNumber.push(numbers[i])
//    }
    
// } 
// console.log(newNumber.length)




// let fruits = ["apple", "banana", "cherry"]

// let upFruits = []

// for (let i = 0; i < fruits.length; i++) {

//     upFruits.push(fruits[i].toUpperCase())
    
// }

// console.log(upFruits)  


// let numbers = [1, 2, 1000, 4, 10, 85, 11, 22, 100]
// let max = numbers[0]
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i]
//     }
    
// }
// console.log(max)


function calculateTotalPrice(productName) {
    const products = [
      { name: "Radar", price: 1300, quantity: 4 },
      { name: "Scanner", price: 2700, quantity: 3 },
      { name: "Droid", price: 400, quantity: 7 },
      { name: "Grip", price: 1200, quantity: 9 },
    ];
  
    for (const product of products) {
      if (product.name === productName) {
        return product.price * product.quantity;
      }
    
  
        }
     
       return `Product ${productName} not found!`
     
     
    
  }
  
  console.log(calculateTotalPrice("Radar"));   // Виведе 5200
console.log(calculateTotalPrice("Scanner")); // Виведе 8100
console.log(calculateTotalPrice("Droid"));   // Виведе 2800
console.log(calculateTotalPrice("Grip"));    // Виведе 10800
console.log(calculateTotalPrice("Unknown"));