const { CLIENT_RENEG_LIMIT } = require("node:tls")

let findNumbers =function(nums){
//    loop the array and check if it is less than 10
    let even =0
    for(i=0; i<nums.length; i++){
        
         
    let count = 0
    while(nums[i]>0){
        nums[i] = nums[i]/10
        count ++
    }
    if(count%2 === 0){
        even ++
    }   
    }
     return even
    }

