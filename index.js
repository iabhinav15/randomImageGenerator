const btn = document.getElementById("btn")
const img = document.getElementById("img")

btn.addEventListener("click",()=>{
    fetch("https://picsum.photos/1420/800?random=1")
    .then((response)=>{
        // console.log(response);
        img.src = response.url;
    })
})

// const myFunction = ()=>{
//     fetch("https://picsum.photos/600/600?random=1")
//     .then((response)=>{
//         console.log(response);
//         img.src = response.url;
//     })
// }