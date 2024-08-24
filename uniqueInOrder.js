function uniqueInOrder (iteration) {
    let result = [];

    for (let i  =0; i<iteration.length;i++){
        if (iteration[i] !== iteration [i-1]){
            result.push(iteration[i])
        }
    }
    return result;
}
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));

    