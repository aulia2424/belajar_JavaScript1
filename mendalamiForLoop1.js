/*
pertama tama untuk memulai loop 
1. buat initialize / starter or startting point
2. condition for when your loop should end (keadaan terakhir atau kapan loop kita berhenti.)
3. incrementor or decrementor , continues up or down (apakah loop kita mau menaik atau menurun)
*/
console.log("For Loop Dasar");
for (var i = 0; i <= 15; i++) {
  console.log(i);
}

// jadi kita membuat variable i yang dimana kita mulai dari nolai 0, kondisi selanjutnya jika i lebih kecil sama dengan 15; maka akan di cetak atau kita panggil variablenya kemudian nilai i increment jadi nilainya bertambah 1-15.

// increment misal i=0 i++
// i = i + 1;  i = 0 + 1 i = 1
// i = i + 1; i = 1 + 1 i = 2
// i = i + 1; i = 2 + 1 i = 3 dan seterusnya carakerja increment

console.log("\n");

var total = 0;
for (var num = 1; num < 11; num++) {
  total += num;
}
console.log("The total is : " + total);
// jadi kita membuat keadaan awal yaitu variable total nilainya 0, kemudian variable num nilainya 1-10, selanjutya total yaitu 0 + variable num keadaan dari awal sampai akhir jadi 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// jadi akan terus di tambah sesuai kedaan awal dan akhir

console.log("\n");

console.log("For Loop di Array");
//for loop array
var fruits = ["manggo", "banana", "aplle"];
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// jadi caranya hampir sama seperti sebelumnya cuma yang membedakan kita membandingkannya dengan variable yang dimana .length = panjang arraynya jadi ketika index atau data di index ditambahkan maka oomatis akan terpanggil atau terbawa ketikadi panggil, jadi tidak usah memasukkan index di console.

console.log("\n");

// loop di object
console.log("For Loop di Object");
var data = {
  name: "aul",
  umur: 17,
  alamat: "US",
};
for (var elem in data) {
  console.log(elem, data[elem]);
}
// jika kita panggil console.log(elem) maka yang akan keluar hanya propertinya saja, gimana cara agar valuenya terpanggil? maka console.log(elem, data[elem]) jadi itu akan memanggil properti kemudian value di data di ambil kemudan di print
