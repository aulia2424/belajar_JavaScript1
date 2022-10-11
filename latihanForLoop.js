// let i = 10;
// for (i = 10; i >= 1; i--) {
//   console.log(i);
// }

// console.log("\n");

// console.log("Patern Star");
// let delapan = 5;
// let STR = "";
// for (let b = 0; b < delapan; b++) {
//   // printing star
//   for (let c = 0; c < delapan - b; c++) {
//     STR += "*";
//   }
//   STR += "\n";
// }
// console.log(STR);

// for (var i = 1; i <= 5; i++) {
//   // kondisi pertama
//   for (var j = 1; j <= 5; j++) {
//     console.log(i); // yang di print  perulangan yang kedua
//   }
// }

console.log("Pattern Star");
let delapan = 5;
let STR = "";
for (let b = 0; b < delapan; b++) {
  // printing star
  for (let c = 0; c < delapan - b; c++) {
    STR += "*";
  }
  STR += "\n";
}
console.log(STR);
let BINTANG = "";
for (let i = 0; i <= 5; i++) {
  BINTANG += "*";
  console.log(BINTANG);
}

console.log("\n");
console.log("Diamond Pattern in Javascript");
let tiga = 5;
let diamond = "";
// Upside pyramid
for (let i = 1; i <= tiga; i++) {
  // printing spaces
  for (let j = tiga; j > i; j--) {
    diamond += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    diamond += "*";
  }
  diamond += "\n";
}
// downside pyramid
for (let i = 1; i <= tiga - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    diamond += " ";
  }
  // printing star
  for (let k = (tiga - i) * 2 - 1; k > 0; k--) {
    diamond += "*";
  }
  diamond += "\n";
}
console.log(diamond);

console.log("\n");

console.log("i love u pattern");
// Right Triangle Pattern + Downward Triangle Star Pattern
const bintangDua = "*";
const spasi = " ";
for (var baris = 5, bbintang = 1; baris > 0; baris--, bbintang++) {
  console.log(spasi.repeat(baris - 1) + bintangDua.repeat(bbintang));
}
for (var baris = 0, bbintang = 5; bbintang > 0; baris++, bbintang--) {
  console.log(bintangDua.repeat(bbintang) + spasi.repeat(baris));
}

console.log("\n");

// let a = 5;
// let star = "";
// for (let b = 0; b < a; b++) {
//   // printing star
//   for (let c = 0; c < a - b; c++) {
//     star += "*";
//   }
//   star += "\n";
// }
// console.log(star);

var d = 6;
var str = "";
for (let e = d / 2; e < d; e += 2) {
  // print first spaces
  for (let f = 1; f < d - e; f += 2) {
    str += " ";
  }
  // print first stars
  for (let f = 1; f < e + 1; f++) {
    str += "*";
  }
  // print second spaces
  for (let f = 1; f < d - e + 1; f++) {
    str += " ";
  }
  // print second stars
  for (let f = 1; f < e + 1; f++) {
    str += "*";
  }
  str += "\n";
}
// lower part
// inverted pyramid
for (let e = d; e > 0; e--) {
  for (let f = 0; f < d - e; f++) {
    str += " ";
  }
  for (let f = 1; f < e * 2; f++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);

let p = 5; // row or column count
// defining an empty string
let bintang = "";

for (var q = 1; q < p; q++) {
  // external loop
  for (var r = 0; r < p; r++) {
    // internal loop
    if (q === 0 || q === p - 1) {
      bintang += "*";
    } else {
      if (r === 0 || r === p - 1) {
        bintang += "*";
      } else {
        bintang += " ";
      }
    }
  }
  // newline after each row
  bintang += "\n";
}
// printing the string
console.log(bintang);

console.log("\n");
