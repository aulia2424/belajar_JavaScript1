var num = 1; // initializer
while (num < 11) {
  //condition
  console.log(num);
  num++; //increment
}
// jadi num initializernya tidak di dalam () jadi lebih simple, tapi kondisi / condition berada di dalam () incrementnya juga di tulis setelah di print variablenya.

console.log("\n");

// while loop ketika di addition assignment
var sum = 0;
var numm = 0;
while (numm <= 10) {
  sum += numm;
  numm++;
}
console.log(numm);
console.log("\n");

// jadi num 0-10 jika sum = sum + numm mana numm akan bertambah 1 nilainya
//  0 = 0 + 1 = 1
//  1 = 1 + 1 = 2
//  2 = 2 + 1 = 3.... 10
// ketika hasil >= 10 maka 10 + 1 karena increment dari 10
// hasilnya 11

// while loops in array
var randomStuff = ["apple", 3245, 9999, true, false, undefined, ["apple", "ball", "cat"], 3, 2, "lastobject"];
var x = 0;
while (x < randomStuff.length) {
  console.log(randomStuff[x]);
  x++;
}
//  jadi kita membuat variable randomStuff yang berisi 10 index salah satunya ada array yang berisi 2 index, kemudian buat var x = 0 jadi nantiakan di print dari index ke 0.
//  jika 0 < 10 / lebih kecil dari jumlah panjang index maka print variable randomStuff jadi ini dynamic language otomatis akan berubah mengikuti inputannya, untuk mengakses indexnya maka console.log(randomStruff = inputannya[x = jumlah index])

console.log("\n");

var otherStuff = ["apple", 3245, 9999, true, false, undefined, ["apple", "ball", "cat"], 3, 2, "lastobject"];
var number = otherStuff.length - 1;
while (number >= 0) {
  console.log(otherStuff[number]);
  number--;
  ``;
}

console.log("\n");

var cars = ["lambo", "bmw", "tesla"];
var total = 0;
while (total < cars.length) {
  console.log(cars[total]);
  total++;
}

console.log("\n");

var v = 5;
while (v >= 1) {
  v--;
  console.log(v);
}
