// Fungsi untuk menghitung kedalaman maksimum pohon biner
function maxDepth(tree) {
    // Jika pohon atau node-nya null, maka kedalamannya adalah 0
    if (tree === null) return 0;

    // Rekursif: hitung kedalaman dari anak kiri dan kanan
    const leftDepth = maxDepth(tree.left);
    const rightDepth = maxDepth(tree.right);

    // Kedalaman maksimum adalah kedalaman anak terbesar ditambah 1 (simpul saat ini)
    return Math.max(leftDepth, rightDepth) + 1;
}

// Contoh penggunaan
const tree = {
    value: 1,
    left: {
        value: 2,
        left: null,
        right: null
    },
    right: {
        value: 3,
        left: null,
        right: {
            value: 4,
            left: null,
            right: null
        }
    }
};

// Memanggil fungsi maxDepth dan mengembalikan hasil
const result = maxDepth(tree);
console.log(result);
return result;  // Output: 3

