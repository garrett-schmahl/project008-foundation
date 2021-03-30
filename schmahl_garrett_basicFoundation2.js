// Basic Foundation 2

console.log("Basic Foundation 2")

let tsa = [1,3,5,7,10,12,14,16,0, -1, -3, -5, -6, -8, -10]
console.log("master array: "+tsa)

// 1. Biggie Size
//Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function positiveBig(x){
  for(let i = 0; i<x.length; i++){
    if (x[i] > 0){
      x[i]="big"
    }
  }
  return x
}
let tsa2 = tsa.slice()
console.log("problem 1:")
console.log(positiveBig(tsa2))

//2. Print Low, Return High
// Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(x){
  let lowNum = x[0]
  let highNum = x[0]
  for(let i = 0; i<x.length; i++){
    if (x[i] > 0){
      highNum = x[i]
    }
    else if (x[i] < 0){
      lowNum = x[i]
    }
  }
  console.log(lowNum)
  return highNum
}
console.log("problem 2:")
console.log(printLowReturnHigh(tsa))

// 3. Print One, Return Another
// Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function printSecondToLastReturnFirstOdd(x){
  console.log(x[x.length-2])
  for (let i=0; i<x.length; i++){
    if (x[i]%2 === 1){
      return x[i]
    }
  }
  return "no odds"
}
console.log("problem 3:")
console.log(printSecondToLastReturnFirstOdd(tsa))

// 4. Double Vision
// Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleArray(x){
  let newArray=[]
  for (let i=0; i<x.length; i++){
    newArray[i]=x[i]*2
  }
  return newArray
}

tsa2 = tsa.slice() //resetting tsa2
console.log("problem 4:")
console.log(doubleArray(tsa2))
console.log("confirm og:")
console.log(tsa2) //confirming og integrity

// 5. Count Positives
//Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPositives(x){
  let counter = 0
  for (let i=0; i<x.length; i++){
    if ( x[i]%2 === 0){
      counter++
    }
  }
  x[x.length-1] = counter
  return x
}

tsa2 = tsa.slice()
console.log("problem 5:")
console.log(countPositives(tsa2))
console.log("confirm og overwrite:")
console.log(tsa2) //confirming og overwrite


// 6. Evens and Odds
//Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function tripleEvenTripleOdd(x){ 
  for (let i=2; i<x.length; i++){
    if(x[i]%2 === 1 && x[i-1]%2 === 1 && x[i-2]%2 === 1){
      console.log("That's odd!")
      i=i+3
    }
    else if(x[i]%2 === 0 && x[i-1]%2 === 0 && x[i-2]%2 === 0){
      console.log("Even more so!")
      i=i+3
    }
  }
}
console.log("problem 6:")
tsa2 = tsa.slice()
tripleEvenTripleOdd(tsa2)

// 7. Increment the Seconds
//Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function incrementOddIndex(arr){
  for (let i=0; i<arr.length; i++){
    if (i%2 === 1){
      arr[i]++
    }
    console.log(arr[i])
  }
  return arr
}
tsa2 = tsa.slice()
console.log("problem 7:")
console.log(incrementOddIndex(tsa2))

// 8. Previous Lengths
//Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]

let wordArray=["hello", "dojo", "awesome", "carry on", "punctuation!"]

function previousStringLength(x){
  for(i=x.length; i > 0; i--){
    x[i]=x[i-1].length
  }
  return x
}
console.log("problem 8:")
console.log(previousStringLength(wordArray))

// 9. Add Seven
//Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSevenArray(x){
  let plusSevenArray = []
  for (let i=0; i<x.length; i++){
    plusSevenArray[i]=x[i]+7
  }
  return plusSevenArray
}
tsa2 = tsa.slice()
console.log("problem 9:")
console.log(addSevenArray(tsa2))
console.log(tsa2) //confirming og integrity

// 10. Reverse Array
//Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArray(x){
  for(let i=0; i < x.length-i; i++){
    let passVal = x[i]
    x[i] = x[x.length-(i+1)]
    x[x.length-(i+1)] = passVal
  }
  return x
}

tsa2 = tsa.slice()
console.log("problem 10:")
console.log("confirm og:")
console.log(tsa2)
console.log("case 1 odd number of values:")
console.log(reverseArray(tsa2))
console.log("confirm og overwrite:")
console.log(tsa2) //confirming og overwrite
tsa2 = tsa.slice()
tsa2.pop()
console.log("case 2 even number of values:")
console.log(reverseArray(tsa2))
console.log("confirm og overwrite:")
console.log(tsa2) //confirming og overwrite

// 11. Outlook Negative
//Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function outlookNegative(x){
  let negativeArray = []
  for (let i=0; i < x.length; i++){
    if (x[i]>0){
      negativeArray[i]= x[i]*-1
    }
    else{
      negativeArray[i] = x[i]
    }
  }
  return negativeArray
}

tsa2 = tsa.slice()
console.log("problem 11:")
console.log(outlookNegative(tsa2))
console.log(tsa2) //confirming og integrity

//12. Always Hungry
//Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once. 
// wtf who wrote this massive step down dumb-ass question
let foodArray = ["food", 1, 2, 4, "automobile", false, "food"]
let foodArray2= ["notFood", "tickle me elmo", 3, 4, 5, "desk"]

function eatFood(x){
  let check = 0
  for (let i=0; i < x.length; i++){
    if(x[i] === "food"){
      console.log("yummy")
      check = 1
    }
  }
  if (check != 1){
    console.log("I'm hungry")
  }
}

console.log('"problem" 11:')
console.log('Case 1 has food:')
eatFood(foodArray)
console.log('Case 2 no food:')
eatFood(foodArray2)

// 13. Swap Toward the Center
//Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

//seriously wtf who did this one and 12? Assuming that we need to preserve both arrays for sanity.

function createReversedArray(x){
  let swapArray = []
  for(i=0; i<x.length; i++){
    swapArray[i] = x[x.length-(i+1)]
  }
return swapArray
}

tsa2 = tsa.slice()
console.log("problem 13:")
console.log(tsa2)
console.log(createReversedArray(tsa2))
console.log(tsa2) //confirming og integrity

// 14. Scale the Array
// Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scaleArray(arr,num){
  for(i=0; i<arr.length; i++){
    arr[i]=arr[i]*num
  }
  return arr
}

tsa2 = tsa.slice()
console.log("problem 14:")
console.log("confirm og:")
console.log(tsa2)
let scaleVal=3
console.log("scale "+scaleVal)
console.log(scaleArray(tsa2, scaleVal))
tsa2 = tsa.slice()
scaleVal=5
console.log("scale "+scaleVal)
console.log(scaleArray(tsa2, scaleVal))
console.log("confirm overwrite:")
console.log(tsa2) //confirming og overwrite