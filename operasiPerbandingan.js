/*
OPERASI PERBANDINGAN
       - operasi perbandinga adalah operasi untuk membandingkan dua buah data
       - operasi perbandingan adalah operasi yang menghasilkan nilai boolean (true of false)
       - jika hasil operasi adalah benar, maka nilai true
       - jika hasil operasi adalah salah, maka nilai false
       | operator | keterangan                             |
       | >        | lebih dari                             |
       | <        | kurang dari                            |
       | >=       | lebih dari sama dengan                 |
       | <=       | kurang dari sama dengan                |
       | ==       | sama dengan                            |
       | ===      | sama dengan dan sama tipe              |
       | !=       | tidak sama dengan                      |
       | !===     | tidak sama dengan atau tidak sama tipe |
*/
let result = 5 > 10;
console.log(result); //=> lima lebih besar dari 10 = false

result = 5 < 10;
console.log(result); //=> lima kecil besar dari 10 = true

result = 5 >= 10;
console.log(result); //=> lima lebih dari sama dengan 10 = false

result = 5 <= 10;
console.log(result); //=> lima kurang dari sama dengan 10 = true

result = 5 == 10;
console.log(result); //=> lima sama dengan 10 = false

result = 5 === 10;
console.log(result); //=> lima sama dengan dan sama tipe 10 = false

result = 5 != 10;
console.log(result); //=> lima tidak sama dengan 10 = true

result = 5 !== 10;
console.log(result); //=> lima tidak sama dengan dan sama tipe 10 = true
