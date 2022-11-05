// Manipulasi Array

// 1. Menambah isi array secara manual
var arr = [];
arr[0] = "aulia";
arr[1] = "martha";
arr[2] = "brielliant";
console.log(arr);

// 2. Menghapus isi array
var arr1 = ["Aulia", "Martha", "Brielliant"];
arr1[1] = undefined;
console.log(arr1);

// 3, Menampilkan isi array
var arr2 = ["aulia", "martha", "brielliant"];
for (var i = 0; i < arr2.length; i++) {
  console.log("siswa ke-" + (i + 1) + arr2);
}

// Array Method
// 1. join dia akan mengubah isi array[] dan merubahnya menjadi string''
var arr3 = ["aulia", "martha", "brielliant"];

// 2. push dan pop
// push untuk memasuakkan element baru di akhir arraynya
arr3.push("12 rpl");
arr3.push("cuantiks");

// pop untuk menghilangkan element terakhir jadi data cuantiks akan hilang
arr3.pop();

// 3. unshift dan shift
// unshift bekerja untuk menambahkan data di element pertama
arr3.unshift("data diri");
arr3.unshift("siswa");

// shift untuk menghilangkan data di element pertama
arr3.shift();
console.log(arr3.join());
