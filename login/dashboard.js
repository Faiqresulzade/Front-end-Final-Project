const logoutbtn=document.querySelector(".Logout");
const tbody=document.querySelector(".Tbody");
const tbodyAuthors=document.querySelector(".tbodyAuthors");
const usersDiv=document.querySelector(".usersDiv");
const BooksTable=document.querySelector(".Books-Table");
// const loaderdiv=document.querySelector(".loaderdiv")
logoutbtn.addEventListener("click",()=>{
    localStorage.clear();
    location.reload();
})
axios.get("http://localhost:3000/api/users").then(resp=>{
    renderUserTable(resp.data);
    loaderdiv.style.display="none"
})
axios.get('http://localhost:3000/api/books').then(resp => {
    renderBookstable(resp.data)
    loaderdiv.style.display="none"
});
axios.get('http://localhost:3000/api/authors').then(resp => {
    loaderdiv.style.display="none"
    renderAuthorsList(resp.data);
});

function renderBookstable(BookList){
    BookList.map((Book)=>{
        const TableHtml=`
        <tr>
                    <td>${Book.id}</td>
                    <td>${Book.title}</td>
                    <td>${Book.author}</td>
                    <td>${Book.publisher}</td>
                    <td>${Book.price} $</td>
                    <td class="deletandedit">
                        <img class="deletimg" src="https://tips.typeapp.com/assets/folder_trash.png" alt="">
                        <img class="editimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjI6iU7ZfKZ621dn6bGam_B16L8ItemVzkQ&usqp=CAU" alt="">
                    </td>
        </tr>
        `
        tbody.insertAdjacentHTML("Beforeend",TableHtml)
    })
 }
    
 function renderAuthorsList(Authorlist){
    Authorlist.map((authors)=>{
        console.log(authors)
      const authorstable=`
      <tr>
                    <td>${authors.id}</td>
                    <td>${authors.name}</td>
                    <td>${authors.biography}</td>
                    <td>
                        <img class="deletimg" src="https://tips.typeapp.com/assets/folder_trash.png" alt="">
                        <img class="editimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjI6iU7ZfKZ621dn6bGam_B16L8ItemVzkQ&usqp=CAU" alt="">
                    </td>
        </tr>
      `
      tbodyAuthors.insertAdjacentHTML("beforeend",authorstable)
    })
 }
    document.querySelector(".Authors").addEventListener("click",()=>{
    document.querySelector(".Authors").style.borderBottom="2px solid rgb(1, 139, 139)"
    document.querySelector(".AuthorsDiv").style.display="block";
    document.querySelector("#Book").style.borderBottom="none";
    document.querySelector(".Users").style.borderBottom="none"
    BooksTable.style.display="none";
    usersDiv.style.display="none";
 })
 document.querySelector(".Users").addEventListener("click",()=>{
    document.querySelector(".Users").style.borderBottom="2px solid rgb(1, 139, 139)";
    document.querySelector(".Authors").style.borderBottom="none";
    document.querySelector("#Book").style.borderBottom="none";
     usersDiv.style.display="block";
    BooksTable.style.display="none";
    document.querySelector(".AuthorsDiv").style.display="none";

 })
 

 function renderUserTable(Userlist){
  const TbodyUsers=document.querySelector(".TbodyUsers");
  Userlist.map((user)=>{
    const TbodyUsershtml=`
    <tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.surname}</td>
    <td>${user.mail}</td>
    <td>${user.password}</td>
  </tr> 
    `
    TbodyUsers.insertAdjacentHTML("beforeend",TbodyUsershtml)
  })
 }
 document.querySelector("#Book").addEventListener('click',()=>{
    document.querySelector(".AuthorsDiv").style.display="none";
    BooksTable.style.display="block";
    usersDiv.style.display="none";
    document.querySelector(".usersDiv").style.display="none"
    document.querySelector("#Book").style.borderBottom="2px solid rgb(2, 139, 139)";
    document.querySelector(".Authors").style.borderBottom="none";
    document.querySelector(".Users").style.borderBottom="none"
 })