/* Operator Logika di Non Boolean
       - Sebelumnya kita sudah tahu bahwa operator logika AND (&&), dan OR (||) digunakan untuk dua data boolean.
       - Namun berbeda di Js, kita bisa mengguanakn operator logika AND dan OR untuk tipe data non boolean
      */

/* Operator OR (||) di Non Boolean
       - Operator logika OR (||), membaca dari kiri ke kanan.
       - Operator ini akan mengambil nilai pertama yang truthy.
       - Jika tidak ada satupun yang bernilai truthy, maka yang terakir yang akan diambil.
       - digunakan ketika kita mau mengambil variable A kalo variable A Falsy maka kita ambil Variable B
      */
console.log("-Operator OR(||)-");
console.info("hello" || ""); // hello karena hello itu data nah jadi truthy
console.info("" || []); // [] karena bilangan array kosong truthy
console.info("0" || "NOL"); // 0 karena 0 nya memiliki string
console.info(0 || "KOSONG"); // KOSONG karena kosong  merupakan data truthy
console.info(null || "NULL"); // NULL karena NULL bukan null, jadi NULL merupakan Data truthny
console.info(undefined || "UNDEFINED"); // UNDEFINED karena UNDEFINED bukan undefined, jadi UNDEFINED merupakan data truthy

console.log("\n");
const human2 = {
  firstName: "AUll", // jadi di deklarasiin yang paling kiri doang & yg merupakan bilangan truthy
  lastName: "LIA",
};
const name1 = human2.firstName || human2.lastName;
console.info(name1);

/* Operator AND (&&) di Non Boolean
       - Operator logika AND (||), membaca dari kiri ke kanan
       - Operator ini akan mengambil nilai pertama yang falsy.
       - Jika tidak ada satupun yang bernilai falsy, maka yang terakhir yang akan diambil.
      */
console.log("\n");

console.log("-Operator AND (&&)-");
console.info("hello" && ""); // mengambil nilai falsy akan kosong
console.info("" && []); // kosong ""
console.info("0" && "NOL"); //mengambil yang falsy "NOL"
console.info(0 && "KOSONG"); //mengambil yang falsy 0
console.info(null && "NULL"); //mengambil yang falsy null
console.info(undefined && "UNDEFINED"); //mengambil yang falsy undefined

// jadi operator true or false kan memilih yang benar dan salah kalo ini memilih yang truthy dan falsy
