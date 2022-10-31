// function memiliki fungsi untuk mempermudah dalam memanggil program
// function adalah fungsi yang dimana ketika kita ingin memanggil output maka yang kita panggil functionnya
function catGreeter() {
  console.log("hei cat you're a fine animal!");
  console.log("meowwww");
}
// run, call, invoke, execute
catGreeter();

// kenapa kita pake variable karena agar kita bias memakai berulang kali

function aul() {
  console.log("aulia keren");
}
aul();

function lia(name) {
  //=> perameter
  console.log("hey " + name + " kamu sangat brilliant!");
}
lia();

// array di function
function printerArray(manggo) {
  for (var i = 0; i <= manggo.length; i++) console.log(manggo[i]);
}
printerArray(["kucing", "kelinci", "rubah", "aulia"]);

function adder(num1, num2) {
  return num1 + num2;
}

var result = adder(2, 4) + 2;
console.log("The result is : " + result);

function score(team1, team2) {
  if (team1 >= 1) {
    console.log;
  }
}
