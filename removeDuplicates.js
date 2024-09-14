const array=[1,2,2,3,3,4,2,5,6,5]
const uniqArr=[]; //inisialisasi array

for(let i=0;i<array.length;i++){ //looping buat array
    if(!uniqArr.includes(array[i])){ //jika array tidak ada di uniqArr
        uniqArr.push(array[i]); //push array ke uniqArr
    }
}
console.log(uniqArr); //print uniqArr
