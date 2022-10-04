/*
       ======NaN (Not A Number)======
       - bagaimana jika ternyata string yang kita coba konversi ke number bukannlah data yang valid?
       - jika data string yang kita coba lakukan konversi bukanlah data yang valid, mkaa hasil dari konversi tersebut adalah NaN (Not A Number)
       - NaN adalah number spesial yang menyebutkanbahwa ini bukanlah number
       - jika NaN dioperasikan dengan data number lainnya, maka hasilnya akan menjadi NaN lagi
       */
// parseInt dan parseFloat mentolerir kesalahan
console.log(`${parseInt("salah")}`);
console.log(`${parseFloat("1.1text")}`);

//  number() tidak akan mentolerir kesalahan pada data
console.log(`${Number("1.1ups")}`);
console.log(`${Number("salah")}`);
console.log(`${Number("salah")}`);

// KODE OPERASI PADA NAN
const valueSatu = Number("salah");
const valueDua = 100;
const sumSatu = valueSatu + valueDua;
console.log(sumSatu);
