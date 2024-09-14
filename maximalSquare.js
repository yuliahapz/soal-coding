function maximalSquare (matrix){   // maximal square
    if (matrix.length === 0|| matrix[0].length === 0)   //mengembalikan 0
    return 0;

const rows = matrix.length;
const cols = matrix[0].length; //mengembalikan 
const dp = Array(rows).fill(null).map(() => Array(cols).fill(0));   //DP tabel
let  maxsquareLength =0;  //variabel untuk panjang sisi terbesar persegi

//iterasi matrix untuk isi tabel DP
for (let i=0; i<rows;i++){
    for (let j=0; j<cols;j++){
        if(matrix[i][j]=== '1'){
            if (i===0||j===0){  //Jika di baris atau kolom pertama, persegi terbesarnya 1
                dp[i][j]=1;
            }
            else  //jika tidak, hitung ukuran persegi menggunakan rumus DP
            {
                dp[i][j] = Math.min(dp[i-1][j],
                    dp[i][j-1],dp[i-1][j-1])+ 1;
                }
                //Perbarui panjang persegi terbesar yang ditemukan
                maxsquareLength=Math.max(maxsquareLength,dp[i][j]);
            }
        }
}   //luas persegi terbesar adalah kuadrat di panjang sisinya
    return maxsquareLength*maxsquareLength;
}

const matrix = [  //array biner 2D
    ['1','0','1','0','0'],
    ['1','0','1','1','1'],
    ['1','1','1','1','1'],
    ['1','0','0','1','0']
];
console.log(maximalSquare(matrix)); //Output persegi terbesar adalah 2x2 sehingga luasnya 2^2=4
