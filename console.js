/* Console
      -Js memiliki fitur untuk melakukan logging bernama Console.
      -Logging adalah mekanisme yang biasa dilakukan oleh programmer untuk menempilkan informasi dari aplikasi yang sedang berjalan, tanpa harus mengganggu alur kerja dan juga interaksi user.
      -Untuk melakukan ini, kita bisa menggunakkan fitur Console Js.
      -Untuk menggunakan Console, kita cukup gunakan perintah console di kode JS.
    */

/*
        | Console Method    | Keterangan / fungsi                             |
        | console.info(...) | Memberitahu informasi                           |
        | console.warn(...) | Memberitahu informasi peringatan warning        |
        | console.error(...)| Memberitahu informasi error                     |
        | console.table(...)| Memberitahu informasi dalam bentuk table        |

      */
// fungsinya tuh biar ga ngeganggu saat kita ingin menaruh informasi
// cara melihat console yaitu inspect dlu elemennya lalu klik console
// Kalo debug tidak keluar , kalo mau keluar harus klik titik 3 yang di console trs klik Verbose.
console.log("-Console-");

/* String Template
       1.Js memiliki fitur yang bernama String Template, dimana kita bisa mensubtitusi data dari luar string ke dalam string, seperti mengambil data variable, atau bahkan melakukan operasi matematika.
       2.Untuk menggunakan string template, cara pembuatan Stringnya harus menggunakan `` (backtick) bukan tanda petik '' atau ""
       3.mempermudah saat kita memasukan data jadi tidak usah menggunakan plus.
*/

console.log("\n");

console.log("-String Template-");
const name = "Aulia Martha Brielliant";
const template = `Name : ${name} `;
console.info(template);
console.log("coba klik kanan, klik inspect dan klik console");

console.log("\n");

console.log("-Exprsion di String Template-");
const nama = "Aulia Martha Brielliant";
const value = 90;
const templet = `Name : ${nama}, Lulus : ${value > 75}`;
console.info(templet);
console.log("coba klik kanan, klik inspect dan klik console");
console.log("\n");

// jadi pas di consol info yg mau kita perlihatkan barus memanggil variable yang template.
// jika lulus output yang keluar yaitu boolean.

/* Multiline String
       -String template juga bisa digunakan untuk membuat string multi line
       -Kita cukup tembahkan enter di textnya. 
     */
/*Tag <pre> adalah singkatan dari Preformatted Text. Sesuai dengan namanya, tag ini digunakan untuk text yang 'belum' diformat. ... Text akan ditampilkan sesuai bagaimana text tersebut di buat, termasuk spasi yang ada.
 */
console.log("-Multiline String-");
let multiLineString = `
      Nama saya adalah Aulia Martha Brielliant
      Saya kelas 11 RPL1
      JUJURLY BUTUH HEALING TAPI LITERLY ALAY
      `;
console.log(multiLineString);

console.log("\n");

/* Konversi String dan Number
       1.saat membuat aplikasi , kadang kita input dari pengguna selalu dalam bentuk String
       2.sedangkan kita ingin mengelola datanya dalam bentuk Number.
       3.maka sangat disarankan untuk melakukkan konversi tipe data.
       4. kalo mmisal kita mau bikin aplikasi tapi make aritmatika jadi kita haurs memakau konversi String dan Number
     */

/*
       integer = bilangan bulat
       floating point = bilangan pecahan atau yang berkoma
     */

/*
       | Function          | Keterangan                                                       |
       | parseInt(string)  | Mengonversi Dari string ke number (bilangan bulat)               |
       | parseFloat(string)| Mengkonversi dari string ke number (bilangan pecahan)            |
       | Number            | Mengkorversi dari string ke number (bilangan bulat atau pecahan) |
       | number.toString() | Mengkonversi dari number ke String                               |
       
     */
console.log("-Konversi String dan Number-");
console.log(`${parseInt("1.1")}`); //hasilnya akan di jadikan bilangan bulat.
console.log(`${parseFloat("1.1")}`);
console.log(`${Number("1.1")}`);

console.log("\n");

//  toString
console.log("-toString-");
const a = 89;
const b = 24;
const total = a.toString() + b.toString();
console.log(` ${total}`);

console.log("\n");

/* NaN (Not a Number)
       -jika data string tidak valid maka kita bisa mengkonversikan data tersebut ke Nan(Not a Number)
       -NaN adlah number special yang menyebutkan bahwa ini bukanlah number
       -jika NaN dioperasikan dengan data number lainnya, maka hasilnya akan menjadi NaN lagi
       -jadi kalo misal data yang dimasukkan bukan angka maka hasulnya akan NaN(Not a Number)
       -kalo ada data yang salah misal pp1 maka hasil akan tetap NaN jadi dia tidak mentoleransi, jika hurufnya yang di belakang dia masih mentoleran si misal, 12.3pp maka hasilnya akan 12.3.
*/
console.log("-NaN (Not a Number)-");
console.log(`${parseInt("loply")}`);
console.log(`${parseFloat(10.56)}`);

console.log("\n");

// Operasi Pada NaN
console.log("-Operasi Pada NaN (Not a Number)-");
const value1 = Number("salah");
const value2 = 100;
const sum = value1 + value2;
console.log(`${sum}`);

console.log("\n");

/* isNaN() Function
       1. jika kita ingin mengecek apakan NaN Number atau bukan, maka bisa menggunakan function isNaN(number)
       2. Hasilnya adalah berupa data boolean, true jika NaN dan False jika bukan NaN.
     */
console.log("-isNaN() Function-");
console.log(`${isNaN(value1)}`); //true jika NaN
console.log(`${isNaN(value2)}`); //false jika bukan NaN

console.log("\n");

/* Tipe Data Array []
       -Array adalah tipe data yang berisikan kumpulan data.
       -Array di Js memiliki sifat dinamis, artinya datanya bisa bertambah dangan sendirinya saat kita memasukkan data ke dalam array.
       -Array di Js mirip banget kaya Array di Php
       -URUTAN DATA ARRAY DI MULAI DARI 0
      */
console.log("-Tipe Data Array-");
let arrayKosong = [];
let arrayNama = ["aulia", "martha", "brielliant"];
console.log(`${arrayKosong} ${arrayNama}`);

console.log("\n");

// Menambahkan Array di Console
// push untuk menambahkan data
// console.table untuk memberikan informasi di consolenya dalam bentuk table
console.log("-Menambahkan Array Di Console-");
const names = [];
names.push("Aulia");
names.push("Martha", "Brielliant");
console.table(names);
console.log("coba klik kanan lalu klik inspect dan klik console");
