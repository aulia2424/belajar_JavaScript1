/*
======ASSOCIATIBE ARRAY=====
- dibahasa pemrogramman lain seperti php, kita bisa menggunakan index berupa tipe data lain selain number, misal string
- fitur ini biasanya disenut associative array atau hash
- di js associative array tidak didukung
- jika kita memaksa memasukkan menjadi object, dan ini bisa berbahaya, karena beberapa operasi di array mungkin bisa berubah hasilnya

======TIPE DATA OBJECT=====
- tipe data object adalah tipe data yang mirip dengan tipe data array
- yang membedakan adalah index pada tipe data object bisa menggunakan string
- index di object biasanya di sebut attributes atau properties, bukan index
- fungsi object untuk menampilkan properti yang berisi value agar lebih efisien
- parameter di object bole sama

daftar dari nilai nilia yang dipisahkan dengan colons :


*/

// membuat object kosong
const orang = {
  //=> objectnya
  nama: "auliaaa", // ini properti
  alamat: "jonggol",
  kelas: "12 rpl1",
};

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

/*
object selalu di awali dan di akhiri dengan kurung kurawal (curly bracked{})
di dalam object terdapat property dan value property yang dimana dipisah oleh colons (:)
kemudian jika property lebih dari dua beri koma (,)
ketika ingin memanggil property di object pakai (.) atau array associative
function di dalam object di sebut method
untukmenghitung jumlah data dan karakter kita bisa memakai lenght
method itu property yang d dalamnya terdapat function di object

contoh menggunakan (.)
const orangDua = {
  nama: "auliaaa",
  alamat: "jonggol",
  kelas: "12 rpl1",
};
console.log(orangDua.nama)

contoh menggunakan array associative
const orangTiga = {
  nama: "auliaaa",
  alamat: "jonggol",
  kelas: "12 rpl1",
};
console.log(orangTiga["nama"]);
*/
const orangTiga = {
  nama: "auliaaa",
  alamat: "jonggol",
  kelas: "12 rpl1",
};
console.log(orangDua.nama);
