
axios.get('http://localhost:3000/api/books').then(resp => {
    // renderBooks(resp.data)
    // loaderdiv.style.display="none"
});

function renderBooks(BookList){
    const ContainerAllBooks=document.querySelector(".ContainerAllBooks");
    BookList.map(book=>{
        const BookHtml=`
        <div class="InfoAndImg">
        <div class="Bookimg">
            <img src="${book.imageUrl}" alt="">
        </div>
            <div class="BookInfos">
                <h2 class="BookInfosH2">${book.title}</h2>
            <div class="BookInfo"><p>${book.synopsis}</p></div>
            <div class="Authors"><h3>${"By "+ book.author}</h3></div>
        </div>
      </div>
        `
        ContainerAllBooks.insertAdjacentHTML("Beforeend", BookHtml)
    })
}