/*
=====ELSE IF EXPRESSION=====
- kadang dalam if, kita butuh membuat beberapa kondisi
- kasus seperti ini, di js kita bisa menggunakan else is expression
*/
const examValue = 90;
if (examValue > 80) {
  console.log("anda lulus nilai anda : A"); // jika nilai lebih besar dari 80 maka anda lulus
} else if (examValue > 60) {
  // jika nilai lebih besar dari 60 maka not bad
  // else if berfungsi jika kita memiliki pilihan lebih dari dua atau memiliki dua pilihan
  console.log("not bad nilai anda : B");
} else {
  // else sebagai penutup
  console.log("maaf coba lagi nilai anda : C"); // jika di bawah 60 maka maaf coba lagi
}
