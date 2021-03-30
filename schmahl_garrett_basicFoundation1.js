var timeSaver = [1,2,5,6,7,9,15,17,19,22,24,26,28,100,-5,-1,-50,0]

// 1. Get 1 to 255
function count255(){
  let count255Array = []
  for (let i=1; i <=255;i++){
    count255Array.push(i)
  }
  return count255Array
}
console.log(count255()) //confirm

// 2. Get even 1000
function sumEven(x){
  let sum=0
  for(let i=1; i<=x; i++){
    if (i%2 === 0){
      sum+=i
    }
  }
  return sum
}
console.log(sumEven(1000)) //confirm

// 3. Sum odd 5000
function sumOdd(x){
  let sum=0
  for(let i = 1; i<=x; i++){
    if (i%2 === 1){
      sum+=i
    }
  }
  return sum
}
console.log(sumEven(5000)) //confirm

// 4. Iterate an array
function sumArray(x){
  let sum=0
  for(let i = 0; i<x.length; i++){
    sum+=x[i]
  }
  return sum
}
console.log(sumArray(timeSaver)) //confirm

// 5. Find Max
function arrayFindMax(x){
  let max=x[0]
  for(let i = 1; i<x.length; i++){
    if (max < x[i]){
      max = x[i]
    }
  }
  return max
}
console.log(arrayFindMax(timeSaver)) //confirm

// 6. Find Average
function arrayFindAvg(x){
  let avg = sumArray(x)/x.length //see problem 4
  return avg
}
console.log(arrayFindAvg(timeSaver))

// 7. Array Odd
function returnOdds(x){
  let oddsArray=[]
  for(let i = 1; i<=x; i++){
    if (i%2 === 1){
      oddsArray.push(i)
    }
  }
  return oddsArray
}
console.log(returnOdds(50)) //confirm

// 8. Greater than Y
function greaterThanValue(x,y){
  let counter=0
  for(let i = 0; i<x.length; i++){
    if(x[i]>y){
      counter++
    }
  }
  return counter
}
console.log(greaterThanValue(timeSaver, 10)) //confirm


// 9. Squares
function squareArray(x){
  for(let i=0;i<x.length;i++){
    x[i]=Math.pow(x[i],2)  //so apparently ^ is a thing and it isn't "to the power of". Neat.
  }
  return x
}
let timeSaverTwo = timeSaver.slice()  //so apparently, everything is a pointer in javaScript... neat...?
console.log(squareArray(timeSaverTwo)) //confirm


// 10. Negatives
function negativeWithZero(x){
  for(let i=0;i<x.length;i++){
    if (x[i]<0){
      x[i]=0
    }
  }
  return x
}
let timeSaverThree = timeSaver.slice()
console.log(negativeWithZero(timeSaverThree)) //confirm


//11. Max/Min/Avg
function maxMinAvg(x){
  let min=x[0]
  for(let i=0;i<x.length;i++){
    if (x[i]<min){
      x[i]=min
    }
  }
  let statArray = []
  statArray.push(arrayFindMax(x))
  statArray.push(min)
  statArray.push(arrayFindAvg(x))
  return statArray
}
let timeSaverFour = timeSaver.slice()
console.log(maxMinAvg(timeSaverFour))


//12. Swap Values
function swapValues(x){
  let temp = x[0]
  x[0] = x[x.length-1]
  x[x.length-1] = temp
  return x
}
let timeSaverFive = timeSaver.slice()
console.log(swapValues(timeSaverFive)) //confirm


// 13. Number to string
function negativeWithDojo(x){
  for(let i=0;i<x.length;i++){
    if (x[i]<0){
      x[i]="Dojo"
    }
  }
  return x
}
let timeSaverSix = timeSaver.slice()
console.log(negativeWithDojo(timeSaverSix)) //confirm