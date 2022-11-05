/*
FUNCTION
- blok kode yang dibuat untukmelakukan tugas spesifik
- dapat dipanggil berulang kali
- memudahkan penelusuran
- reusability
*/

// contoh kasus ceritanya saya punya dua buah kubus, kubus a dan b, kita sekarang membuat program untuk menjumlahkan kedua volume kedua buah kubus
// kubus a sisi=8, kubus b sisinya=3
console.log("volume kubus");
function volumeKubus(sisiA, sisiB) {
  var volumeKubus = sisiA ** 3 + sisiB ** 3;
  return volumeKubus;
}
console.log(volumeKubus(8, 3));
console.log(volumeKubus(10, 2));
