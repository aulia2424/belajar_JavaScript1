/*
DOM (Document Object Model)
Document adalah area isi website, Object adalah sebuah nilai atau tipe data pada js, Model adalah representasi terhadap sesuatu
Jadi DOM adalah representsi element HTML pada dokument menjadi sebuah object 
- DOM membuat seluruh komponen dari halaman web dapat diakses dan dimanipulasi
- Komponen yang dapat dimanipulasi DOM
- menggunakan metode cammel case (fontSize)
1. Element HTML
2. Atribut
3. Text

- Dom dapat dimanipulasi (dibuat, diubah, dihapus) menggunakan JS

Hierarki DOM
1. Window
2. Document
3. History
4. Location

MATERI YANG HARUS DIPELAJARI PADA DOM:
- DOM Selection
- DOM Manipulation
- DOM Traversal
- Event Handling
- Studi Kasus
*/
console.log("document");

/*
DOM TREE
DOM mewakili dokumen sebagai struktur pohon.
Elemen HTML menjadi simpul yang saling terkait di pohon.
Semua simpul di pohon itu memiliki semacam hubungan antara satu sama lain.
Node dapat memiliki node anak. Node pada tingkat pohon yang sama disebut saudara kandung.
Sebagai contoh, perhatikan struktur berikut:
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello User</h1>
    <a href=""></a>
    <script src="pengertianDOM.js"></script>
  </body>
</html>
Untuk contoh di atas:
<html> memiliki dua anak (<head>, <body>);
<head> memiliki satu anak (<title>) dan satu orang tua (<html>);
<title> memiliki satu orang tua (<head>) dan tidak memiliki anak;
<body> memiliki dua anak (<h1> dan <a>) dan satu orang tua (<html>);

STRUKTUR HIERARKI DOM
A. root node
- node yang menjadi sumber dari semua node lain di dalam DOM
- document

B. parent node 
- node yang berada 1 tingkat diatas node lain
- body adalah parent dari h1, p, p...

C. child node
- node yang berada 1 tingkat dibawah node yang lain
- h1 adalah child dari body
*/

// memanggi element aitu id kemudian isi di idnya di isi dengan hello aul
var elem = document.getElementById("p1");
elem.innerHTML = "hello aul";
