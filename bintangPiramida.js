function buildPyramid (n){
    let pyramid=[];

    for (let i=1;i<=n;i++){
        let space=''.repeat(n-i);
        let star='*'.repeat(2*i-1);
        pyramid.push (space+star+space);
    }
    return pyramid.join('\n');
}

console.log(buildPyramid(5));
console.log(buildPyramid(7));
console.log(buildPyramid(9));

