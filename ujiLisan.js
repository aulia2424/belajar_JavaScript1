/*
1. bahasa pemrograman yang bnayak menghasilkan peluang kerja
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
2. JavaScript di sever
       - awalnya js memang kebanyakan digunakan untuk berjalan di client side (browser)
       - namun akhir-akhir ini, semenjak keluar teknologi nodejs yang bisa digunakan untuk mnjalankan js tanpa browser, sekarang akhirnya js juga banyak digunakan untuk membuat aplikasi server
       - karena ini, akhirnya sekrang js dikenal dengan bahasa pemrograman fullstack (be adn fe) karena bisa digunakan untuk membuat aplikasi be dan aplikasi fe

       JavaScript dan Ecma Script
       - karena js sekarang hampir di adopsi oleh sebuah aplikasi browser, akhirnya dibuatlah sebuah standarisasi yang bernama ecmaScript
       - organisasi yang melakukan standarisasi ecma adalah ECMA International
       - sekarang karena ecmascript dan js sama, sekarang bisa dibilang ecmascript dan js adalah dua nama untuk satu bahasa pemrograman yang sama.

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
var fullName;

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
- blok is akan di eksekusi ketika kondisi if bernilai true
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
- kasus seperti ini, di js kita bisa menggunakan else is expression

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
        
8. conditional
 ======TIPE DATA BOOLEAN (true of false)======
       - tipe data boolean adalah tipe data yang berisikan data kebenaran, artinya hanya ada dua data, benar dan salah (yes atau no)
       - benar di representasikan dengan kata kunci true, dan salah di representasikan dengan kata kunci false
       - walaupun tipe data boolean merupakan tipe data yang sangat sederhana, tapi tipe data boolean akan banyak digunakan di berbagai fitur pemrogramannode
console.log(true);
console.log(false);

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
      
 Contoh Perulangan Tanpa Henti
        for (; ;) {
          alert("For Loop");
        }
        console.log("-For Loop-");
        //  artinya akan mengulang dari 1 sampai ke sepuluh karena kurang dari sama dengan 10
        let counter = 1;
        for (; counter <= 10; ) {
          console.log(`Perulangan Ke ${counter}`);
          counter++; // ini increment fungsinya agar perulangan bertambah dari 1 - 10
        }
        
        console.log("\n");
        
        console.log("-Perulangan Dengan Init Statement-");
        for (let konter = 1; konter <= 10; ) {
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
  sum += numm;
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

 DoWhile aka di print dahulu sebelum diberi kondisi jadi nyebur duluansebelum di bilangin
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
pertama tama untuk memulai loop 
1. buat initialize / starter or startting point
2. condition for when your loop should end (keadaan terakhir atau kapan loop kita berhenti.)
3. incrementor or decrementor , continues up or down (apakah loop kita mau menaik atau menurun)        
*/
