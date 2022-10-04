/* 
=====ALERT, PROMPT, DAN CONFIRM======
- js memiliki fitur yang bernama alert,prompt dan confirm
- alert digunakan untuk memberi peringatan berupa popup text di browser
- prompt digunakan untuk meminta input string dari pengguna browser dalam bentuk popup input text
- sedangkan confirm digunakan untuk meminta input boolean dari penggina browser dalam bentuk popup input pilihan.
*/
// Alert
alert("selamat datang aul slebew");

// Prompt
const nama = prompt("apakah aul ratu pantai selatan?");
alert(`hai ${"ratu pantai selatan"}`);

// Confirm
const masuk = confirm("apakah kamu keturunan ibu peri");
if (masuk) {
  const name = prompt("siapa nama ibu kamu?");
  alert(`halo anak ibu ${name}`);
} else {
  alert("babayyyyy");
}
