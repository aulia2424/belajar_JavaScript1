// lesson  37
// core object adalah inti dari object
var courses = new Array("menjahit", "berenang", "memasak");
courses[1] = "menyanyi"; // untuk merubah data di dalam array
console.log(courses[1]);

// lessons 38
/*
ini lebih ribet
var courses1 = new Array(); // 3 = isis dari data Array, array bisa tidak di isi argument
coueses1[0] = "menjahit";
coueses1[1] = "berenang";
coueses1[2] = "memasak";
coueses1[3] = "menyanyi";
*/

// array literal lebih simple
// var coueses1 = ["menjahit", "berenang", "memasak"];

// lesson 39
// var menu = ["mie ayam", "bakso", "kwetiaw"];
// console.log(menu.length);

// concat() adalah sebuah method yang bisa dipakai untuk menggabungkan duabuah array
var coueses1 = ["menjahit", "berenang", "memasak"];
var menu = ["mie ayam", "bakso", "kwetiaw"];
var concatArray = courses.concat(menu);
console.log(concatArray);

// function reduce adalah salah satu function di js yang dimana dia memanggil sebuah array untuk digunakan berkali kali
// reduce hanya unutk array, fungsinya untuk menambahkan data di array
// reduce seperti segitiga penjumlahannya

var person = (name = "jhony");
age = 46;

var person = [];
var a = (person["name"] = "jhony");
var b = (person["age"] = 46);
console.log(a);
console.log(b);
console.log(person["name"]);
console.log(person["age"]);

// lesson 41
// math object PI
console.log(Math.PI);
// ceil(x)  membulatkan ke atas
// floor(x) membulatkan ke bawah
// pw(x) untuk pangkat
// sqrt() akar pangkat

console.log(Math.sqrt(81));

// var random = Math.ceil(Math.random() * 10);
var random = Math.floor(Math.random() * 10);
console.log(random);

var year = 2005;
console.log(calcCent(year));

function calcCent(year) {
  return Math.ceil(year / 100);
}
