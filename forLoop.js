/* For Loop
       - For adalah salah satu kata kunci yang bisa digunakan untuk melakukan perulangan.
       - Blok kode yang terdapat di dalam for akan selalu diulangi selama kondisi for terpenuhi, jika kondisi tdk terpenuhi maka perulangan tersebut berhenti.
       - Syntax Perulangan For
        for(init statement;kondisi;post statement) {
          //blok perulangan
        }
        1. init statement akan dieksekusi hanya sekali diawal sebelum perulangan.
        2. Kondisi akan dilakukan pengecekkan dalam setiap perulangan, jika true perulangan akan dilakukan. Jika false perulangan akan berhenti.
        3. Post statement akan dieksekusi setiap kali diakhir perulangan
        4. Init statement, Kondisi dan Post Statement tidak wajib diisi, jika kondisi tidak diisi, berarti kondisi selalu bernilai true
      */
/* Contoh Perulangan Tanpa Henti
        for (; ;) {
          alert("For Loop");
        }
      */
console.log("-For Loop-");
//  artinya akan mengulang dari 1 sampai ke sepuluh karena kurang dari sama dengan 10
let counter = 1;
for (; counter <= 10; ) {
  console.log(`Perulangan Ke ${counter}`);
  counter++; // ini increment fungsinya agar perulangan bertambah dari 1 - 10
}

console.log("\n");

console.log("-Perulangan Dengan Init Statement-");
for (let konter = 1; konter <= 10; ) {
  console.log(`Perulangan urutan ke ${konter}`);
  konter++;
}

console.log("\n");

console.log("-Perulangan Dengan Post Statement-");
for (let kontak = 1; kontak <= 10; kontak++) {
  console.log(`Perulangan Ke ${kontak}`);
}

function iban(aul, roko) {
  this.aul = aul;
  this.roko = roko;
  return aul + roko;
}
var iban1 = new iban("pacar 1", "pacar 2");
console.log(iban1);
