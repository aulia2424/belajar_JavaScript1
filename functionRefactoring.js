/*
REFACTORING
merupakan sebuah proses mengubah kode agar menjadi lebih baik tanpa mengubah fungsionalitasnya

- Readability program yang baik adalah program yng mudah di baca dan dipahami oleh orang lain
- DRY (Dont Repeat Yourself)
- Testability
- Performance
- Maintanability dapat dengan mudah di kelola dan dikembangkan
*/

// contoh penjumlahan volume kubus yang tidak efektif
console.log("tidak refactoring");
function volumeKubus(a, b) {
  var volumeA;
  var volumeB;
  var total;

  volumeA = a ** 3;
  volumeB = b ** 3;
  total = volumeA + volumeB;
  return total;
}
console.log(volumeKubus(8, 3));

console.log("\n");

// contoh yang memakai konsep Refactoring jadi lebih efektif dan efisien
console.log("refactoring");
function volumeKubus(sisiA, sisiB) {
  var volumeKubus = sisiA ** 3 + sisiB ** 3;
  return volumeKubus;
}
console.log(volumeKubus(8, 3));
