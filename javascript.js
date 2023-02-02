let link = document.querySelectorAll("nav ul a");
let params = new URLSearchParams(document.location.search);
let page = params.get('page')
console.log(page);


// link.forEach((element, index) =>{
// element.addEventListener("click", (e) =>{
//     e.preventDefault();
//     console.log(e);
//  });
// });
// console.log(link);

// link.addEventListener("click", (e) =>{

// })

// let header = document.querySelector(".siteHeader");



// header.addEventListener('click', function(){
// console.log("callback function...");
// })

            //is same as above

// header.addEventListener("click", ()=>{
// console.log("callback function...");
// })