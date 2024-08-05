// let allStars=document.querySelectorAll(".star");

// not optimized approach
// for(let i=0;i<allStars.length;i++){
//     allStars[i].addEventListener("click",()=>{
//         console.log("i am clicked",i+1);
//     })
// }

//optimized approach

const starContainer=document.getElementById("star-container");
const ratingCount=document.getElementById("count");
starContainer.addEventListener("click",handleClickRating);
starContainer.addEventListener("mouseover",handleHoverRating);
starContainer.addEventListener("mouseout",handleLeaveRating);
let starRating=0;

function handleClickRating(e){
    let clickedEle=e.target;
    // console.log(clickedEle);
    // let a=clickedEle.className;
    // console.log(a);
    let currentClass=clickedEle.getAttribute("class").split(" ")[0];
    // console.log(currentClass);
    if(currentClass!=="star") return;
    // console.log(typeof currentClass);
    // console.log(currentClass[0]);
    starRating=clickedEle.getAttribute("idx");
    // console.log(starRating);
    fillStars(starRating)
    ratingCount.innerText=starRating;
}

function fillStars(idx){
    const allStars=starContainer.children;
    // console.log(allStars);
    for(let i=0;i<5;i++){
        allStars[i].classList.remove("yellow");
    }
    for(let i=0;i<idx;i++){
        allStars[i].classList.add("yellow");
    }
}

function handleHoverRating(e){
    let starIdx=e.target.getAttribute("idx");
    fillStars(starIdx)
}

function handleLeaveRating(e){
    fillStars(starRating)
}
