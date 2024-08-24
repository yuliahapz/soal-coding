function setRupiah(nominal) {
  let rupiah = "Rp ";
  let nom = "";
  let hitung = 0;

  while (nominal > 0) {
    let digit = nominal % 10;
    nom = digit + nom;
    hitung++;

    if (hitung % 3 === 0 && nominal >= 10) {
      nom = "." + nom;
    }
    nominal = Math.floor(nominal / 10);
  }
  rupiah += nom;
  return rupiah;
}
// TEST CASES
console.log(setRupiah(12345)); // Rp 12.345
console.log(setRupiah(100000)); // Rp. 100.000
console.log(setRupiah(150)); // Rp150
console.log(setRupiah(120500000)); // Rp 120.500.000
console.log(setRupiah(5478300)); // Rp 5.478.300
