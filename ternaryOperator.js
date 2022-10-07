/* Ternary Operator
       -ternary operator adalah operator sederhana dari if statement
       - ternary operator terdiri dari kondisi yang dievaluasi, jika menghasilkan true maka nilai pertama diambil, jika false, maka nilai kedua diambil
       - tujuan menggunakan ternary operator yaitu untuk mempermudah di banding kita menggunakan if else
      */
console.log("-Ternary Operator-");
const nilai = 90;
const ucapan = nilai >= 75 ? "Selamat Anda Lulus" : "Silahkan Coba Lagi"; // hanya bisa dua kondisi
console.log(`${ucapan}`);
