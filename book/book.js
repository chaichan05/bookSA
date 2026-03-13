function searchBook() {

    let keyword = document.getElementById("mySearch").value;

    fetch("search.php?q=" + keyword)
        .then(res => res.json())
        .then(data => {

            let result = document.getElementById("searchResult");

            result.innerHTML = "";

            // hardcode รูป
            let cover = {
                1: "images/img1.jpg",
                2: "images/img2.png",
                3: "images/ing3.png "
            };

            data.forEach(book => {

                let img = cover[book.bookid] || "images/default.jpg";

                result.innerHTML += `

<div class="book-row">

<img src="${img}" class="book-cover">

<div class="book-info">

<h3>${book.bookname}</h3>

<p><b>หมวด:</b> ${book.booktype}</p>

<p>${book.bookdetail}</p>

<a href="detail.html?id=${book.bookid}">
<button class="detail-btn">ดูรายละเอียด</button>
</a>

</div>

</div>

`;

            });

        });

}