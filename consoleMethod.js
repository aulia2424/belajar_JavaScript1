/*
CONSOLE
       - js memiliki fitur untuk melakukan logging bernama console
       - logging adalah mekanisme yang bisa dilakukan oleh programmer untuk menampilkan informasi dari aplikasi yang sedang berjalan, tanpa harus mengganggu alur kerja aplikasi dan juga interaksi user
       - untuk melakukan ini, kita bisa menggunakan fitur console js
       - untuk menggunakan console, kita cukup gunakan perintah console di kode js

       CONSOLE METHOD
       | console method  | keterangan                               |
       | console.info()  | memberitahu informasi                    | => console.log
       | console.warn()  | memberitahu informasi peringatan         |
       | console.error() | memeberitahu informasi error             |
       | console.table() | memberitahu informasi dalam bentuk table |
*/
console.log("halo aul slebew");
console.warn("ini di hek kids");
console.error("ini sudah di hek kids");
console.table("slebeww");

// untuk operator assignment perilakubya seperti aritmatika dia tidak memperdulikan tipe data string dan numeric.
// jadi kalo tipe datanya berbeda jika == maka true karena dia tidak perduli tipe datanya.
// kecuali === karena dua memperdulikan tipe datanya
x = 1;
y = "1";
var c = x / y;
console.table(c);
