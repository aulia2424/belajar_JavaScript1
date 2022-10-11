/* Switch Statement
        - Kadang kita hanya membutihkan kondisi sederhana di if statement,seperti hanya menggunakan perbandingan ==
        - Switch adalah statement percabangan yang sama dengan if, namun lebih sederhana cara pembuatannya.
        - Kondisi di switch statement hanya untuk perbandingan ==
        - jadi kalo mmisal make perbandingan > 78 lebihkecil/ lebih besar maka memakai else if
        - jika hanya ingin menentukan A lulus atau tidak memakai switch
      */
console.log("-Switch Statement-");
/*
         jadi kan nilai kita A maka valuenya yaitu Brilliant Anda Lulus Dengan Nilai Sangat Baik.
         - case itu maksutnya kasus jadi dalam kasus nilai kita A
        */
const nilaiRapot = "A"; //ini nilai rapot kita
switch (nilaiRapot) {
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

var pilihan = 8;
/*
1. light
2. dark
3. nocture
4. terminal
5. indigo
*/

// cara 1 menggunakan if
if (pilihan == 1) {
  console.log("light");
} else if (pilihan == 2) {
  console.log("dark");
} else if (pilihan == 3) {
  console.log("nocture");
} else if (pilihan == 4) {
  console.log("terminal");
} else {
  console.log("indigo");
}

// cara 2 memakai switch statement
switch (pilihan) {
  case 1:
    console.log("light");
    break;
  case 2:
    console.log("dark");
    break;
  case 3:
    console.log("nocture");
    break;
  case 4:
    console.log("terminal");
    break;
  default:
    console.log("indigo");
}

// cara 3 menggunakan ternary operator
console.log(pilihan == 1 ? "light" : pilihan == 2 ? "dark" : pilihan == 3 ? "nocture" : pilihan == 4 ? "terminal" : "indigo");
