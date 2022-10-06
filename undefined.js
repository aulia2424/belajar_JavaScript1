/* Undefined
       - Undefined adlh kata kunci di Js
       - Undefined merupakan tipe data
       - Suatu variable yang belum ditambahkan nilai, maka artinya variable tersebut merupakan tipe data Undefined
       - Undefined berbeda dengan null di Bahasa Pemrogramman lain.
       - jadi undefined itu kaya kita tuh baru masukin variablenya doang tapi datanya belum.
      */
// jadi datanya kalo belum di definisikan maka akan muncul Undefined tetapi jika sudah di definisikan makaakan muncul Defined
document.writeln("-Undefined Variable-");
document.writeln("<br>");
document.writeln("coba klik kanan lalu klik inspect dan klik console");
let namasaya = "Aulll"; // DEFINED karena datanya ada datanya yaitu Aulll.
if (namasaya == undefined) {
  console.info("UNDEFINED");
} else {
  console.info("DEFINED");
}

document.writeln("<br>");
document.writeln("<br>");

document.writeln("-Undefined Array Value-");
document.writeln("<br>");
document.writeln("coba klik kanan lalu klik inspect dan klik console");
const namaAnda = ["Aulia", "Martha"];
if (namaAnda[2] == undefined) {
  //hasilnya undefined karena index 2 tidak ada jadi tidak terdeteksi maka value yang keluar ARRAY UNDEFINED
  console.info("ARRAY UNDEFINED");
} else {
  console.info("ARRAY DEFINED");
}

document.writeln("<br>");
document.writeln("<br>");

document.writeln("-Undefined Object Property-");
document.writeln("<br>");
document.writeln("jika kita memasukkan data kita maka akan muncul Hello nama kita, jika kita tidak memasukkan data kita maka akan keluar popup Hello DUDE");

let someone = {};
if (someone.name == undefined) {
  alert("Hello DUDE");
} else {
  alert(`Hello ${someone.name}`);
}

document.writeln("<br>");
document.writeln("<br>");
