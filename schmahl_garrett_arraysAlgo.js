var testArr = [6,3,5,1,2,4]
function printSum(x){
  let sum=0
  for (let i = 0; i < x.length; i++){
    console.log()
    sum+=x[i]
    console.log("Num "+x[i]+", Sum "+sum)
  }
}
printSum(testArr)



function valueByIndex(x){
  for (let i = 0; i < x.length; i++){
    x[i]=x[i]*i
  }
  console.log(x)
}
valueByIndex(testArr)

