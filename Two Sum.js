// DAY1 : TWO SUM 


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for (p1=0 ; p1<= nums.length ; p1++){
//         const numToFind =  target - nums[p1];
//         for(p2=p1+1 ; p2<nums.length; p2++){
//             if(numToFind === nums[p2]){
//                 return[p1,p2];
//             }
//         }
//     }
//     return null;
// };
var twoSum = function(nums, target) {
    
      const numsMap = {};
      //Create an empty hash map to store numbers and their indices

        //Loop through every number in the array
      for(p=0 ;p<nums.length ;p++){

        let currentMapValue = numsMap[nums[p]];
         // Retrieve the index of the complement if it exists in the hash map, it will return undefined if it does not exist.


        if (currentMapValue >=0){
            return [currentMapValue,p]
        }
        else{
            let numberToFind = target - nums[p];
            //store the current number to find and its index as key:value pair.
            numsMap[numberToFind] = p
        }
      }
    
    return null;
};

let a=[1,2,5,7,9,2]
let t=11
twoSum(a,t)