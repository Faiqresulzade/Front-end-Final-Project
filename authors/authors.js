// const loaderdiv=document.querySelector(".loaderdiv")
axios.get('http://localhost:3000/api/authors').then(resp => {
    console.log(resp.data);
    // loaderdiv.style.display="none"
    // renderAuthors(resp.data)
});

function renderAuthors(AuthorsList){
    const AuthorsContainer=document.querySelector(".AuthorsContainer");
    AuthorsList.map(authors=>{
        const AuthorsHtml=`
        <div class="InfoAndImage">
        <div class="AuthorsImg">
            <img src="${authors.imgUrl}" alt="">
        </div>
        <div class="AuthorsInfo">
            <div><h2>${authors.name}</h2></div>
            <div><p>${authors.biography}</p></div>
        </div>
    </div>
        `
        AuthorsContainer.insertAdjacentHTML("Beforeend",AuthorsHtml)
    })
   
}