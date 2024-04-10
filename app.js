let inp=document.querySelector("input");
let icon=document.querySelector("i");
let ul=document.querySelector("ul");

icon.addEventListener("click",function(){
    // console.log("icon was clicked");
    let task=document.createElement("li");
    task.innerText=inp.value;

    // console.log(task.innerText);

    let delIcon=document.createElement("i");
    delIcon.className ="fa-solid fa-circle-xmark";
    task.appendChild(delIcon);

    ul.appendChild(task);
    inp.value=""; //to reset input
});



//delete functionality

ul.addEventListener("click",function(event){
    // console.log(event.target.nodeName);
    if(event.target.nodeName=="I"){
        let taskItem=event.target.parentElement;
        // console.log(taskItem);
        taskItem.remove();
    }
});

