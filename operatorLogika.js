/*
       ======OPERATOR LOGIKA======
       - operator logika adalah operator untuk dua buah data boolean
       - hasil dari operator logika adalah boolean lagi
       | operator | keterangan |
       | &&       | dan        |
       | ||       | atau       |
       | !        | kebalikan  |

       OPERATOR &&
       | nilai 1 | operator | nilai 2 | hasil |
       |  true   | &&       | true    | true  | true bertemu true maka hasilnya true
       |  true   | &&       | false   | false | pokonya kalo ada falsenya hasilnya akan false
       | false   | &&       | true    | false |
       | false   | &&       | false   | false |

       OPERATOR UNARY !
       | operator | nilai 2 | hasil |
       | !        | true    | false |
       | !        | flase   | true  |
*/
const nilaiUjian = 90;
const nilaiAbsensi = 90;
console.log(nilaiUjian);

const lulusUjian = nilaiUjian > 75;
const lulusAbsensi = nilaiAbsensi > 75;
console.log(nilaiAbsensi);

const lulus = lulusUjian && lulusAbsensi;
console.log(lulus); //=> true karena 90 lebih besar dari nilai 75 maka ia lulus ujian
