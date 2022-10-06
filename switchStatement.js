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
