/* FUNCTION
function memiliki fungsi untuk mempermudah dalam memanggil program
function adalah fungsi yang dimana ketika kita ingin memanggil output maka yang kita panggil functionnya
function adalah kunci utama yang ada di js yang menjadi js sangat powerfull
function adalah sub program yang dapat di panggil di bagianlain pada program
js merupakan struktur dasar pembentuk dari js
disebut juga sebagai prosedur (kumpulan statement untuk melakukan tugas atau menghitung sebuah nilai)
untuk menggunakannya kita harus membuat terlebih dahulu function tersebut, lalu memanggilnya
termasuk ke dalam first-class obect

KENAPA SIH KITA HARUS MEMAKAI FUNCTION
- karena reusble (DRY: do not repeat yourself)
- untuk menyembungikan komplexitas (dengan di sembunyikan akan mempermudah mencari letak kesalahan program yang kita buat)

KATEGORI FUNCTION
- built-in function (function yang dibuat oleh program)
- user define function (function yang kita buat sendiri)

built-in function
fungsi yang telah disediakan "dibuat oleh js"
kita tinggal memanggilnya saja
contoh :
alert()
prompt()
confirm()

built-in function kalo bentuknya math
maka akn menghasilkan bilangan random dari 0-1
var bil = Math.random();
console.log(bil);

user define function 
(function yang kita buat sendiri)
menggunakan keyword function
nama function optional
parameter / argument
 disimpan di dalam ()
 parameter boleh 0 boleh lebih dari 1
 jika lebih dari satu pisahkan parameter dengan ,
 function bode di bungkus dengan {}
 dapat mengembalikan nilai (return value)


PARAMETER
variable yang di tulis di dalam kurung pada saat function dibuat, digunakan untuk menampung nilai yang dikirimkan saat function di panggil.

ARGUMENT
adalah nilai yang dikirimkan ke parameter saat fungsi di panggil

ini yang simple
function tambah(a, b) ini parameternya { 
  return a + b;
}
console.log(tambah(5, 10)); ini argumennya

ini aga rumit
function tambah(a, b) {
        return a + b;
}
      var a = parseInt(prompt("Pertambahan. masukkan nilai 1 : "));
      var b = parseInt(prompt("masukkan nilai 2 : "));
      var hasil = tambah(a, b);
      alert("hasil pertambahan = " + hasil);

ini mudah cuma logikanya aga rumit
function tambah(a, b) {
  return a + b;
}
function kali(a, b) {
  return a * b;
}
var hasil = kali(tambah(1, 2), tambah(8, 9));
console.log(hasil);

ini fungsinya untuk mempermudah ketika argumentnya bertambah jadi parameternya tidak usah kita tambahkan
function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    // variable i jika lebih kecil dari pada panjangnya argument maka akan di increment
    hasil += arguments[1]; // hasil akan di tambah dengan argument yang indexnya i
  }
  return hasil; // akan merespon hasil
}
var coba = tambah(1, 2, 3, 4, 5);
console.log(coba);
*/

function catGreeter() {
  console.log("hei cat you're a fine animal!");
  console.log("meowwww");
}
// run, call, invoke, execute
catGreeter();

// kenapa kita pake variable karena agar kita bias memakai berulang kali

function aul() {
  console.log("aulia keren");
}
aul();

function lia(name) {
  //=> perameter
  console.log("hey " + name + " kamu sangat brilliant!");
}
lia();

// array di function
function printerArray(manggo) {
  for (var i = 0; i <= manggo.length; i++) console.log(manggo[i]);
}
printerArray(["kucing", "kelinci", "rubah", "aulia"]);

function adder(num1, num2) {
  return num1 + num2;
}

var result = adder(2, 4) + 2;
console.log("The result is : " + result);

function score(team1, team2) {
  if (team1 >= 1) {
    console.log;
  }
}

// method adalah sebuah function
function makan(status, food) {
  this.status = status;
  this.food = food;
  this.changeStatus = function (status) {
    this.status = status;
  };
}
var p1 = new makan("berdoa", "mie");
p1.changeStatus("selesai");
console.log(p1.status + " makan " + p1.food);
