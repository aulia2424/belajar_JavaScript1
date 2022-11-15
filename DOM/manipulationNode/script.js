/* Manipulasi Node #2
 - document.createElement()
 - document.createTextNode()
 - node.appenChild()
 - node.insertBefore()
 - parentNode.removeChild()
 - parentNode.replaceChild()
*/

/* Manipulasi Node (method baru)
 - parentNode.append() untuk menambahkan element di akhir element
 - parentNode.prepend() untuk menambahkan element di awal element
 - childNode.before() ini fungsinya seperti insert before
 - childNode.after() ini fungsinya seperti insert after
 - chidNode.remove() ini fungsinya seperti removeChild
 - childNode.replaceWith() ini fungsinya seperti replaceChild
*/

// Membuat Element
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf Baru");

// functionnya di satukan
pBaru.appendChild(teksPBaru); // artinya JS tolong ambilin dunftion yg tadi lalu tambahkan child di dalamnnya yaitu textBaru

// menyimpan pBaru di akhir Section
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("Item Baru");
liBaru.appendChild(teksLiBaru);

// membuat li item baru
const ul = document.querySelector("section#b ul"); // artinya dokument tolong carikan yang ada di section b yaitu ul.
const li2 = ul.querySelector("section#b ul li:nth-child(2)"); // artinya cari li yang dimana dia anak kedua dari ul.

ul.insertBefore(liBaru, li2); // artinya simpan sebelum element li2

// remove class
const link = document.getElementsByTagName("a")[0]; // artinya tolong carikan element yang tagnya a. Ini memenggil parent.
sectionA.removeChild(link); // panggil sectionA lalu hilangkan yang ada di dalamnya yaitu link.

// replace
const sectionB = document.getElementById("b"); // artinya js tolong carikan element yang idnya b. Ini memanggil parentnya.
const p4 = sectionB.querySelector("p"); // ini menangkap element

const h2Baru = document.createElement("h2"); // membuat element baru.
const teksH2Baru = document.createTextNode("Judul Baru!");

h2Baru.appendChild(teksH2Baru); // fungsinya untuk memasukan judul.

sectionB.replaceChild(h2Baru, p4); //untuk mengganti p4 menjadi Judu baru.

// ini yang di modifikasi
pBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
