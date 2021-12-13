

function checkingValue(a, b) {
    // check the length of array
    if (!(a.length === b.length)) {
      return false
    }
    let freqCounter1 = {}
    let freqCounter2 = {}
  
    for (i = 0; i < a.length; i++) {
  
      freqCounter1[a[i]] = (freqCounter1[a[i]] || 0) + 1
  
    }
    for (i = 0; i < b.length; i++) {
  
      freqCounter2[b[i]] = (freqCounter1[b[i]] || 0) + 1
  
    }
    for (let key in freqCounter1) {
      if (!(key ** 2 in freqCounter2)) {
        return false
      }
  
      if (freqCounter1[key] !== freqCounter2[key ** 2]) { return false }
    }
  
  
  
    console.log(freqCounter1)
    console.log(freqCounter2)
  
  
    // if (a.length === b.length) {
    //   console.log("here")
    //   for (i = 0; i < a.length; i++) {
    //     for (j = 0; j < b.lengt; j++) {
    //       if (a[i] ** 2 === b[j]) {
    //         return true;
    //         console.log("working")
    //       } else {
    //         return false;
    //       }
    //     }
    //   }
    // } else {
    //   console.log("false")
    //   return false;
  
  
    // }
  
    // check each element of array
  }
  
  checkingValue([1, 4, 9, 16], [1, 2, 3, 4])
  
  
