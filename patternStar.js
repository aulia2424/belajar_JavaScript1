// Star patern
console.log("Left Triangle Pattern");
let stars = "";
for (let i = 0; i <= 10; i++) {
  stars += "*";
  console.log(stars);
}

console.log("\n");

// cara lain
console.log("cara dua");
for (let j = 1; j < 11; j++) {
  for (let k = 1; k <= j; k++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}

console.log("\n");

console.log("Square Star Pattern");
//Square Star Pattern
let n = 5; // row or column count
// defining an empty string
let string = "";

for (let m = 0; m < n; m++) {
  // external loop
  for (let o = 0; o < n; o++) {
    // internal loop
    string += "*";
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);

console.log("\n");

console.log("Hollow Square Pattern");
let p = 5; // row or column count
// defining an empty string
let bintang = "";

for (let q = 0; q < p; q++) {
  // external loop
  for (let r = 0; r < p; r++) {
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

console.log("Right Triangle Pattern");
let s = 5;
let String = "";
for (let t = 1; t <= s; t++) {
  // printing spaces
  for (let u = 0; u < s - t; u++) {
    String += " ";
  }
  // printing star
  for (let v = 0; v < t; v++) {
    String += "*";
  }
  String += "\n";
}
console.log(String);

console.log("\n");

console.log("Downward Triangle Star Pattern");
let a = 5;
let star = "";
for (let b = 0; b < a; b++) {
  // printing star
  for (let c = 0; c < a - b; c++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);

console.log("\n");
console.log("\n");
console.log("\n");

console.log("i         u");
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

console.log("\n");

console.log("Right Pascal Star Pattern");
let g = 5;
let bntng = "";
for (let h = 1; h <= g; h++) {
  for (let l = 0; l < h; l++) {
    bntng += "*";
  }
  bntng += "\n";
}
for (let h = 1; h <= g - 1; h++) {
  for (let l = 0; l < g - h; l++) {
    bntng += "*";
  }
  bntng += "\n";
}
console.log(bntng);

console.log("\n");

console.log("Left Pascal Star Pattern");
let w = 5;
let Bintang = "";
for (let i = 1; i <= w; i++) {
  for (let j = 0; j < w - i; j++) {
    Bintang += " ";
  }
  for (let k = 0; k < i; k++) {
    Bintang += "*";
  }
  Bintang += "\n";
}
for (let i = 1; i <= w - 1; i++) {
  for (let j = 0; j < i; j++) {
    Bintang += " ";
  }
  for (let k = 0; k < w - i; k++) {
    Bintang += "*";
  }
  Bintang += "\n";
}
console.log(Bintang);

console.log("\n");

console.log("Hourglass Star Pattern");
let satu = 5;
let Star = "";
// Reversed pyramid pattern
for (let i = 0; i < satu; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    Star += " ";
  }
  // printing star
  for (let k = 0; k < (satu - i) * 2 - 1; k++) {
    Star += "*";
  }
  Star += "\n";
}
// pyramid pattern
for (let i = 2; i <= satu; i++) {
  // printing spaces
  for (let j = satu; j > i; j--) {
    Star += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    Star += "*";
  }
  Star += "\n";
}
console.log(Star);

console.log("\n");

console.log("Hollow Diamond Pattern");
let dua = 5;
let START = "";
// Upside pyramid
// upside diamond
for (let i = 1; i <= dua; i++) {
  // printing spaces
  for (let j = dua; j > i; j--) {
    START += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    if (k === 0 || k === 2 * i - 2) {
      START += "*";
    } else {
      START += " ";
    }
  }
  START += "\n";
}
// downside diamond
for (let i = 1; i <= dua - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    START += " ";
  }
  // printing star
  for (let k = (dua - i) * 2 - 1; k >= 1; k--) {
    if (k === 1 || k === (dua - i) * 2 - 1) {
      START += "*";
    } else {
      START += " ";
    }
  }
  START += "\n";
}
console.log(START);

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

console.log("Hollow Pyramid Star Pattern");
let empat = 5;
let segitiga = "";

// External loop
for (let i = 1; i <= empat; i++) {
  // printing spaces
  for (let j = 1; j <= empat - i; j++) {
    segitiga += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    if (i === 1 || i === empat) {
      segitiga += "*";
    } else {
      if (k === 0 || k === 2 * i - 2) {
        segitiga += "*";
      } else {
        segitiga += " ";
      }
    }
  }
  segitiga += "\n";
}
console.log(segitiga);

console.log("\n");

console.log("Reversed Pyramid Star Pattern");
let lima = 5;
let piramidTerbalik = "";
// External loop
for (let i = 0; i < lima; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    piramidTerbalik += " ";
  }
  // printing star
  for (let k = 0; k < 2 * (lima - i) - 1; k++) {
    piramidTerbalik += "*";
  }
  piramidTerbalik += "\n";
}
console.log(piramidTerbalik);

console.log("\n");

console.log("Javascript Pyramid Pattern");
let enam = 5;
let piramid = "";
// External loop
for (let i = 1; i <= enam; i++) {
  // printing spaces
  for (let j = 1; j <= enam - i; j++) {
    piramid += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    piramid += "*";
  }
  piramid += "\n";
}
console.log(piramid);

console.log("\n");

console.log("Hollow Triangle Star Pattern");
let tujuh = 6;
let segitigaSikuSiku = "";

for (let i = 1; i <= tujuh; i++) {
  // printing star
  for (let j = 0; j < i; j++) {
    if (i === tujuh) {
      segitigaSikuSiku += "*";
    } else {
      if (j == 0 || j == i - 1) {
        segitigaSikuSiku += "*";
      } else {
        segitigaSikuSiku += " ";
      }
    }
  }
  segitigaSikuSiku += "\n";
}

console.log(segitigaSikuSiku);

console.log("\n");

console.log("Pattern Aul");
//
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
