/*
  Melakukan filter angka: hanya menampilkan angka yang diminta

  Gunakan looping "for", tidak boleh menggunakan method "javascript filter"
*/
const filterData = (arr, searchValue) => {
  let hasil = [];
  // tulis code disini
  for (let i = 0; i < arr.length; i++) {
if (arr[i]=== searchValue){
  hasil.push(arr[i]);
}
}
return hasil;
}
let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(filterData(data_array, 5));  // output: [ 5, 5, 5, 5, 5, 5 ] (ada 6 kali)