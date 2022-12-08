const btn = document.getElementById("btn")
const img = document.getElementById("img")

btn.addEventListener("click",()=>{
    fetch("https://picsum.photos/1920/1080?random=1")
    .then((response)=>{
        // console.log(response);
        img.src = response.url;
    })
    myFun();
})

// const myFunction = ()=>{
//     fetch("https://picsum.photos/600/600?random=1")
//     .then((response)=>{
//         console.log(response);
//         img.src = response.url;
//     })
// }

const allchar="0123456789ABCDEF";
function myFun(){
    var  randcol= "";
  for(var i=0; i<6; i++){
     randcol += allchar[Math.floor(Math.random()*16)];
  }
  document.body.style.backgroundColor= "#"+randcol;
  }
  myFun();