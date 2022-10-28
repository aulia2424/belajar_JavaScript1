/* Operasi Perbandingan TRUE/FALSE
      fungsinya untuk membandingkan dua buah data.
      Operasi perbandingan adalah operasi yang menghasilkan nilai boolean (benar/salah).
    */

/* Operator Perbandingan
     | Operator | Keterangan                            |
     | >        | Lebih dari                            |
     | <        | Kurang dari                           |
     | >=       | Lebih dari sama dengan                |
     | <=       | Kurang dari sama dengan               |
     | ==       | Sama dengan                           |
     | ===      | Sama dengan dan sama tipe             |
     | !=       | Tidak sama dengan                     |
     | !==      | Tidak sama dengan atau tidak sama tipe|
    */
/*
      1. jadi penjelasannya 5 sama dengan 5 (true)
      2. 5 sama dengan 8 (false) karena berbeda
      3. 5 lebih besar dari 2 (true)
      4. 5 lebih kecil dari 12 (true)
    */
console.log("-Operator Perbandingan-");
let joni = 5 == "5";
console.log(joni);

joni = 5 === "8";
console.log(joni);

joni = 5 > 2;
console.log(joni);

joni = 5 < 12;
console.log(joni);
