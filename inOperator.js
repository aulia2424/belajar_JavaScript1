/* In Operator
       - In Opetaror adalah Operator yang bisa dilakukan mengecek apakah sebuah property ada di dalam object atau tidak
       - jika proprty tersebut ada di object,maka hasilnya true sedangkan jika tidak, maka hasilnya false
       - Tidak hanya object, In juga bisa digunakan untuk mengecek index di array

       In Operator hanya akan mengecek apakah sebuah property atau index ada atau tidak.
       Jadi walaupum nilai property atau indexnya undefined atau null, maka tetap akan di anggap ada
*/
const manusia = {
  firstName: "bocil",
  lastName: "Brielliant",
};
if ("firstName" in manusia) {
  console.log(`i love you ${manusia.firstName}`);
} else {
  console.log("lov u");
}
