function generatePyramid(num) {
    let result="";
    
    for (let i = 0; i <= num; i++){
        for (let j = 1; j <= i; j++){
            result += j;
            
            if (j!==0 ) {
            result += " ";
            }
        }
        if (i !== num) {
            result +="\n";
        }
    }
    return result;
}

console.log(generatePyramid(5))
console.log(generatePyramid(3))