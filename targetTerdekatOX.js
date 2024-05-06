function targetTerdekat(value) {
    let o = value.indexOf('o');
    let x = value.indexOf('x');
    let spasi = value.length; 
    
    if (o === -1 || x === -1) {
        return 0; 
    }

    while (x !== -1) {
        let jarak = Math.abs(o - x);
        if (jarak < spasi) {
            spasi = jarak;
        }
        x = value.indexOf('x', x + 1);
    }
    return spasi;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
