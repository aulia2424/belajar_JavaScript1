/*
1. bahasa pemrograman yang banyak menghasilkan peluang kerja
2. Javascript pengertian dan lain lain
3. syntax dan cara menjalankan js
4. variable
5. comments
6. assignment and comparison
7. if, if else, switch case, di dalam js
8. conditionals dalam program itu apa
9. for, while, do while, dalam js
10. looping dalam program itu apa
*/

/*
untuk pertanyaan
css (bukan bahasa pemrograman) dan html apakah dia bahasa pemrograman?
css merupakan aturan untnuk mengatur beberapa komponen dalam sebuah web sehingga akan lebih terstruktur dan seragam
html markup language adalah standard pemrograman yang digunakan  untuk membuat halaman web

pas komen hanya menjelaskan komen oneline //
multiple komennya tidak di jelaskan

if, else if , else dan switch  tidak di jelaskan


for tadi sempat bilang data yang ingin di isi itu apa apakah kondisi atau increement

terlalu lama menjelaskan dan tidak to the point terlalu mengulur waktu sehigga banyak yang belum di jelaskan looping ...


agung
switch salah tidak memakai kondisi

1. paling banyak menghasilkan peluang kerja
jika berdasarkan tiobe index  survei terbanyak di sebut pypl(popularity of programing language)mengenai bahasa terpopuler dan yang paling banyak di cari yaitu python, java, js, c#, dan php
jika berdasarkan stack overflow bahasa yang paling populer yaitu python, js, go, typescript, kotlin

-python 
adalah yang paling populer untuk dipelajari, python ini saat ini digunakan untuk data sience, machine learning bahkan untuk blok chain dan crypto currency dan python juga bisa digunakan untuk web development, tapi di bagian backend dan juga bisa digunakan IOT(internet of things) Internet of Things (IoT) adalah konsep komputasi tentang objek sehari-hari yang terhubung ke internet dan mampu mengidentifikasi diri ke perangkat lain.

- java
adalah sebuah bahasa pemrograman yang biasnaya digunakan untuk membuat aplikasi dekstop atau enterprice tapi juga bisa digunakan untuk membuat mobile apps, bisa juga untuk membuat web bahkan Iot

- js adalah bahas pemrograman yang sangat flexibel, bisa di be dan fe, dia juga bisa untuk mobile, bisa juga untuk data visualization, bikin gem juga bisa dan untuk aplikasi IoT

- kotlin untuk membuat aplikasi android

kenapa ko ga ada php? perlu di ingat yang saya ambil berdasarkan survei, tapi tidak bisa di pungkiri untuk hari ini php masih banyak di gunakan di dunia.

ini saya ambil dari survei dan sudah pasti tutorialnya banyak, komunitasnya besar, dan yang pasti banayak di cari oleh perusahaan perusahaan, jadi banyak lapangan pekerjaan yang membutuhkan bahasa bahasa tadi.

2. Javascript merupakan bahasa pemrograman web yang bersifat Client Side Programming Language, yang artinya tipe bahasa pemrograman yang pemrosesannya dilakukan oleh client. Client dalam hal ini merujuk pada web browser. Apabila kita ingin menguasai Javascript, ada beberapa hal dasar (basic) yang perlu diperlajari, antara lain: variabel dan data array, objek, perulangan, percabangan, fungsi, DOM untuk manipulasi, dan lain sebagainya.

Pada tahun 1994 JavaScript mulai dikenal, pada saat itu web dan internet sudah mulai berkembang. JavaScript didesain oleh Brendan Eich yang merupakan karyawan Netscape. Transformasi nama JavaScript, dimulai dari Mocha, Mona, LiveScript, hingga akhirnya resmi bernama JavaScript. 

Versi awal bahasa JS hanya dipakai di kalangan Netscape beserta dengan fungsionalitas pun yang masih terbatas. Singkat cerita pada tahun 1996 JavaScript secara resmi dinamakan sebagai ECMAScript. ECMAScript 2 dikembangkan pada tahun 1998 yang dilanjutkan dengan ECMAScript 3 setahun kemudian. ECMAScript terus dikembangkan sampai akhirnya menjadi JavaScript atau JS hingga saat ini. Pada tahun 2016, 92% web diketahui telah menggunakan JavaScript. Itulah mengapa JavaScript atau JS terus berkembang.

3.  jika kita menggunakan html maka tag untuk menjalanjan js yaitu <script></script>
    jika di js tidak perlu menggunakan tag

4. KODE TANPA VARIABLE
document.writeln("Aulia martha brielliant");
document.writeln("mamang racing");
document.writeln("ncit babeh");

       ======VARIABLE======
       - variable adalah tempat untuk menyimpan data
       - dengan menyimpan data di variable, kita bisa menggunakannya lagi dengan menyebutkan nama variablenya
       - untuk membuat variable di js, kita bisa menggunakan kata kunci var diikuti dengan nama variablenya
       - js adalah dynamic language, artinya variable di js tidak terpaku harus menggunakan satu tipe data, kita bisa mengubah-ubah tipe data di variable yang sama.

5.  KOMENTAR
       - komentar adalah kode program yang tidak akan dieksekusi ketika dibaca
       - komentar biasanya digunakan sebagai informasi tambahan atau petunjuk
       - di js, kita bisa menambahkan kode komentar

6.  OPERATOR AUGMENTED ASSINGNMENTS
       | operator matematika   | operator augmented assignments |
       | results = result + 10 | result += 10                   |
       | result = result - 10  | result -= 10                   |
       | result = result * 10  | result *= 10                   |
       | result = result ** 10 | result **= 10                  |
       | result = result / 10  | result /= 10                   |
       | result = result % 10  | result %= 10                   |
       let result = 10;
       result += 10;
       document.writeln("<p>" + result + "</p>");

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
       let result = 5 > 10;
       document.writeln("<p>" + result + "</p>"); => lima lebih besar dari 10 = false

7. if
======IF EXPRESSION=====
- dalam js, if adalah salah satu kata kunci yang digunakan untuk percabangan
- percabangan artinya kita bisa mengeksekusi kode program tertentu ketika suatu kondisi terpenuhi
- hampir disemua bahasa pemrogramman mendukung if expression

const examValue = 90;
if (examValue > 80) {
  // => nilai disini harus true agar bisa di eksekusi, jika nilainya false maka tidak akan di eksekusi
  console.log("kerja bagus");
}

else
=====ELSE EXPRESION=====
- blok else akan di eksekusi ketika kondisi if bernilai true
- kadang kita ingin melakukan eksekusi preogram tertentu jika konsidi if bernilai false
- hal in bisa dilakukan menggunakan else expression

const examValue = 90;
if (examValue < 50) {
  // => jika kurang dari 90 maka akan keluar else expression
  console.log("kerja bagus");
} else {
  console.log("maaf coba lagi");
}

else if 
=====ELSE IF EXPRESSION=====
- kadang dalam if, kita butuh membuat beberapa kondisi
- kasus seperti ini, di js kita bisa menggunakan else expression

const examValue = 90;
if (examValue > 80) {
  console.log("anda lulus nilai anda : A"); // jika nilai lebih besar dari 80 maka anda lulus
} else if (examValue > 60) {
  // jika nilai lebih besar dari 60 maka not bad
  // else if berfungsi jika kita memiliki pilihan lebih dari dua atau memiliki dua pilihan
  console.log("not bad nilai anda : B");
} else {
  // else sebagai penutup
  console.log("maaf coba lagi nilai anda : C"); // jika di bawah 60 maka maaf coba lagi
}

Switch Statement
        - Kadang kita hanya membutihkan kondisi sederhana di if statement,seperti hanya menggunakan perbandingan ==
        - Switch adalah statement percabangan yang sama dengan if, namun lebih sederhana cara pembuatannya.
        - Kondisi di switch statement hanya untuk perbandingan ==
        - jadi kalo mmisal make perbandingan > 78 lebihkecil/ lebih besar maka memakai else if
        - jika hanya ingin menentukan A lulus atau tidak memakai switch
     
        console.log("-Switch Statement-");
       
        
                 jadi kan nilai kita A maka valuenya yaitu Brilliant Anda Lulus Dengan Nilai Sangat Baik.
                 - case itu maksutnya kasus jadi dalam kasus nilai kita A
                
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
        1. light
        2. dark
        3. nocture
        4. terminal
        5. indigo
        
         cara 1 menggunakan if
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
        
         cara 3 menggunakan ternary operator
        console.log(pilihan == 1 ? "light" : pilihan == 2 ? "dark" : pilihan == 3 ? "nocture" : pilihan == 4 ? "terminal" : "indigo");
        
8. 
conditional
 percabangan pada Javascript atau yang biasa disebut Javascript Conditional Statement. Untuk membuat suatu halaman web yang dinamis dan interaktif, perancang halaman web membutuhkan perintah-perintah yang dapat mengatur aliran dan informasi (control flow). Berdasarkan hasil program yang telah dibuat, Javascript akan membuat keputusan alur mana yang akan dieksekusi.

Dalam Javascript terdapat dua macam pernyataan percabangan yaitu If…Else Statement dan Switch. If…Else Statement digunakan untuk menguji sebuah kondisi dan mengeksekusi pernyataan tertentu bila kondisi tersebut terpenuhi, atau mengeksekusi pernyataan lain bila kondisi tersebut tidak terpenuhi. Kondisi merupakan ekspresi atau keadaan Javascript yang memiliki nilai Boolean true atau false.
if (condition) => x<=10; x++ {
  code berjala jika kondisi benar
} else {
  code berjalan jika kondisi salah
}
 Dalam kondisi Javascript memiliki ekspresi nilai Boolean yang dibuat dengan operasi perbandingan (Comparison Operators).
 ini menggunakan comparison operatorsif (pilihan == 1) {
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

Selain menggunakan If…Else Statement, percabangan Javascript dapat dilakukan dengan perintah Switch. Pernyataan Switch digunakan untuk menyederhanakan If…Else Statement yang terlalu banyak.
var pilihan = 1
switch (pilihan) {
case 1:
  console.log("light"); jika nilai 1 maka outputnya light
  break; fungsinya untuk memberhentikan kode program jadi ketika variavle valuenya 1 maka akan berhenti di case 1
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

Kondisi pada percabangan Switch merupakan variabel yang akan diperiksa. Hasil percabangan dari variabel tersebut akan dikelola oleh perintah case. Opsi default bisa ditambahkan untuk menangani kasus yang tidak ditangani oleh perintah case atau menjadi kondisi terakhir ketika tidak didefinisikan pada perintah case. Demikian pembahasan mengenai percabangan pada Javascript (Conditional Statement).



9. 
For Loop
       - For adalah salah satu kata kunci yang bisa digunakan untuk melakukan perulangan.
       - Blok kode yang terdapat di dalam for akan selalu diulangi selama kondisi for terpenuhi, jika kondisi tdk terpenuhi maka perulangan tersebut berhenti.
       - Syntax Perulangan For
        for(init statement;kondisi;post statement) {
          //blok perulangan
        }
        1. init statement akan dieksekusi hanya sekali diawal sebelum perulangan.
        2. Kondisi akan dilakukan pengecekkan dalam setiap perulangan, jika true perulangan akan dilakukan. Jika false perulangan akan berhenti.
        3. Post statement akan dieksekusi setiap kali diakhir perulangan
        4. Init statement, Kondisi dan Post Statement tidak wajib diisi, jika kondisi tidak diisi, berarti kondisi selalu bernilai true
      
 
        console.log("-Perulangan Dengan Init Statement-");
        for (let konter = 1; konter <= 10;) {
          console.log(`Perulangan urutan ke ${konter}`);
          konter++;
        }
        
        console.log("\n");
        
        console.log("-Perulangan Dengan Post Statement-");
        for (let kontak = 1; kontak <= 10; kontak++) {
          console.log(`Perulangan Ke ${kontak}`);
        }

While Loop
var num = 1;  initializer
while (num < 11) {
  condition
  console.log(num);
  num++; increment
}
 jadi num initializernya tidak di dalam () jadi lebih simple, tapi kondisi / condition berada di dalam () incrementnya juga di tulis setelah di print variablenya.

console.log("\n");

 while loop ketika di addition assignment
var sum = 0;
var numm = 0;
while (numm <= 10) {
  sum += numm; => sum = sum + num / 1 + 10 = 11 jadi outputnya 11
  numm++;
}
console.log(numm);
console.log("\n");

 jadi num 0-10 jika sum = sum + numm mana numm akan bertambah 1 nilainya
  0 = 0 + 1 = 1
  1 = 1 + 1 = 2
  2 = 2 + 1 = 3.... 10
 ketika hasil >= 10 maka 10 + 1 karena increment dari 10
 hasilnya 11

 while loops in array
var randomStuff = ["apple", 3245, 9999, true, false, undefined, ["apple", "ball", "cat"], 3, 2, "lastobject"];
var x = 0;
while (x < randomStuff.length) {
  console.log(randomStuff[x]);
  x++;
}
  jadi kita membuat variable randomStuff yang berisi 10 index salah satunya ada array yang berisi 2 index, kemudian buat var x = 0 jadi nantiakan di print dari index ke 0.
  jika 0 < 10 / lebih kecil dari jumlah panjang index maka print variable randomStuff jadi ini dynamic language otomatis akan berubah mengikuti inputannya, untuk mengakses indexnya maka console.log(randomStruff = inputannya[x = jumlah index])

console.log("\n");

var otherStuff = ["apple", 3245, 9999, true, false, undefined, ["apple", "ball", "cat"], 3, 2, "lastobject"];
var number = otherStuff.length - 1;
while (number >= 0) {
  console.log(otherStuff[number]);
  number--;
  ``;
}

console.log("\n");

var cars = ["lambo", "bmw", "tesla"];
var total = 0;
while (total < cars.length) {
  console.log(cars[total]);
  total++;
}

console.log("\n");

var v = 5;
while (v >= 1) {
  v--;
  console.log(v);
}

 whileLoop Decreement kondisi dulu bari di print jadi lebih aman
console.log("whileLoop Decreement");
var a = 5;  => ini initializer
while (a >= 0) {
  console.log(a);
  a--; => ini decreement
}



console.log("\n");

 whileLoop Increement
console.log("whileLoop Increement");
var b = 1;
while (b <= 10) {
  console.log(b);
  b++; => ini increement
}

console.log("\n");

 DoWhile akan di print dahulu sebelum diberi kondisi jadi nyebur duluansebelum di bilangin
console.log("do while increement");
var c = 1;
do {
  console.log(c);
  c++;
} while (c <= 10);

console.log("\n");

console.log("do while decreement");
var d = 10;
do {
  console.log(d);
  d--;
} while (d >= 1);


10. looping
Loop atau perulangan pada javascript digunakan untuk melakukan tugas berulang berdasarkan suatu kondisi. Loop atau perulang pada umumnya tersedia pada semua bahasa pemrograman meskipun implementasi dan sintaks berbeda-beda.

Sebagai contoh kita ingin menampilkan angka 1 sampai 100, betapa melelahkan jika kita harus mengetik manual angka 1 sampai 100. Disinilah perulangan dapat mempersingkat waktu penulisan angka-angka tersebut.

Jenis-jenis perulang pada javascript
For
While
Do While
forEach
for([inisialisasi]; [kondisi]; [eksekusi iterasi]) {
     // blok kode
}
Inisialisasi adalah saat pertama kali kita mendeklarasi sebuah nilai awal, dimana nilai awal akan berubah selama belum memenuhi syarat kondisi.
Kondisi berfungsi untuk mengecek perubahan yang terjadi setiap kali terjadi eksekusi iterasi perulangan dengan menggunakan operator perbandingan.
Eksekusi Iterasi proses akhir setiap kali terjadi eksekusi iterasi, biasanya digunakan untuk proses penambahan (increment) atau pengurangan (decrement).     


farida
script di taruh di bawah
*/

// jadi ngejelasinnya kudu detail jadi 1 == "1" maka = true
// jika 1 === "1" maka false

/*
alfi

*/
