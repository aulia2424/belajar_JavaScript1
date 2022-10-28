/* Null
       -null merupakan representasi data kosong.
       -null berbeda dengan undefined, berati null sudalh ditambahkan valuenya, hanya saja valuenya null.
       -sedangkan undefined adalah variable belum ditambahkan value apapun.
      */

console.log("-Null & Undefined-");
console.log("nanti keluar popup NULL");
//jika valuenya di apus maka yg muncul akan undefine , jika value di ada dengan null maka valuenya null.
let namaPertama = null;
if (namaPertama === undefined) {
  console.log("UNDEFINED");
} else if (namaPertama == null) {
  console.log("NULL");
} else {
  console.log(namaPertama);
}
