function checkingDigits(a, b) {
    if (a > b) {
      if (a / b < 2) {
        return true
      }
      else {
        return false
      }
    }
    else if (b > a) {
      if (b / a < 2) {
        return true
      }
      else {
        return false
      }
  
  
  
    }
    else {
      return true
    }
  
  }
  checkingDigits(3589578, 5879385)
  checkingDigits(22, 222)