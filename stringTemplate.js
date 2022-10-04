/*
       =====STRING TAMPLATE======
       - kita sudah tahu bahwa menambahkan string dengan data lain, kita bisa meggunakan operator + (plus)
       - namun pada kasus tertentu, pengguna operator + (plus) sangat meyulitkan, apalagi jika dalam jumlah banyak
       - js memiliki fitur yang bernama string template, dimana kita bisamensubtitusi data dari luar string ke dalam string seperti mengambil data variable, atau bahkan melakukan operasi matematika
       - untuk menggunakan string template, cara pembuatan stringnya harus menggunakan `backtick` bukan petik satu atau petik dua.
       */
const namaSatu = "aullll";
const template = `nama : ${namaSatu}`; //=> name atau variable di masukan ke dalam ${name}
console.info(template);
const firstName = "aulia";

const middleName = "martha";
const lastName = "brielliant";
const namaLengkap = `Nama Lengkap : ${firstName} ${middleName} ${lastName}`;
console.log(namaLengkap);

//KODE : EXPRSSION DI STRING TAMPLATE
const namaDua = "aulia martha brielliant";
const value = 98;
const tamplate = `Nama : ${namaDua}, Lulus : ${value > 75}`;
console.log(tamplate);

//KODE MULTILINE STRING
let multiLineString = `
        Nama saya adalah aulia martha brielliant
        kelas 12 rpl1
        slebew
        `;
console.log(multiLineString); //=> bisa menggunakan pre

/*
       KONVERSI STRING DAN NUMBER
       - saat membuat aplikasi kita input dari pengguna selalu dalam bentuk string
       - sedangkan kita ingin mengelola datanya dalam bentuk number
       - maka sangat disarankan untuk melakukan konverensi tipe data.
       */

//KODE MASALAH TANPA KONVERSI
const valueSatu = "1"; //=> tipe data string
const valueDua = 1; //=> tipe data number
const sumSatu = valueSatu + valueDua; //=> string 1 ditambah number 1 = 11 jika string di tambah number = string
console.log(`${sumSatu}`);

/*
       =====MELAKUKAN KONVERSI STRING DAN NUMBER=====
       | function            | keterangan                                                       |
       | parseInt (string)   | mengkonversi dari string ke number (bilangan bulat)              |
       | parseFloat (string) | mengkonversi dari string ke number (bilangan pecahan)            |
       | Number (string)     | mengkonversi dari string ke number (bilangan bulat atau pecahan) |
       | number.toString ()  | mengkonversi dari number ke string                               |
       */
const valueTiga = parseInt("1");
const valueEmpat = 1;
const sumDua = valueTiga + valueEmpat;
console.log(`${sumDua}`); //=> 1*1 = 1

console.log(`${parseInt("1.1")}`); //=> bilangan bulat jadi yang di ambil hanya 1 bukan satu koma 1 = 1
console.log(`${parseFloat("1.1")}`); //=> bisa mengambil pecahan = 1.1
console.log(`${Number("1.1")}`); //=> menerima berbagai jenis number = 1.1

const a = 1;
const b = 1;
const total = a.toString() + b.toString(); //=> diubah tipe datanya menjadi string = 11
console.log(`${total}`);
