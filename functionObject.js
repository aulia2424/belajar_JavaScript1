var orang = {
  nama: "auliaaa", // ini properti
  alamat: "jonggol",
  kelas: "12 rpl1",
  warnaKesukaan: "hitam",
  tinggiBadan: "149 cm",
  umur: 17,
  beratBdan: 47,
};
console.log(orang.nama);

//  tinggi badan - 100 * 10 : 100
const person3 = {
  berat: 47,
  tinggi: 149,
  bbIdeal: function (berat, tinggi) {
    var d = tinggi - (100 * 10) / 100;
    return d;
  },
};
//sayHaii merupakan function di dalam object dan kita panggil functionnya

var course = { nama: "mengoding", chapter: 200 };
console.log(course.nama.length);

/*
object literal total nilai semester
function di dalam object di sebut method
*/
var siswa = {
  nama: "aulia",
  lulus: "true",
  nilaiSemester: [91, 94, 97],
  nilaiKumulatif: function () {
    var total = 0;
    var pwpb = this.nilaiSemester;
    for (var i = 0; i < pwpb.length; i++) {
      total += pwpb[i];
    }
    return total / pwpb.length;
  },
};
console.log(siswa.nilaiKumulatif());

/*
MEMBUAT OBJECT PADA JS
- object literal
- function declaration
- constructor function (menambahkan keyword new)
- menggunakan sebuah method object.create()
*/

// menggunakan object literal
var kelas = {
  nama: "aul",
  noAbsen: 6,
  jurusan: "rpl",
};
console.log(kelas);

// menggunakan function declaration
function siswa12(nama, noAbsen, jurusan) {
  var murid = {}; //kita bikin object kosong
  murid.nama = nama; // variable murid panggi parameter nama dan mengembalikan nama
  murid.noAbsen = noAbsen;
  murid.jurusan = jurusan;
  return murid;
}
console.log(siswa12("aulia", 6, "rpl"));

// constructor di dalam local scope tidak perlu membuat variable dan return
// jadi kita hanya menambahkan keyword this and new yang fungsinya: this = untuk memanggil parameter, new = untuk membuat object baru yang masuh satu kesatuan dengan object lama
function Siswa(nama, noAbsen, jurusan) {
  this.nama = nama;
  this.noAbsen = noAbsen;
  this.jurusan = jurusan;
}
// jika kita tidk menggunakan new maka program akan membaca menjadi function declaration bukan function constructor
var Siswaa = new Siswa("aulia", 6, "rpl");
console.log(Siswaa);
