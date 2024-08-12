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

function createTicket(ticketColor, content) {
  let tid = uid.rnd();
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
  deleteListeners(ticketCont);
  addLockUnlock(ticketCont);
}

function deleteListeners(ticketCont){
    ticketCont.addEventListener("click",function(e){
        if(isDeleteActive) ticketCont.remove();
    })
}

function addLockUnlock(ticketCont){
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
    })
}

