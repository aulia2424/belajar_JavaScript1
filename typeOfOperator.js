/* Operator typeof
       - typeof merupakan operator yang bisa kita gunakan untuk melihat tipe data sebuah value atau variable.
       - Karena Js merupakan Dynamic language Artinya, Anda tak harus menuliskan tipe data saat mengisi variable seperti pada bahasa pemrograman lainnya
       - kadang kita perlu mengecek tipe data sebuah value / variable menggunakan operator typeof.
       -Hasil dari operator typeof adalah string.
      */
/*
       | Type      | Hasil Operator typeof |
       | Undefined | "undefined"           |
       | Null      | "object"              |
       | Boolean   | "boolean"             |
       | Number    | "number"              |
       | BitInt    | "bigint"              |
       | String    | "string"              |
       | Symbol    | "symbol"              |
       | Function  | "function"            |
       | Lainnya   | "object"              |
      */
//artinya variable data misal adalah number nah apa yg akan di lakukan di alert
// jadi data di dalam alert adalah output yg akan kita keluarkan
// data keluar setelah NULL yang memiliki value sesuai dengan tipe datanya apa
// untuk mengecek tipedata
console.log("-Operator typeof-");
let data = "aul";
const typeData = typeof data;
if (typeof data === "number") {
  console.log("Number");
} else if (typeof data === "string") {
  console.log("String");
} else if (typeof data === "boolean") {
  console.log("Boolean");
} else if (typeof data === "object") {
  console.log("Object");
}
console.log(`${typeData}`);
