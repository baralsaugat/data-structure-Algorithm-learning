function checkingSumZero(arr) {
    let first = 0
    let last = arr.length-1
    while(last>first){
      let sum = arr[first] + arr[last]
      if(sum===0){
        return [arr[first], arr[last]]
      }
      else if(sum>0){
        last--
      }
      else{
        first++
      }
    }
   
  
  }
  checkingSumZero([-2,-1,0,1,2])