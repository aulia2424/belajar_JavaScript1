/*
=====TIPE DATA ARRAY=====
 - array adalah tipe data yang berisikan kumpulan data
 - array di js memiliki sifat dinamis, artinya datanya bertambah dengan sendirinya saat kita memasukkan data ke dalam array
*/
let arrayKosong = [];
let arrayNama = ["Aulia", "Martha", "Brielliant"];
console.log(arrayKosong);
console.log(arrayNama);

/*
=====CARA KERJA ARRAY=====
- setiap data di array akan disimpan delam posisi berurutan, dimana urutan pertama dimulai dari nomor 0
- setiap kita menambah data ke array, otomatis data akan disimpan di urutan terakhir
- urutan di array , kita sebut dengan index
*/
const names = [];
names.push("aulll");
names.push("aulia", "martha");
console.table(names);

/*
=====OPERASI DI ARRAY=====
| operasi              | keterangan                                                 |
| array.push(value)    | menambah data ke array                                     |
| arrau.length         | untuk mendapatkan panjang array                            |
| array[index]         | mendapatkan data di posisi index                           |
| array[index] = value | mengubah data du posisi index                              |
| delete array[index]  | menghapus data di posisi index, namun index tidak bergeser |
*/
names[1] = "slebeww";
console.table(names);

/*
=====PERLU DIINGAT=====
- data di dalam array tidak ada batasannya harus data apa
- jadi kita bisa memasukkan data apapun ke dalam array
- bahkan kita juga bisa memasukkan array ke dalam array jika kita mau
*/
