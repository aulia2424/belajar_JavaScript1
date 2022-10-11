var pilihan = 2;
/*
1. light
2. dark
3. nocture
4. terminal
5. indigo
*/

// cara 1 menggunakan if
if (pilihan == 1) {
  console.log("light");
} else if (pilihan == 2) {
  console.log("dark");
} else if (pilihan == 3) {
  console.log("nocture");
} else if (pilihan == 4) {
  console.log("terminal");
} else {
  console.log("indigo");
}

// cara 2 memakai switch statement
switch (pilihan) {
  case 1:
    console.log("light");
    break;
  case 2:
    console.log("dark");
    break;
  case 3:
    console.log("nocture");
    break;
  case 4:
    console.log("terminal");
    break;
  default:
    console.log("indigo");
}

// cara 3 menggunakan ternary operator fungsinya untuk mempermudah if else statement jadinya oneline lebih efisien
console.log(pilihan == 1 ? "light" : pilihan == 2 ? "dark" : pilihan == 3 ? "nocture" : pilihan == 4 ? "terminal" : "indigo");
