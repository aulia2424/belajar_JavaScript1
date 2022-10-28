/* Ternary Operator
       -ternary operator adalah operator sederhana dari if statement
       - ternary operator terdiri dari kondisi yang dievaluasi, jika menghasilkan true maka nilai pertama diambil, jika false, maka nilai kedua diambil
       - tujuan menggunakan ternary operator yaitu untuk mempermudah di banding kita menggunakan if else
      */
console.log("-Ternary Operator-");
const nilai = 90;
const ucapan = nilai >= 75 ? "Selamat Anda Lulus" : "Silahkan Coba Lagi"; // hanya bisa dua kondisi
console.log(`${ucapan}`);

console.log("\n");

// cara 3 menggunakan ternary operator
var pilihan = 8;
console.log(pilihan == 1 ? "light" : pilihan == 2 ? "dark" : pilihan == 3 ? "nocture" : pilihan == 4 ? "terminal" : "indigo");
