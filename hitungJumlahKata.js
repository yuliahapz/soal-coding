function hitungJumlahKata(kata) {
  let count = 0;
  for (let i = 0; i < kata.length; i++) {
    if (kata[i] === " " && kata[i - 1] !== " ") {
      count++;
    }
  }
  return count + 1;
}
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
