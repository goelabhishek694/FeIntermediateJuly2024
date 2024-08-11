const inputBox=document.querySelector("#search-input");
const suggestionBox=document.querySelector(".suggestion-box");
import getCountries from "./fetchData.js";

// inputBox.addEventListener("input",handleSuggestion);

async function handleSuggestion(e){
    let inputText = e.target.value;
    console.log(inputText);
    console.log(typeof inputText);
    console.log(inputText.length);
    const countriesArr = await getCountries(inputText);
    console.log(countriesArr);
    populateSuggestions(countriesArr);
}

function populateSuggestions(data){
    suggestionBox.innerHTML='';
    if(data.length==0) return;
    const fragment = document.createDocumentFragment();
    data.forEach(obj=>{
        let countryName=obj.name.common;
        const li=document.createElement("li");
        li.innerText=countryName;
        fragment.appendChild(li);
    })
    suggestionBox.appendChild(fragment);
}

function debounce(fn,delay){
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId=setTimeout(()=>{
            fn(...args)
        },delay);
    }
}
// timerid=123, HS(e) -> 300ms -> e.target.value="I"
// timerid=456, HS(e) -> 300ms -> e.target.value="IN" 
// timerid=789, HS(e) -> 300ms -> e.target.value="IND" 

let debouncedFn = debounce(handleSuggestion,300);
inputBox.addEventListener("input",debouncedFn);

// //handle Suggestion
// function print10(...args){
//     console.log(args);
//     console.log(...args);
//     console.log(10);
// }

// //debounce
// function returnFn(fn){
//     return function(...args){ 
//         fn(...args)
//     }
// };

// //debouncedFn
// let myFunc=returnFn(print10);
// console.log(myFunc);
// console.log(myFunc(20,30,40,50));