var uid = new ShortUniqueId();
const addBtn = document.querySelector(".add-btn");
// we are going to search all the nodes of a tree to get modal-cont class
const modal = document.querySelector(".modal-cont");
const textAreaEle = modal.children[0];
const modalPriorityColorCont = modal.children[1];
let ticketColor = "green";
const mainCont = document.querySelector(".main-cont");
const removeBtn = document.querySelector(".remove-btn");
let isDeleteActive=false;
const toolBoxPriorityColor = document.querySelector(".toolbox-priority-cont");
const colorArray=["pink","blue","green","purple"];
let allTickets = JSON.parse(localStorage.getItem("tickets")) || [];
let isFromLocalStorage=false;
if(allTickets.length!=0){
  populateUI(allTickets);
}

addBtn.addEventListener("click", handleClick);
function handleClick() {
  modal.style.display = "flex";
}

removeBtn.addEventListener("click", handleDelete);
function handleDelete(){
    if(isDeleteActive) removeBtn.style.color="black";
    else removeBtn.style.color="red";
    //toggling
    isDeleteActive = !isDeleteActive;
}

modalPriorityColorCont.addEventListener("click", function (e) {
  //we want only priority color boxes
  if (e.target == e.currentTarget) return;
  const allPriorityColors = Array.from(modalPriorityColorCont.children);
  allPriorityColors.forEach((colorEle) => {
    colorEle.classList.remove("active");
  });
  ticketColor = e.target.classList[1];
  e.target.classList.add("active");
});

modal.addEventListener("keypress", function (e) {
  if (e.key != "Enter") return;
  let content = textAreaEle.value;
//   remove whitespaces -> suffix and prefix -> return if length 0 
// regex 
//   if(content.length==0) return;
  createTicket(ticketColor, content);
  modal.style.display = "none";
  
  //reset modal to default settings
  textAreaEle.value="";
  const allPriorityColors = Array.from(modalPriorityColorCont.children);
  allPriorityColors.forEach((colorEle) => {
    colorEle.classList.remove("active");
  });
  modalPriorityColorCont.children[2].classList.add("active");
  ticketColor="green";

});

function createTicket(ticketColor, content, id) {
  let tid = id || uid.rnd();
  // console.log(tid);
  const ticketCont = document.createElement("div");
  ticketCont.classList.add("ticket-cont");
  ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
            <div class="ticket-id">#${tid}</div>
            <div class="ticket-area">${content}</div>
            <div class="lock-unlock">
                <i class="fa-solid fa-lock"></i>
            </div>`;
  mainCont.appendChild(ticketCont);
  changeTicketPriority(ticketCont,tid);
  deleteListeners(ticketCont,tid);
  addLockUnlock(ticketCont,tid);

  let ticketObj={
    id:tid,
    content,
    color:ticketColor
  }
  if(isFromLocalStorage) return;
  allTickets.push(ticketObj);
  updateLocalStorage()


}

function deleteListeners(ticketCont,ticketId){
    ticketCont.addEventListener("click",function(e){
        if(isDeleteActive) {
          ticketCont.remove();
          allTickets=allTickets.filter((ticketObj)=>{
            return ticketObj.id!==ticketId
          })
          updateLocalStorage();
      }
    })
}

function addLockUnlock(ticketCont,ticketId){
    const lockUnlockEle=ticketCont.children[3];
    const ticketArea=ticketCont.children[2];
    lockUnlockEle.addEventListener("click",function(e){
        let isLocked = lockUnlockEle.children[0].classList.contains("fa-lock");
        if(isLocked){
            //unlock 
            lockUnlockEle.children[0].classList.remove("fa-lock");
            lockUnlockEle.children[0].classList.add("fa-lock-open");
            //editable text area 
            ticketArea.setAttribute("contenteditable",true);
        }else{
            //lock 
            lockUnlockEle.children[0].classList.remove("fa-lock-open");
            lockUnlockEle.children[0].classList.add("fa-lock");
            //non-editable text area 
            ticketArea.setAttribute("contenteditable",false);
        }
        let ticketObj=allTickets.find((ticketObj)=>{
          return ticketObj.id==ticketId
        })
        ticketObj.content=ticketArea.textContent;
        updateLocalStorage();
    })
}

function changeTicketPriority(ticketCont,ticketId){
  const ticketColorEle=ticketCont.children[0];
  ticketColorEle.addEventListener("click",function(e){
    // 1. get current color , finds it's position in colorArray
    let currentColor = ticketColorEle.classList[1];
    let currentColorIdx = colorArray.indexOf(currentColor);
    // 2. increment pos by one, 
    let newColorIdx=(currentColorIdx+1)%colorArray.length;
    console.log(newColorIdx);
    let newColor=colorArray[newColorIdx];
    // 3. set color
    ticketColorEle.classList.remove(currentColor);
    ticketColorEle.classList.add(newColor);

    //update in local storage
    //  1. get ticket id , and then update
    
    allTickets.forEach(ticketObj=>{
      if(ticketObj.id==ticketId){
        ticketObj.color=newColor;
      }
    })
    updateLocalStorage();
  })
}






toolBoxPriorityColor.addEventListener("click",function(e){
  if(e.target==e.currentTarget) return;
  let selectedColor = e.target.classList[1];
  //i am going to traverse over all the tickets , then filter them out on the basis of color. 
  let allTickets = Array.from(document.querySelector(".main-cont").children);

  allTickets.forEach(ticket=>{
    if(ticket.children[0].classList[1]!==selectedColor){
      ticket.style.display="none";
    }else{
      ticket.style.display="block";
    }
  });
})

toolBoxPriorityColor.addEventListener("dblclick",function(e){
  if(e.target==e.currentTarget) return;
  let allTickets = Array.from(document.querySelector(".main-cont").children);

  allTickets.forEach(ticket=>{
      ticket.style.display="block";
  });
})


function populateUI(allTickets){
  isFromLocalStorage=true;
  for(let i=0;i<allTickets.length;i++){
    let {id,content,color}=allTickets[i];
    createTicket(color,content,id)
  }
  isFromLocalStorage=false;
}


function updateLocalStorage(){
  localStorage.setItem("tickets",JSON.stringify(allTickets));
}
