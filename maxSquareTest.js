// Maximal Square

// Petunjuk
// Diberikan papan 2D yang berisi angka '0' dan '1', temukan kotak terbesar yang hanya berisi angka '1' dan kembalikan luasnya.

// Contoh:
// maximalSquare([
//  ['1','0','1','0','0'],
//  ['1','0','1','1','1'],
//  ['1','1','1','1','1'],
//  ['1','0','0','1','0']
// ]) === 4

// Deskripsi Fungsi:
// Fungsi maximalSquare menerima papan 2D dan mengembalikan area persegi terbesar yang hanya berisi angka '1'.

// Format Input:
// Larik karakter 2D, di mana setiap elemennya adalah '0' atau '1'.

// Batasan:
// Kisi dapat memiliki paling banyak 1000 baris dan 1000 kolom.

// Format Output:
// Fungsi maximalSquare mengembalikan sebuah bilangan bulat yang mewakili area kotak terbesar yang hanya berisi angka '1'.

// Contoh Input:
// maximalSquare([
//  ['1','0','1','0','0'],
//  ['1','0','1','1','1'],
//  ['1','1','1','1','1'],
//  ['1','0','0','1','0']
// ]);

// Output yang diharapkan: 

// 4


function maximalSquare(grid) {
    // Jika grid kosong atau baris pertama grid kosong, kembalikan 0 (tidak ada persegi).
    if (grid.length === 0 || grid[0].length === 0)
        return 0;

    // Mendapatkan jumlah baris dan kolom dari grid.
    const rows = grid.length;
    const cols = grid[0].length;

    // Inisialisasi matriks dp (dynamic programming) dengan dimensi yang sama seperti grid.
    // Setiap elemen di dp diinisialisasi dengan nilai 0.
    const dp = Array(rows).fill(null).map(() =>
        Array(cols).fill(0));

    // Variabel untuk menyimpan ukuran sisi persegi terbesar yang ditemukan.
    let maxBiggestSquare = 0;

    // Loop untuk setiap elemen dalam grid.
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Jika elemen di grid adalah '1', maka kita cek ukurannya.
            if (grid[i][j] === '1') {
                // Jika elemen berada di tepi grid (baris pertama atau kolom pertama),
                // maka persegi maksimal di titik tersebut hanya bisa berukuran 1.
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } 
                else {
                    // Jika elemen bukan di tepi, kita cari ukuran persegi terbesar
                    // dengan melihat tiga elemen sebelumnya (atas, kiri, dan diagonal kiri atas).
                    dp[i][j] = Math.min(
                        dp[i-1][j],     // elemen di atas
                        dp[i][j-1],     // elemen di kiri
                        dp[i-1][j-1]    // elemen di diagonal kiri atas
                    ) + 1;
                }

                // Perbarui ukuran sisi persegi terbesar yang ditemukan.
                maxBiggestSquare = Math.max(maxBiggestSquare, dp[i][j]);
            }
        }
    }

    // Mengembalikan luas dari persegi terbesar (panjang sisi kuadrat).
    return maxBiggestSquare * maxBiggestSquare;
}

// Contoh grid input.
const grid = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
];

// Panggil fungsi maximalSquare untuk menemukan luas persegi terbesar.
const matrix = maximalSquare(grid);

// Cetak hasil luas persegi terbesar.
console.log(matrix);

// Kembalikan hasil luas persegi terbesar.
return matrix;
