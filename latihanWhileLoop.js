// whileLoop Decreement kondisi dulu bari di print jadi lebih aman
console.log("whileLoop Decreement");
var a = 5; // => ini initializer
while (a >= 0) {
  console.log(a);
  a--; //=> ini decreement
}

console.log("\n");

// whileLoop Increement
console.log("whileLoop Increement");
var b = 1;
while (b <= 10) {
  console.log(b);
  b++; //=> ini increement
}

console.log("\n");

// DoWhile aka di print dahulu sebelum diberi kondisi jadi nyebur duluansebelum di bilangin
console.log("do while increement");
var c = 1;
do {
  console.log(c);
  c++;
} while (c <= 10);

console.log("\n");

console.log("do while decreement");
var d = 10;
do {
  console.log(d);
  d--;
} while (d >= 1);
