let res=document.querySelector(".res");
console.log(res)


function appendvalue(value){
    res.textContent +=value;
}

function clearvalue(){
    res.textContent ='';
}
function calculatevalue(){
   try{
    res.textContent=eval(res.textContent);
   }
   catch{
    console.log("error")
   }
}