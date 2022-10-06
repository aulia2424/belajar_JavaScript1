/* Null
       -null merupakan representasi data kosong.
       -null berbeda dengan undefined, berati null sudalh ditambahkan valuenya, hanya saja valuenya null.
       -sedangkan undefined adalah variable belum ditambahkan value apapun.
      */

document.writeln("-Null & Undefined-");
document.writeln("<br>");
document.writeln("nanti keluar popup NULL");
//jika valuenya di apus maka yg muncul akan undefine , jika value di ada dengan null maka valuenya null.
let namaPertama = null;
if (namaPertama === undefined) {
  alert("UNDEFINED");
} else if (namaPertama == null) {
  alert("NULL");
} else {
  alert(namaPertama);
}

document.writeln("<br>");
document.writeln("<br>");
