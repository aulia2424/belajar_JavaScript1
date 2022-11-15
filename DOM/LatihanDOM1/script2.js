function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!"; // jika player dan komputer memilih yang sama maka akan seri.
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH"; // jika player memilih gajah dan komputer memilih orang maka outputnya menang, tapi jika komputer tidak memilih orang maka kita kalah.
  if (player == "orang") return comp == "gajah" ? "KALAH" : "MENANG!"; // jika kita memilih orang dan komputer memilih gajah maka player kalah tetapi jika komputer memilih seain gajah maka player menanng.
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG!"; // jika player memilih semut dan komputer memilih orang maka player kalah, tetapi jika komputer tidak memilih orang/ selain orang maka kita menang.
}

// untuk membuat pilihan komputer gambarnya muter dlu sebelum di pilih
function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime(); // untuk mendapatkan waktu saat itu juga.
  setInterval(function () {
    // setInterval adalah fungsi untuk meakukan sesuatu secara berulang ulang ini di jalankan selama  0,1 detik.
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval; // jika waktu mulainya lebih dari 1000 mili second maka pemutarannya akan berhenti
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) {
      i = 0; // jadi jika gambar yg ketiga telah di putar maka akan di ulang lagi dari gambar pertama.
    }
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();
    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

// ini buat gajah
// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
