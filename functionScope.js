/*
SCOPE 
scope adalah bagaimana ssebuah variable dapat diakses dalam program
di dalam bahasa pemrograman ada dua jenis scope
1. block scope dugunakan oleh bahasa pemrograman C dan Java
ini menggunakan bahasa C
int i = 2;
if (i % 2 == 0) { buka block scope
    bool genap = true
}ini tutup block scope

if (genap) {
    printf("genap")
}
kenapa tida bisa di deklarasikan? karena berada di beda scope 

2. function scope berada di js
var a = 1 => global scope

function test() {
  var b = 2;
  console.log(a);=> variable a bisa di akses karena global scope bisa di akses di lokal scope, tetapi local scope tidak bisa di akses di global scope
}
test();
console.log(b)=> tidak bisa di akses karena variable b berada di lokal scope
*/
var a = 1;
