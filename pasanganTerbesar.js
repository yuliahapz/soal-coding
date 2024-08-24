function pasanganTerbesar(angka) {
    let pasangan = 0;
    let digitSebelum = angka % 10;
    angka = Math.floor(angka / 10);

    while (angka > 0) {
        let digit = angka % 10;
        let skrPasangan = digit * 10 + digitSebelum;

        if (skrPasangan> pasangan) {
            pasangan = skrPasangan;
        }
        digitSebelum = digit;
        angka = Math.floor(angka / 10);
    }
    return pasangan;
}
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
