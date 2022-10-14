/*
      /=====OPERATOR MATEMATIKA======
       - js mendukung banyak operator matematika untuk tipe data number, seperti :
       - operator aritmatika
       - operator Augmented Assignments
       - operator Unary
       - dan lain-lain
       | oprator | keterangan  |
       | +       | pertambahan |
       | -       | pengurangan |
       | *       | perkalian   |
       | **      | Exponensial |
       | /       | pembagian   |
       | %       | sisa bagi   |
      */

let result = 1 + 2;
console.log("1 + 2 = " + result); //=> 1 + 2 lalu ita panggil variable hasilnya = 3
let originalResult = result;

result = result - 1;
console.log(originalResult + " - 1 = " + result); //=> result tadi yatu 3 - 1 lalu ita panggil variable hasilnya = 2
originalResult = result;

result = result * 2;
console.log(originalResult + " * 2 = " + result); //=> keadaan terakhir yaitu 2 * 2 lalu ita panggil variable hasilnya = 4
/*
                OPERATOR AUGMENTED ASSINGNMENTS
       | operator matematika   | operator augmented assignments |
       | results = result + 10 | result += 10                   |
       | result = result - 10  | result -= 10                   |
       | result = result * 10  | result *= 10                   |
       | result = result ** 10 | result **= 10                  |
       | result = result / 10  | result /= 10                   |
       | result = result % 10  | result %= 10                   |
     */
let resultDua = 10;
resultDua += 10;
document.writeln("<p>" + resultDua + "</p>");

resultDua -= 10;
document.writeln("<p>" + resultDua + "</p>");

resultDua *= 10;
document.writeln("<p>" + resultDua + "</p>");

resultDua **= 10;
document.writeln("<p>" + resultDua + "</p>");

resultDua /= 10;
document.writeln("<p>" + resultDua + "</p>");

resultDua %= 10;
document.writeln("<p>" + resultDua + "</p>");
