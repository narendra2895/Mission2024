var mergeAlternately = function(word1, word2) {
    let result = "";
    let maxLength = Math.max(word1.length,word2.length);
    for(p1=0; p1<maxLength ;p1++){
        let letter1 = word1[p1] !==undefined ? word1[p1] : "" ;
        let letter2 = word2[p1] !==undefined ? word2[p1] : "";
        result = result + letter1 +letter2;
                   
    }
return(result)
};

let a = 'lv t';
let b = 'oei';
console.log(mergeAlternately(a,b));
