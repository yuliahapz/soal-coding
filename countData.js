const countData = (arr, searchValue) => {
  let hasil = {};

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    for (let j = 0; j < searchValue.length; j++) {
      if (value === searchValue[j]) {
        if (hasil[value]) {
          hasil[value]++;
        } else {
          hasil[value] = 1;
        }
      }
    }
  }

  return hasil;
};

let data_array = [
  1, 2, 4, 7, 3, 1, 5, 7, 8, 5, 9, 1, 3, 6, 2, 6, 5, 5, 5, 5, 1,
];
console.log(countData(data_array, [1, 5, 100])); // output: { '1': 4, '5': 6 }  (satu ada 4 & lima ada 6)
