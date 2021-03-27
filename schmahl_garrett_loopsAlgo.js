function printOdd(){
  for(let i=0; i<20;i++){
    if(i%2 === 1){
      console.log(i)
    }
  }
}
printOdd()

function numSum(){
  let sum=0
  for(let i=1; i<=5;i++){
    console.log("Num: "+i)
    sum+=i
    console.log("Sum: "+sum)
  }
}
numSum()