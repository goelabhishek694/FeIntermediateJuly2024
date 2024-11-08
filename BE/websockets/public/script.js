const socket = io("http://localhost:3000");
socket.on("message", (data) => {
    console.log("receiving message: ", data);
});

//client sends message to server 
const btn = document.getElementById("send");
const input = document.getElementById("message");
const ul =document.getElementById("list");

btn.addEventListener("click", () => {
    const value = input.value;
    const div = document.createElement("div");
    div.setAttribute("class", "sender");
    const li = document.createElement("li");
    li.innerText = value;
    const para =document.createElement("p");
    para.innerText = "sender";
    div.appendChild(para);
    div.appendChild(li);
    ul.appendChild(div);

    input.value = "";
    socket.emit("message",value);

});

socket.on("broadcast", (data) => {
    console.log("broadcasted message", data);
    const div = document.createElement("div");
    div.setAttribute("class", "receiver");
    const li = document.createElement("li");
    li.innerText = data;
    const para =document.createElement("p");
    para.innerText = "receiver";
    div.appendChild(para);
    div.appendChild(li);
    ul.appendChild(div);
})

