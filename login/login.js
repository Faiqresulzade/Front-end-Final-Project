const loginbtn=document.querySelector("#Sign-up-Button1");
loginbtn.addEventListener("click",()=>{
    const mail=document.querySelector("#Mail");
    const pass=document.querySelector("#Password");
    const Myobject={
        mail:mail.value,
        password:pass.value
    }
    axios.post("http://localhost:3000/api/books/login" ,Myobject)
    .then(resp=>{
        loaderdiv.style.display="none"
        localStorage.setItem("storagedata",JSON.stringify(Myobject));
       const err= document.querySelector(".error");
       err.innerHTML="Succes";
       err.style.color="green";
       document.querySelector(".errorsucces").style.borderColor="green"
       document.querySelector(".errorsucces").style.display="block";
       setTimeout(() => {
        location.reload();
       },700);
    }).catch(err=>{
        document.querySelector(".errorsucces").style.display="block";
    })
})
if(localStorage.length){
    const logout=document.querySelector(".Logout")
    logout.style.display="block"
    document.querySelector(".SignUp").style.display="none"
    document.querySelector(".Login").style.display="none"
    document.querySelector(".DashBoards").style.display="block"
}
const logoutbtn=document.querySelector(".Logout");
logoutbtn.addEventListener("click",()=>{
    localStorage.clear();
    location.reload();
})
const signupbtn=document.querySelector(".Sign-up-Button");
signupbtn.addEventListener("click",()=>{
    const nameinput=document.querySelector("#name");
    const signupobject={
        name:nameinput.value,
        surname:document.querySelector("#surname").value,
        mail:document.querySelector("#Mail").value,
        password:document.querySelector("#Password").value
    }
    axios.post("http://localhost:3000/api/books/signup",signupobject).then(resp=>console.log(resp))
})

