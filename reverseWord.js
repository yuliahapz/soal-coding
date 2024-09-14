function reverseWord(word) { //reverse word
    let reverseWord = ' '; //inisialisasi
    for (let i=word.length - 1; i>=0; i--){ //looping
        reverseWord += word[i]; //tambahkan
    }
    return reverseWord; //kembalikan
}

const input = "hello world"; //input
const words =input.split(' '); //split
let reverseSentence=' ';  //inisialisasi

for (let i=0;i<words.length;i++) {   //looping
    reverseSentence += reverseWord(words[i])+" "; //tambahkan
}
console.log(reverseWord(input)); //kembalikan
console.log(reverseSentence.trim())//kembalikan
