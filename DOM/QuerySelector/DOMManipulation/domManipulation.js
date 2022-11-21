/*
DOM MANIPULATION METHOD
- manipulasi element
- manipulasi node 

MANIPULASI ELEMENT
- element.innerHTML (untuk mengganti element di html menggunakan dom)
- element.style.<property>
- element.setAttribute()
- element.classList
- element.getAttribute() untuk mengambil attribute
- element.setAttribute() untuk membuat atribute
- element.removeAttibute() untuk menghapus attribut

judul.innerHTML = "<em>aulia martha briellant</em>";
const sectionA = document.querySelector("section#a");  carikan saya section ayng idnya a
sectionA.innerHTML = "hello world";  semua yang ada di dalam section a terganti menjadi helloworld
*/

// DOM MANIPULATION
// const judul = document.querySelector("#judul"); //jadi di seleksi dulu mana yang mau dipilih
// judul.style.color = "lightblue"; // jadi kita meng edit setelah elemet di seleksi
// judul.innerHTML = "aulia martha brielliant"; // untuk merubah isi html
// judul.style.textAlign = "center";
// judul.setAttribute("name", "aulia"); // menambahkan atribut name ber value aulia, yang bentuknya inline
// judul.removeAttribute("name"); // untuk menghapus attribut name

// const b = document.querySelector("#b");
// b.style.color = "lightgreen";

/*
ELEMENT UNTUK MENGELOLA CLASS
- element.classList.add() untuk menambahkan class baru
- element.classList.remove() untuk menghilangkan class yang ada
- element.classList.toogle() untuk menambahkan class ketika belum memiliki class, menghilangkan class ketika sudah memiliki class 
- element.classList.item() untuk mengetahui class tertentu
- element.classList.contains() untuk mengecek bah element tersebut nya gak class tertenti
- element.classList.replace() untuk memindahkan ke class yang baru
*/
// const a = document.querySelector("#a");
// a.classList.add("satu"); // menambahkan class yang valuenya name
// a.classList.add("dua"); // menambahkan class yang valuenya name
// a.classList.remove("name"); // menghilangkan class yang valuenya name
// a.classList.toggle("name");
// a.classList.item(2); //untuk mencari urutan clas keberapa

/*
DOM MANIPULATION PART 2

MANIPULASI NODE 
- document.createElement()
- document.createTextNode()
- node.appendChild() menambahkan 
- node.insertBefore()
- parentNode.removeChild()
- parentNode.replaceChild()
...
*/
// document.createElement(""); and document.createTextNode("");
// const pBaru = document.createElement("p");
// const textPBaru = document.createTextNode("Paragraf Baru");
// pBaru.appendChild(textPBaru);
// const sectionA = document.getElementsById("a");
// sectionA.appendChild(pBaru);

// insertBefore
// const liBaru = document.createElement("li");
// const textLiBaru = document.createTextNode("li baru");
// liBaru.appendChild(textLiBaru);

// const ul = document.querySelector("section#b ul");
// const li2 = ul.querySelector("li:nth-child(2)");
// ul.insertBefore(liBaru, li2);

// const link = document.getElementsByTagName("a")[0];
// sectionA.removeChild(link);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");
const h2Baru = document.createElement("h2");
const textH2Baru = document.createTextNode("judul h2 Baru");

// ibanganteng @aulcanttik
