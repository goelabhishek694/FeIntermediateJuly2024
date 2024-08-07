"use strict"
const container = document.querySelector(".container");

container.addEventListener("click",function(e){
    const targetElem = e.target;

    const isReply = targetElem.classList.contains("reply"); 
    const isSubmit = targetElem.classList.contains("btn-submit"); 
    if(isReply){
        createReplyInput(e);
    }else if(isSubmit){
        createComment(e);
    }else return;
})

function createReplyInput(e){
    const fragment = document.createDocumentFragment();
    const replyContainer=document.createElement("div");
    const input=document.createElement("input");
    const button=document.createElement("button");

    replyContainer.setAttribute("class","comment-reply-container");
    input.setAttribute( "type" ,"text");
    input.setAttribute( "placeholder","write your comment");
    button.setAttribute( "class","btn-submit");
    button.textContent="Submit";

    replyContainer.appendChild(input);
    replyContainer.appendChild(button);
    fragment.appendChild(replyContainer);

    // console.log(e.target.parentNode);
    e.target.parentNode.appendChild(fragment);
}

function createComment(e){
    console.log(e.target);
    const commentContainer = document.createElement("div");
    commentContainer.setAttribute("class","comment-container");
    const comment=e.target.previousElementSibling.value;
    // const input2=e.target.previousSibling; text-node 
    commentContainer.innerHTML=`<div class="comment-card">
                <h3 class="comment-text">${comment}</h3>
                <div class="reply">Reply</div> 
            </div>`;
    const comentReplyBox = e.target.parentNode;
    const commentCard = comentReplyBox.parentNode;

    commentCard.replaceChild(commentContainer ,comentReplyBox)

}


//multiple comment boxes