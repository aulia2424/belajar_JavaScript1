/*
======ASSOCIATIBE ARRAY=====
- dibahasa pemrogramman lain seperti php, kita bisa menggunakan index berupa tipe data lain selain number, misal string
- fitur ini biasanya disenut associative array atau hash
- di js associative array tidak didukung
- jika kita memaksa memasukkan menjadi object, dan ini bisa berbahaya, karena beberapa operasi di array mungkin bisa berubah hasilnya

======TIPE DATA OBJECT=====
- tipe data bject adalah tipe data yang mirip dengan tipe data array
- yang membedakan adalah index pada tie data object bisa menggunakan string
- index di object biasanya di sebut attributes atau properties, bukan index
*/

// membuat object kosong
const orang = {};

// mengubah property di object
orang["nama"] = "aulia martha slebew";
orang["kelas"] = "12 rpl1";
orang["moto"] = "slebew";

// menghapus
delete orang["moto"]; // => menghapus colums moto
console.table(orang);

// kode : membuat object dengan properties
const orangSatu = {
  nama: "auliaaa",
  alamat: "jonggol",
  kelas: "12 rpl1",
};
console.table(orangSatu);

// kode mengakses property object
const orangDua = {
  nama: "auliaaa",
  alamat: "jonggol",
  kelas: "12 rpl1",
};
console.log(`nama : ${orangDua.nama}`);
console.log(`alamat : ${orangDua.alamat}`);
console.log(`kelas : ${orangDua.kelas}`);
