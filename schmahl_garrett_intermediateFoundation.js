//Intermediate Foundation

console.log("Intermediate Foundation")

let tsaMaster = [1,3,5,7,10,12,14,16,0, -1, -3, -5, -6, -8, -10, 1.5, 1.3, 1.7777, -1.2]
console.log("master array: "+tsaMaster)

// 1. Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num){
  let sum = 0
  for(let i = 1;i<=num; i++){
    sum+=i
  }
  return sum
}
console.log("problem 1:")
console.log(sigma(3))
console.log(sigma(4))


// 2. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(num){
  let sum = 1
  for(let i = 1;i<=num; i++){
    sum=sum * i
  }
  return sum
}
console.log("problem 2:")
console.log(factorial(3))
console.log(factorial(4))

// 3. Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

function fibonacci(x){
  let fib1 = 0
  let fib2 = 1
  let fib3 = 0
  for(let i = 0; i < x ; i++){
    fib1 = fib2
    fib2 = fib3
    fib3 = fib1+fib2
  }
  return fib3
}
console.log("problem 3:")
console.log("Sequence: 0 1 1 2 3 5 8 13")
console.log("Index 6")
console.log(fibonacci(6)) 
console.log("Index 0")
console.log(fibonacci(0))
console.log("Index 7")
console.log(fibonacci(7))


//4. Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function secondToLast(x){
  if(x.length > 1){
    return x[x.length-2]
  }
  else {
    return null
  }
}
console.log("problem 4:")
console.log(secondToLast(tsaMaster))
console.log(secondToLast([1,2]))

//5. Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function nToLast(x,n){
  if(x.length > (n-1)){
    return x[x.length-n]
  }
  else {
    return null
  }
}
console.log("problem 5:")
console.log(tsaMaster)
console.log(nToLast(tsaMaster, 3))
console.log(nToLast([1,2,3],4))
console.log(nToLast([1,2],2))

//6. Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function secondLargest(x){
  if(x.length > 1){
    let largest = x[0]
    let secondLargest = x[0]
    for(let i = 1; i < x.length ; i++){
      if (largest < x[i]){
        secondLargest = largest
        largest = x[i]
      }
    }
    return secondLargest
  }
  else {
    return null
  }
}
console.log("problem 6:")
console.log(secondLargest(tsaMaster))
console.log(secondLargest([1,2]))

// 7. Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function doubleTrouble(x){
  tempArray = []
  for( let i = 0; i< x.length; i++){
    for(let j = 0; j < 2; j++){
      tempArray.push(x[i])
    }
  }
  x = tempArray
  return x
}
let tsa2 = tsaMaster.slice()
console.log("problem 7:")
console.log("og")
console.log(tsa2)
console.log(doubleTrouble(tsa2))