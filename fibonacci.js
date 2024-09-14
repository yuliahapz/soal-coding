function fibbonacy(num){  // 0 1 1 2 3 5 8
    if (num<=1){  // 0 1
        return num;  // 0
}
return fibbonacy(num-1) +fibbonacy(num-2); // 1 1 2 3 5
}

const fibSeries =[];  // 0 1 1 2 3 5 8
for ( let i=0;i<10; i++){  // 0 1 2 3 4 5 6 7 8 9
    fibSeries.push(fibbonacy(i));  // 0 1 1 2 3 5 8
}

console.log(fibSeries);  // 0 1 1 2 3 5 8 13 21 34
