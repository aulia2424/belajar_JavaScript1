/* Manipulasi Node
 - document.createElement()
 - document.createTextNode()
 - node.appenChild()
 - node.insertBefore()
 - parentNode.removeChild()
 - parentNode.replaceChild()
*/

// Membuat Element
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf Baru");

// functionnya di satukan
pBaru.appendChild(textBaru); // artinya JS tolong ambilin dunftion yg tadi lalu tambahkan child di dalamnnya yaitu textBaru

// menyimpan pBaru di akhir Section
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);
