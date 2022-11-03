// nomor 1
function latihan() {
  console.log("this is function");
}
latihan();

// nomor 2
var i = "team 1 win";
var x = "team 2 win";
var y = "draw";
function score(team1, team2) {
  if (team1 > team2) {
    return i;
  } else if (team2 > team1) {
    return x; // return = respon
  } else {
    return y;
  }
}
console.log(score(2, 3));

// nomor 3
function avg(a, b, c) {
  var d = (a + b + c) / 3;
  return d;
}
console.log(avg(3, 6, 9));

//function bisa di kasih repon, return itu bisa berupa perintah atau perhitungan
// jika js di beri return maka fungsinya berhenti

// 100 outputnya 1,1
// function converte(a, b) {}

// var amount = parseFloat(readLine(), 10);  parseFloat merubah nilai menjadi nilai float
// var rate = parseFloat(readLine(), 10);  parseFloat merubah nilai menjadi nilai float

/*
  argumen itu satu kesatuan dari parameter

  perbedaan function dan variable
  variable = hanya berisi satu variable
  function = bisa berisi beberapa parameters yang dimana argument adalah inputan terakhir biasanya di paling bawah 

  fuction itu reuse (bisa digunakan kembali)

  */
