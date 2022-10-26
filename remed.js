/*   assignment   
       | operator matematika   | operator augmented assignments |
       | results = result + 10 | result += 10                   |
       | result = result - 10  | result -= 10                   |
       | result = result * 10  | result *= 10                   |
       | result = result ** 10 | result **= 10                  |
       | result = result / 10  | result /= 10                   |
       | result = result % 10  | result %= 10                   |
*/
let result = 10;
result += 10;
console.log(result);

/* comparison
    OPERASI PERBANDINGAN
       - operasi perbandinga adalah operasi untuk membandingkan dua buah data
       - operasi perbandingan adalah operasi yang menghasilkan nilai boolean (true of false)
       - jika hasil operasi adalah benar, maka nilai true
       - jika hasil operasi adalah salah, maka nilai false
       | operator | keterangan                             |
       | >        | lebih dari                             |
       | <        | kurang dari                            |
       | >=       | lebih dari sama dengan                 |
       | <=       | kurang dari sama dengan                |
       | ==       | sama dengan                            |
       | ===      | sama dengan dan sama tipe              |
       | !=       | tidak sama dengan                      |
       | !===     | tidak sama dengan atau tidak sama tipe |
*/
let hasil = 5 > 10;
console.log(hasil); //=> lima lebih besar dari 10 = false

/*
======IF EXPRESSION=====
- dalam js, if adalah salah satu kata kunci yang digunakan untuk percabangan
- percabangan artinya kita bisa mengeksekusi kode program tertentu ketika suatu kondisi terpenuhi
- hampir disemua bahasa pemrogramman mendukung if expression
*/
const examValue = 90;
if (examValue > 80) {
  // => nilai disini harus true agar bisa di eksekusi, jika nilainya false maka tidak akan di eksekusi
  console.log("kerja bagus");
}

/*
=====ELSE EXPRESION=====
- blok else akan di eksekusi ketika kondisi if bernilai true
- kadang kita ingin melakukan eksekusi preogram tertentu jika konsidi if bernilai false
- hal in bisa dilakukan menggunakan else expression
*/
const nilaiUjian = 90;
if (nilaiUjian > 80) {
  // => jika kurang dari 90 maka akan keluar else expression
  console.log("kerja bagus");
} else {
  console.log("maaf coba lagi");
}

/*
=====ELSE IF EXPRESSION=====
- kadang dalam if, kita butuh membuat beberapa kondisi
- kasus seperti ini, di js kita bisa menggunakan else expression
*/
const nilaiRapot = 90;
if (nilaiRapot > 80) {
  console.log("anda lulus nilai anda : A"); // jika nilai lebih besar dari 80 maka anda lulus
} else if (nilaiRapot > 60) {
  // jika nilai lebih besar dari 60 maka not bad
  // else if berfungsi jika kita memiliki pilihan lebih dari dua atau memiliki dua pilihan
  console.log("not bad nilai anda : B");
} else {
  // else sebagai penutup
  console.log("maaf coba lagi nilai anda : C"); // jika di bawah 60 maka maaf coba lagi
}

/*
Switch Statement
        - Kadang kita hanya membutihkan kondisi sederhana di if statement,seperti hanya menggunakan perbandingan ==
        - Switch adalah statement percabangan yang sama dengan if, namun lebih sederhana cara pembuatannya.
        - Kondisi di switch statement hanya untuk perbandingan ==
        - jadi kalo mmisal make perbandingan > 78 lebihkecil/ lebih besar maka memakai else if
        - jika hanya ingin menentukan A lulus atau tidak memakai switch 
*/
const hasilRapot = "A"; //ini nilai rapot kita
switch (hasilRapot) {
  case "A":
    console.log("Brilliant Anda Lulus Dengan Nilai Sangat Baik");
    break; //break untuk memberhentikan
  case "B":
  case "C":
    console.log("Selamat Anda Lulus");
    break;
  case "D":
    console.log("Maaf Anda Tidak Lulus");
    break;
  default: // sama seperti else sebagai akhiran
    console.log("Sepertinya Anda Salah Jurusan");
}
