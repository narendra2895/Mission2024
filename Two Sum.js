// DAY1 : TWO SUM 


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (p1=0 ; p1<= nums.length ; p1++){
        const numToFind =  target - nums[p1];
        for(p2=p1+1 ; p2<nums.length; p2++){
            if(numToFind === nums[p2]){
                return[p1,p2];
            }
        }
    }
    return null;
};