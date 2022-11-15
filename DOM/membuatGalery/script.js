const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");
container.addEventListener("click", function (e) {
  // cek apakah yang di click adalah thumb jadi e target classname jika yang di click thumb maka class jumbo akan mengambil src dari class thumb.
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);
  } // jadi untuk menjalankan sebuah function kita kasi setTimeout nah kita beri waktu o.5 detik lalu kita menghapus class fade jadi fadenya ilang setelah kita click

  thumbs.forEach(function (thumb) {
    thumb.className = "thumb";
  }); // jadi thumb class name di isi dengan thumb lalu ketika kita klik kita tambahkan activenya

  e.target.classList.add("active");
});
