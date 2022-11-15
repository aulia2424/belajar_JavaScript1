/*
DOM SELECTION
- document.getElementById("") = kita memilih element yang ada di dalam dom kita berdasarkan id (html collection)
- document.getElementByTagName("") = js tolong carikan elemnt element yang berdasarkan tagname (jamak) (html collection) memakai array
- document.getElementsByClassName("") = js tolong carikan element berdasarkan nama classnya (jamak) (html collection)
- document.querySelector("") = untuk mencari element berdasaran selectornya (node list)
- document.querySelectorAll("") = untuk mencari element berdasaran selectornya (node list)
*/
// document.getElementById("")
// const judul = document.getElementById("judul"); // diseleksi dahulu idnya
// judul.style.color = "purple"; // otomatis menambahkan inline css
// judul.style.backgroundColor = "pink";
// judul.innerHTML = "aulia martha brielliant";

// // document.getElementByTagName("")
// const p = document.getElementsByTagName("p"); // menyeleksi tag p menggunakan forloop
// for (let i = 0; i <= 4; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }
// // array tidak bisa di seleksi, jadi jika array maka memakai index ke berapa atau memakai for loop agar lebih mudakh

// // menyeleksi berdasarkan nama tag yaitu h1 index ke 0 kemudian ubah fontnya menjadi sans-serif
// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontFamily = "comic sans";

// // document.getElementsByClassName("")
// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "auia";

// DOM SELECTION PART 2
// document.querySelector("")
// const p4 = document.querySelector("#b p"); // menyeleksi selektor id b yang isinya p
// p4.style.color = "darkblue";
// p4.style.fontSize = "30px";

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "pink";

// // kita kaan punya tag p banyak kemudian kita ingin uabh semua isinya, kenapa yang ke ubah satu doang, karena querySelector hannya memilih satu element, yaitu element pertama, bagaimana agar terubah semua? dengan cara menggunakan querySelectorAll
// const p = document.querySelector("p");
// p.innerHTML = "diubah dari javascript";

// document.querySelectorAll("")
// const p = document.querySelectorAll("p");
// for (let i = 0; i <= p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

// pilih selektor dari section yang idnya b, kemudian yang berada di section b ambil element berdasarkan tag name yaitu p yang indexnya 0, kemudian di beri background color = pink
const sectionB = document.querySelector("section#b");
const p4 = sectionB.getElementsByTagName("p")[0];
p4.style.backgroundColor = "pink";
