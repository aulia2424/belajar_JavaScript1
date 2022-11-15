/* Dom Traversal (Penelusuran DOM #5)
 */

// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

//Dom Traversalnya yaitu parentElement
// const close = document.querySelectorAll(".close");
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // close[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//   });
// }  jadi tolong carcikan selector di clas close terus kita bikin perulangan, variable i nya 0, i lebih kecil dari close yg palng akhir, terus di variable kita kasih evemtListener click ketika di click maka js mencari parent dari class close yaitu (card) kemudian ketika di click cardnya ilang / none.

// ini yang lebih simplemenggunakan forEach
// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.stopPropagation(); // fungsinya untuk menghentikan popup ok jadi kita ingin mengabaikan popup.
//   });
// });

/* DOM Traversal Method
 1. parentNode hasilnya node
 2. parentElement hasilnya element
 3. nextSibling hasilnya node
 4. nextElementSibling hasilnya element
 5.previousSibling hasilnya node
 6. previousElementSibling hasilnya element
*/
// kita mencari saudara dari element nama kan orng tuanya si card nah anak anaknya berati dari nama-close
// const nama = document.querySelector(".nama");
// console.log(nama.nextElementSibling.nextElementSibling);

// PreventDevault
// jika kita ingin menghentikan aksi default mka kita tinggal menggunakan preventDefault.

/* Event Bubbling
 */
// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

// INI ADALAH CARA YANG LEBIH BENAR
const close = document.querySelectorAll("card");
const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefaultt();
  }
});
