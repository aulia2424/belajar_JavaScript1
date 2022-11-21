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

// untuk membuat atau create element
const h2 = document.createElement("h2");
const isiH2 = document.createTextNode("Item Box");
h2.appendChild(isiH2);
const sectionB = document.getElementById("b");
sectionB.appendChild(h2);

// untuk merubah warna jadi di set menggunakan set interval
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

const h3 = document.createElement("h3");
const isiH3 = document.createTextNode("Login");
h3.appendChild(isiH3);
const sectionA = document.getElementById("a");
sectionA.appendChild(h3);
h3.style.textAlign = "center";

/*
HTML DOM Events
| EVENT                | DESCRIPTION                                                                                                                               | BELONGS TO |
| abort()              | terjadi ketika pemuatan media dibatalkan                                                                                                  | UiEvent, Event |
| afterprint()         | event terjadi saat halaman mulai dicetak, atau jika kotak dialog cetak telah ditutup                                                      | Event |
| animationend()       | terjadi ketika animasi CSS telah selesai                                                                                                  | AnimationEvent |
| animationiteration() | event terjadi ketika animasi CSS diulang                                                                                                  | AnimationEvent |
| animationstart()     | event terjadi ketika animasi CSS telah dimulai                                                                                            | AnimationEvent |
| beforeprint()        | event terjadi ketika halaman akan dicetak                                                                                                 | Events |
| beforeunload()       | event terjadi sebelum dokumen akan diturunkan                                                                                             | UiEvent, Event |
| blur()               | event terjadi ketika elemen kehilangan fokus                                                                                              | FocusEvent |
| canplay()            | event terjadi saat browser dapat mulai memutar media (saat sudah cukup buffer untuk memulai)                                              | Event |
| canplaythrough()     | Acara tersebut terjadi ketika browser dapat memutar melalui media tanpa berhenti untuk buffering                                          | Event |
| change()             | Acara terjadi ketika konten elemen formulir, pemilihan, atau status yang dicentang telah berubah (untuk <input>, <pilih>, dan <textarea>) | Event |
| click()              | event terjadi ketika pengguna mengklik suatu elemen                                                                                       | MouseEvent |
| contextmenu()        | event terjadi ketika pengguna mengklik kanan pada elemen untuk membuka menu konteks                                                       | MouseEvent |
| copy()               | event terjadi ketika pengguna menyalin konten elemen                                                                                      | ClipboardEvent |
| cut()                | event terjadi saat pengguna memotong konten suatu elemen                                                                                  | ClipboardEvent |
| dblclick()           | event terjadi ketika pengguna mengklik dua kali pada suatu elemen                                                                         | MouseEvent |
| drag()               | event terjadi ketika sebuah elemen sedang diseret                                                                                         | DragEvent |
| dragend()            | Acara terjadi ketika pengguna selesai menyeret elemen                                                                                     | DragEvent |
| dragenter()          | Acara terjadi ketika elemen yang diseret memasuki target jatuhkan                                                                         | DragEvent |
| dragleave()          | event terjadi ketika elemen yang diseret meninggalkan target lepas                                                                        | DragEvent |
| dragover()           | event terjadi ketika elemen yang diseret melebihi target jatuhkan                                                                         | DragEvent |
| dragstart()          | event terjadi saat pengguna mulai menyeret elemen                                                                                         | DragEvent |
| drop()               | event terjadi ketika elemen yang diseret dijatuhkan pada target jatuhkan                                                                  | DragEvent |
| durationchange()     | event terjadi ketika durasi media diubah                                                                                                  | Event |
| ended()              | Acara terjadi ketika media telah mencapai akhir (berguna untuk pesan seperti "terima kasih telah mendengarkan")                           | Event |
| error()              | event terjadi ketika kesalahan terjadi saat memuat file eksternal                                                                         | ProgressEvent, UiEvent, Event |
| focus()              | Acara terjadi ketika elemen mendapat fokus                                                                                                | FocusEvent |
| focusin()            | event terjadi ketika sebuah elemen akan mendapatkan fokus                                                                                 | FocusEvent |
| focusout()           | event terjadi ketika sebuah elemen akan kehilangan fokus                                                                                  | FocusEvent |
| fullscreenchange()   | event terjadi saat elemen ditampilkan dalam mode layar penuh                                                                              | Event |
| fullscreenerror()    | Acara terjadi ketika elemen tidak dapat ditampilkan dalam mode layar penuh                                                                | Event |
| hashchange()         | event ini terjadi bila ada perubahan pada bagian jangkar URL                                                                              | HashChangeEvent |
| input()              | Acara terjadi ketika elemen mendapat input pengguna                                                                                       | InputEvent, Event |
| invalid()            | event terjadi ketika elemen tidak valid                                                                                                   | Event |
| keydown()            | event terjadi ketika pengguna menekan tombol                                                                                              | KeyboardEvent |
| keypress()           | event terjadi ketika pengguna menekan tombol                                                                                              | KeyboardEvent |
| keyup()              | event terjadi ketika pengguna melepaskan kunci                                                                                            | KeyboardEvent |
| load()               | event terjadi ketika sebuah objek telah dimuat                                                                                            | UiEvent, Event |
| loadeddata()         | event terjadi saat data media dimuat                                                                                                      | Event |
| loadedmetadata()     | event terjadi saat meta data (seperti dimensi dan durasi) dimuat                                                                          | Event |
| loadstart()          | event terjadi saat browser mulai mencari media yang ditentukan                                                                            | ProgressEvent |
| message()            | event terjadi ketika pesan diterima melalui sumber acara                                                                                  | Event |
| mousedown()          | event terjadi ketika pengguna menekan tombol mouse di atas elemen                                                                         | MouseEvent |
| mouseenter()         | event terjadi ketika penunjuk dipindahkan ke elemen                                                                                       | MouseEvent |
| mouseleave()         | event terjadi ketika pointer dipindahkan dari elemen                                                                                      | MouseEvent |
| mousemove()          | event terjadi ketika penunjuk bergerak saat berada di atas elemen                                                                         | MouseEvent |
| mouseover()          | event terjadi saat penunjuk dipindahkan ke elemen, atau ke salah satu turunannya                                                          | MouseEvent |
| mouseout()           | event terjadi saat pengguna memindahkan penunjuk tetikus keluar dari suatu elemen, atau keluar dari salah satu turunannya                 | MouseEvent |
| mouseup()            | event terjadi ketika pengguna melepaskan tombol mouse di atas elemen                                                                      | MouseEvent |
| mousewheel()         | Tidak digunakan lagi. Gunakan acara roda sebagai gantinya                                                                                 | WheelEvent |
| offline()            | event tersebut terjadi saat browser mulai bekerja secara offline                                                                          | Event |
| online()             | Acara tersebut terjadi saat browser mulai bekerja online                                                                                  | Event |
| open()               | event terjadi saat sambungan dengan sumber event dibuka                                                                                   | Event |
| pagehide()           | event terjadi saat pengguna keluar dari halaman web                                                                                       | PageTransitionEvent |
| pageshow()           | event terjadi saat pengguna menavigasi ke halaman web                                                                                     | PageTransitionEvent |
| paste()              | event terjadi saat pengguna menempelkan beberapa konten dalam suatu elemen                                                                | ClipboardEvent |
| pause()              | event terjadi saat media dijeda baik oleh pengguna atau secara terprogram                                                                 | Event |
| play()               | event terjadi saat media telah dimulai atau tidak lagi dijeda                                                                             | Event |
| playing()            | The event occurs when the media is playing after having been paused or stopped for buffering                                              | Event |
| popstate()           | event terjadi ketika riwayat jendela berubah                                                                                              | PopStateEvent |
| progress()           | event terjadi saat browser sedang dalam proses mendapatkan data media (mengunduh media)                                                   | Event |
| ratechange()         | event terjadi ketika kecepatan pemutaran media diubah                                                                                     | Event |
| resize()             | event terjadi saat tampilan dokumen diubah ukurannya                                                                                      | UiEvent, Event |
| reset()              | event terjadi ketika formulir direset                                                                                                     | Event |
| scroll()             | event terjadi ketika bilah gulir elemen sedang digulir                                                                                    | UiEvent, Event |
| search()             | event terjadi saat pengguna menulis sesuatu di kolom pencarian (untuk <input="search">)                                                   | Event |
| seeked()             | event terjadi saat pengguna selesai berpindah/melompat ke posisi baru di media                                                            | Event |
| seeking()            | event terjadi saat pengguna mulai berpindah/melompat ke posisi baru di media                                                              | Event |
| select()             | Acara terjadi setelah pengguna memilih beberapa teks (untuk <input> dan <textarea>)                                                       | UiEvent, Event |
| show()               | event terjadi ketika elemen <menu> ditampilkan sebagai menu konteks                                                                       | Event |
| stalled()            | event terjadi saat browser mencoba mendapatkan data media, tetapi data tidak tersedia                                                     | Event |
| storage()            | event terjadi saat area Penyimpanan Web diperbarui                                                                                        | StorageEvent |
| submit()             | Acara terjadi ketika formulir dikirimkan                                                                                                  | Event |
| suspend()            | Acara tersebut terjadi saat browser dengan sengaja tidak mendapatkan data media                                                           | Event |
| timeupdate()         | The event occurs when the playing position has changed (like when the user fast forwards to a different point in the media)	             | Event |
| toggle()             | event terjadi saat pengguna membuka atau menutup elemen <details>                                                                         | Event |
| touchcancel()        | event terjadi ketika sentuhan terputus                                                                                                    | TouchEvent |
| touchend()           | event tersebut terjadi saat jari dikeluarkan dari layar sentuh                                                                            | TouchEvent |
| touchmove()          | event terjadi saat jari diseret melintasi layar                                                                                           | TouchEvent |
| touchstart()         | event tersebut terjadi saat jari diletakkan di layar sentuh                                                                               | TouchEvent |
| transitionend()      | event terjadi ketika transisi CSS telah selesai                                                                                           | TouchEvent |
| unload()             | Acara terjadi setelah halaman dibongkar (untuk <body>)                                                                                    | UiEvent, Event |
| volumechange()       | Acara terjadi ketika volume media telah berubah (termasuk menyetel volume ke "bisu")                                                      | Event |
| waiting()            | event terjadi saat media dijeda tetapi diharapkan untuk dilanjutkan (seperti saat media dijeda untuk menyangga lebih banyak data)         | Event |
| wheel()              | Acara terjadi setelah halaman dibongkar (untuk <body>)                                                                                    | UiEvent, Event |
| unload()             | event terjadi ketika roda mouse berputar ke atas atau ke bawah pada suatu elemen                                                          | WheelEvent |

HTML DOM Event Properties and Methods
| Property/Method	| Description	| Belongs To |
*/

const button = document.querySelector(".button");
button.addEventListener("click", () => {
  console.log("tombol pertama di click");
});
button.addEventListener("click", () => {
  console.log("tombol kedua di click");
});
