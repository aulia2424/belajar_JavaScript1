/* Optional Chaining
       - Optional Chaining operator merupakan operator yang digunakan untuk mengamankan ketika kita ingin mengakses property sebuah objek dari data nullish(nulish itu yang variable yang tidak kita beri value tapi valuenya bisa kita tentukan).
       - Jika kita mencoba ngeakses property dari sebuah object dari data nullish tanpa menggunakan optional chaining operator, maka akan terjadi error.
      */
console.log("-Optional Chaining-");
console.log("Menggunakan pengecekkan if");
let human = {};
let say;
if (human.address !== undefined && human.address !== null) {
  say = human.address.country;
  //hasilnya akan undefined karena tidak ada countrynya
}
console.log(say);
console.log("\n");

console.log("Menggunakan Optional Chaining");
let human1 = {
  address: {
    country: "BOJONG",
  },
};
console.log(
  human1?.address?.country
); /* artinya yaitu kalau misal human1 tidak nullish maka kita akses addressnya, kalau addressnya tidak nullish maka kita akses country nya jika semuanya tidak nullish maka semuanya kita ganti "Undefine" */
