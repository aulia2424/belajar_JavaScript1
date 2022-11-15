/*  DOM Events
 Event pada JS mempresentasikan sebuah kejadian yang terjadi di dalam DOM kaya ketika kita mengklik tombol/ mouse event, keyboard event dll.
 ketika kita menjalankan animasi di dalam css dan kita bisa menangkap kejadian / Events.
*/

/* Cara mendengarkan Event
 1. Event Handler menggunakan on kemudian diikuti dengan event
   - Inline HTML attribute
   - Element method
 2. addEventListener()
 
 Perbedaanya Event Handler dan addEventListener     
 - Event Handler merupakan cara lama jika kita melakukan perubahab menggunakan Event Handler maka perubahan yang dilakukan akan menimpa perubahan sebelumnya.
 - addEventListener jika kita melakukan perubahan maka tidak akan menimpa perubahan sebelumnya malah akan menambah perubahan.

 Daftar Event
 1. Mouse Event (ketika kita menggeser mouse / pointer/ mengklik)
   - click
   - dblclick
   - mouseover
   - mouseenter
   - mouseup
   - whee1
 2. Keyboard Event
   - keydown
   - keypress
   - keyup
 3. Resources Event (ketika halamannya di load)
 4. Focus Event (ketika kita membuat form)
 5. View Event
   - resize
   - scroll
 6. Form Event
   - reset 
   - submit
 7. CSS Animation & Transition Event
 8. Drag & Drop Event
*/

// event handler
// jika p3 di click maka warna akan berubah
const p3 = document.querySelector(".p3");
function ubahWarnaP3() {
  p3.style.backgroundColor = "lightblue";
}
p3.onclick = ubahWarnaP3;

function ubahWarnaP2() {
  p2.style.backgroundColor = "lightblue";
}

const p2 = document.querySelector(".p2");
p2.onclick = ubahWarnaP2;

// addEventListener
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  // js cari element p4 lalu ketika ada event click lakukan sesuatu lalau tambahkan parameter kedua
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const teksLiBaru = document.createTextNode("Item Baru");
  liBaru.appendChild(teksLiBaru);
  ul.appendChild(liBaru);
}); // jadi kita membuat variable p4 lalu kita memanggil selektor p yang ada di section b, kemudian kita memberi perintah ketika kita clik p4 maka akan menambahkan item baru.
// ambil parent , bikin element , di rangkai lalu di simpan

/*
APA PERBEDAAN EVENT HANDLER DAN ADDEVENTLISTENER

- event hanlder merupakan cara lama, perbedaannya adalah ketika kita memberi satu perubahan pada sebuah event, jika kita menggunakan event handler maka perubahan yang dilakukan akan menimpa perubahan yang sebelumnya, sedangkan addeventlistener menambahkan perubahannya jadi tidak menimpa perubahan sebelumnya

*/

// menggunakan event handler, jadi ditimpa jadi dia tidak perduli oleh onclick yang pertama
// p3.onclick = function () {
//   p3.style.backgroundColor = "lightblue";
// };
// p3.onclick = function () {
//   p3.style.color = "red";
// };

// menggunakan addEventListener
// p3.addEventListener("dblclick", function () {
//   p3.style.backgroundColor = "lightblue";
// });
// p3.addEventListener("click", function () {
//   p3.style.color = "black";
// });

/*
Daftar Event
 1. Mouse Event (ketika kita menggeser mouse / pointer/ mengklik)
   - click
   - dblclick
   - mouseover
   - mouseenter
   - mouseup
   - whee1
 2. Keyboard Event
   - keydown
   - keypress
   - keyup
 3. Resources Event (ketika halamannya di load)
 4. Focus Event (ketika kita membuat form)
 5. View Event
   - resize
   - scroll
 6. Form Event
   - reset 
   - submit
 7. CSS Animation & Transition Event
 8. Drag & Drop Event
 - tentukan dlu element mana yang mau di kasi Event.
 - lalu kita pilih eventnya mau apa.
 - lalu jalankan functionnya.
*/
// mouseenter
const p1 = document.querySelector(".p1");
p1.addEventListener("mouseenter", function () {
  p1.style.backgroundColor = "lightblue";
});

// mouseleave
p1.addEventListener("mouseleave", function () {
  p1.style.backgroundColor = "white";
});

// dblclick
const judul = document.getElementById("judul");
judul.addEventListener("dblclick", function () {
  judul.style.backgroundColor = "pink";
});

// dblclick
const h2 = document.createElement("h2");
const isiH2 = document.createTextNode("Item Box");
h2.appendChild(isiH2);
const sectionB = document.getElementById("b");
sectionB.appendChild(h2);

setInterval(function () {
  h2.style.backgroundColor = "pink";
  h2.style.color = "purple";
  h2.style.textAlign = "center";
  setTimeout(function () {
    h2.style.backgroundColor = "purple";
    h2.style.color = "pink";
    h2.style.textAlign = "center";
  }, 500);
}, 1000);
