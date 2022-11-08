/*
penggunaan this untuk memilih apa yang ingin kita pakai misal this.name
 this menunjukan object yang sedang di pilih
 kalo di php memakai tanda panah (=>)
*/
// this
function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
  this.changeName = function changeName(name) {
    this.name = name;
    return name;
  };
  this.changeAge = function changeAge(age) {
    this.age = age;
    return age;
  };
  this.changeFavColor = function changeFavColor(color) {
    this.favColor = color;
    return color;
  };
}

// new instace of object biasanya memakai new, biasanya juga untuk memakai object baru
// kenapa memakai new? karena kita mendefinisikan person menjadi object
var p1 = new person("Jhon", 37, "red");
var p2 = new person("Jordi", 27, "pink");
p1.changeName("aul");
p1.changeAge(17);
p1.changeFavColor("black");

console.log(p1.name);
console.log(p1.age);
console.log(p1.favColor);

console.log("\n");

// tugas pa asep
function kopiMix(gula, kopi, cream) {
  this.gula = gula;
  this.kopi = kopi;
  this.cream = cream;
}
var kopiSaya = new kopiMix("banyak", "sedikit", "banyak");
var kopiKamu = new kopiMix("sedikit", "banyak", "sedikit");
console.log("Kopi Saya gulanya : " + kopiSaya.gula);
console.log("Kopi Kamu gulanya : " + kopiKamu.gula);

console.log("\n");
function bilangan(x, y) {
  this.x = x;
  this.y = y;
  this.jumlah = function jumlah(x, y) {
    var c = x + y;
    return c;
  };
}
var b = new bilangan(3, 1);
var a = b.jumlah(b.x, b.y);
console.log(a);

// abis lulus mau ikut bootcamp
// jobstreet, kalibr, glassdoor, karir.com,
