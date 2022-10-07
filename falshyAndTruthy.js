/* 
 Falsy
       -Falsy atau falsey, adalah value yang ketika dalam konteks boolean, dianggap false.
       -Ini adalah salah satu fitur unik dari Js, yang beruguna, namun kadang juga sering membingungkan.
       -Jadi di Js, kondisi itu tidak hanya bisa boolean,tapi diluar boolean pun bisa, namun kita harus tau beberapa data falsy/ di anggap false.
      
 Data Falsy
       | Data dianggap Falsy | Keterangan                         |
       | false               | Boolean false                      |
       | 0,-0                | Numberr 0 dan -0 dianggap false    |
       | '',"",``            | Semua string kosong dianggap false |
       | null                | null dianggap false                |
       | undefined           | undefined dianggap false           |
       | NaN                 | Not a Number dianggap false        |
      

 Truthy
       - Truthy adalah kebalikkan dari Falsy, dimana datanya dianggap bernilai true.
       - Sederhana sekali sebenarnya untuk mengetaui sebuah data itu adalah truthy, yaitu data yang bukan bernilai Falsy.
       kalo misal isi datanya array dan objek kosong maka bernilai true [] {} = true
*/
console.log("-Falsy dan Truthy-");
let data1 = ""; // karena stringnya kosong maka outputnya FALSE.
if (data1) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}
