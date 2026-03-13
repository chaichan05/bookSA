const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("getbook.php?id=" + id)
.then(res => res.json())
.then(book => {

document.getElementById("bookName").innerText = book.bookname;

document.getElementById("bookAuthor").innerText =
"โดย " + book.bookauthor;

document.getElementById("bookType").innerText =
"หมวดหมู่ " + book.booktype;

document.getElementById("bookPage").innerText =
"ความยาว " + book.bookpage + " หน้า";

document.getElementById("bookAmount").innerText =
"จำนวนคงเหลือ " + book.bookamount + " เล่ม";

// รูป Hardcode
let cover = {
1:"images/1.jpg",
2:"images/2.jpg",
3:"images/3.jpg"
};

document.getElementById("bookCover").src =
cover[id] || "images/default.jpg";

document.getElementById("borrowLink").href =
"borrow.html?id=" + id;

});