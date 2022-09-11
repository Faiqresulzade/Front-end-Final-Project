axios.get('http://localhost:3000/api/books').then(resp => {
    loaderdiv.style.display="none"
    renderBooks(resp.data);
    renderTwoBooks(resp.data);
    renderTopSellingBooks(resp.data);
});
axios.get('http://localhost:3000/api/authors').then(resp => {
    console.log(resp.data);
    renderAuthors(resp.data);
});
function renderBooks(BookList){
    const PrideAndPrejudiceBox=document.querySelector(".PrideAndPrejudice");
        const BookHtml=`
        <div class="PrideAndPrejudiceBox">
                <div class="BookImg">
                    <img src="${BookList[0].imageUrl}" alt="">
                </div>
                <div class="BookAbout">
                   <div class="BookName"><h1>${BookList[0].title}</h1></div>
                   <div class="BookInfo">
                       <div class="Author">
                          <p class="Authorinfo">Author</p>
                          <p class="AuthorName">${BookList[0].author}</p>
                       </div>
                       <div class="Type">
                        <p  class="Typeinfo">Type</p>
                        <p class="TypeName">${BookList[0].genre}</p>
                        </div>
                       <div class="LayOut">
                           <p class="LayoutInfo">LayOut</p>
                           <p class="LayoutName">${BookList[0].bookCover}</p>
                        </div>
                   </div>
                   <div class="BookPrice"> <p>$ ${BookList[0].price}</p> </div>
                </div>
            </div>
        `;
        PrideAndPrejudiceBox.insertAdjacentHTML("Beforeend", BookHtml)
    
}
function renderTwoBooks(BookList){
    const PrideAndPrejudice=document.querySelector(".Books");
    BookList.map((Book,index)=>{
        const BookHtml=`
        <div class="PrideAndPrejudiceBoxs2">
        <div class="BookImg2">
            <img src="${Book.imageUrl}" alt="">
        </div>
        <div class="BookAbout2">
           <div class="BookName2"><h1>${Book.title}</h1></div>
           <div class="BookInfos2">
               <div class="Author2">
                  <p class="Authorinfo2">Author</p>
                  <p class="AuthorName2">${Book.author}</p>
               </div>
               <div class="Type2">
                <p  class="Typeinfo2">Type</p>
                <p class="TypeName2">${Book.genre}</p>
                </div>
               <div class="LayOut2">
                   <p class="LayoutInfo2">LayOut</p>
                   <p class="LayoutName2">${Book.bookCover}</p>
                </div>
           </div>
           <div class="BookPrice2"> <p>$ ${Book.price}</p> </div>
        </div>
    </div> 
        `;
        if(index==1 || index==2){
        PrideAndPrejudice.insertAdjacentHTML("Beforeend", BookHtml)}
    })
}
function renderTopSellingBooks(BookList){
    // const newarr=[];
    const TopContainer=document.querySelector(".TopContainer");
    const newarr=BookList.sort((book1,book2)=>book2.sold-book1.sold).slice(0,5);
    newarr.map(book=>{
        const BookHtml=`
           <div class="TopBooks">
                <div class="TopImg">
                    <img src="${book.imageUrl}" alt="">
                </div>
                <p class="Title">${book.title}</p>
                <p class="Author">By ${book.author}</p>
                <p class="Price">$ ${book.price}</p>
         </div>
             `
        TopContainer.insertAdjacentHTML("Beforeend",BookHtml)
    })
}
 function renderAuthors(AuthorList){
    const AllAuthorsContainer=document.querySelector(".AllAuthorsContainer");
    AuthorList.map((author,index)=>{
        const authorsHtml=`
        <div class="AuthorAndInfo">
        <div class="AuthorsImage">
         <img src="${author.imgUrl}" alt="">
        </div>
        <div class="AuthorsInfo">
         <p>${author.name}</p>
        </div>
     </div>
        `;
        if(index<6){
            AllAuthorsContainer.insertAdjacentHTML("Beforeend", authorsHtml)
        }
    })
    
 }
 const loaderdiv=document.querySelector(".loaderdiv")
  const signuptext=document.querySelector(".SignUp");
  const Logintext=document.querySelector(".Login");
  const ClosebtnText=document.querySelector(".ClosebtnText");
  const ClosebtnText1=document.querySelector(".ClosebtnText1");
  ClosebtnText.addEventListener(`click`,()=>{
    SignupModal.style.display="none";
           document.querySelector(".Sign-up-Modal-Container1").style.backdropfilter="none";
           document.querySelector(".Sign-up-Modal-Container1").style.filter="none";
           document.querySelector(".Sign-up-Modal-Container1").style.opacity="none";
           wrapper.style.filter="none";
           wrapper.style.opacity="none";
  })
  const SignupModal=document.querySelector(".Sign-up-Modal");
  const SignupModal1=document.querySelector(".Sign-up-Modal1");
    signuptext.addEventListener(`click`, ()=>{
        if(SignupModal1.style.display!="flex"){
           SignupModal.style.display="flex";
           document.querySelector(".Sign-up-Modal-Container1").style.backdropfilter="blur(2px)";
           document.querySelector(".Sign-up-Modal-Container1").style.filter="blur(.2px)";
           document.querySelector(".Sign-up-Modal-Container1").style.opacity=".94";
           wrapper.style.filter=" blur(4px)";
           wrapper.style.opacity=".8";
        }
})
   const wrapper=document.querySelector(".wrapper");
  Logintext.addEventListener(`click`,()=>{
    if(SignupModal.style.display!="flex"){
    SignupModal1.style.display="flex";
    document.querySelector(".Sign-up-Modal-Container").style.backdropfilter="blur(2px)";
    document.querySelector(".Sign-up-Modal-Container").style.filter="blur(.2px)";
    document.querySelector(".Sign-up-Modal-Container").style.opacity=".94";
    wrapper.style.filter=" blur(4px)";
    wrapper.style.opacity=".8";
    }
  })
  ClosebtnText1.addEventListener(`click`,()=>{
    SignupModal1.style.display="none";
           document.querySelector(".Sign-up-Modal-Container1").style.backdropfilter="none";
           document.querySelector(".Sign-up-Modal-Container1").style.filter="none";
           document.querySelector(".Sign-up-Modal-Container1").style.opacity="none";
           wrapper.style.filter="none";
           wrapper.style.opacity="none";
           location.reload();
})


