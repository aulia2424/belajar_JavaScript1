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
