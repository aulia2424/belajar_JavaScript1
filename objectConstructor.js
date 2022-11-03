/*
penggunaan this untuk memilih apa yang ingin kita pakai misal this.name
 this menunjukan object yang sedang di pilih
 kalo di php memakai tanda panah =>
*/
// this
function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
}

// new instace of object biasanya memakai new, biasanya juga untuk memakai object baru
// kenapa memakai new? karena kita mendefinisikan person menjadi object
var p1 = new person("Jhon", 37, "red");
var p2 = new person("Jordi", 27, "pink");
console.log(p1.name + " dan " + p2.name + " menyukai warna " + p1.favColor);
