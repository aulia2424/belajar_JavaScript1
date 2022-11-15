/*document.qurySelector() artinya menanyakan mengenai selektor, selektor yang dimaksut adalah selektor css. Jadi ini hanya bisa mengubah 1 elemt saja.
 => element #1b */
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "30px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

// document.querySelectorAll() akan menguba semua element yg kita pilih ini kebalikan dari querySelector
const p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

/* DOM Manipulation Method
  - Manipulasi Elelment
  | element.innerHtml | fungsinya untuk mengubah isi dari htmlnya
  | element.style.<property> | fungsinya untuk merubah style / css dari element yang sudah kita seleksi
  | element.setAttribute() | fungsinya untuk memanipulasi attribute pada sebuah element
  | element.classList | fungsinya untuk mengelola Class
  | ... |
*/

//Manipulasi Element
const judul = document.getElementById("judul");
judul.innerHTML = "Buku Bacaan";

// element.style.<propertyCss>
const judul = document.querySelector("#judul");
judul.style.color = "lightblue";

// element.setAttribute() fungsinya untuk menambahkan atribute
const judul = document.getElementsByTagName("h1")[0];
const a = document.querySelector("section#a a");

/* element.classList
 - element.classList.add() fungsinya untuk menambahkan class.
 - element.classList.remove() fungsinya untuk menghilangkan class yang ada.
 - element.classList.toggle() fungsinya untuk jika suatu element belum mempunyai class maka akan di tambahkan jika sudah ada classnya maka akan di hapus.
 - element.classList.item() fungsinya untuk mengetahui class tertentu yang ada di sebuah element misal kita ingin mengetahui class ketiga dari sebuah element outputnya isi dari class yang kit cari.
 - element.classList.contains() fungsinya untuk mengecek dalam sebuh element punya gak class tertentu outputnya boolean.
 - element.classList.replace() fungsinya untuk mengganti class yang ada dengan class yang baru.
*/
const p2 = document.querySelector(".p2");
