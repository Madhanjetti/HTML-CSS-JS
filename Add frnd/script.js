const a=document.querySelector("h5")
const btn=document.querySelector("#btn")
const head1=document.querySelector("h1")
var check=0;
btn.addEventListener("click", function() {

    

    if(check==0){
  btn.innerText=" Remove Friend";
  a.innerText="Friend"
  a.style.color="green";
  btn.style.backgroundColor= "grey",
    check=1;
    }else{
        btn.innerText="Add Friend";
        a.innerText="Stranger";
        a.style.color="red";
        btn.style.backgroundColor= "grey",
        check=0;   
    }
})