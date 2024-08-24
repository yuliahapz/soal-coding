function konversiMenit(angka) {
  const jam = Math.floor(angka / 60);
  const menit = angka % 60;

  let hasil = "";

  if (jam > 0) {
    hasil += jam + ":";
  } else {
    hasil += "0:";
  }

  if (menit < 10) {
    hasil += "0" + menit;
  } else {
    hasil += menit;
  }
  return hasil;
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
