const clear = document.queurySelector(".clear"); // selects clear botton
const dateElement = document.getElementById("date"); //shows todays date
const list = document.getElementById("list"); //where to-do items live
const input = document.getElementById("input"); //get user input

//classes names 
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//variable
let LIST, id;

//Get item from localStorage
let data = localStorage.getItem("TODO");

//check if data is empty
if(data){
    LIST = JSON.parse(data);
    id = LIST.length // set id to last in list
    loadlist(LIST); //load list int the content section
}else{
    //if data is empty
    LIST = [];
    id = 0;
}

//load item to content section
function loadlist(array) {
    array.forEach(function(item){
    addToDo(item.name, item.id, item.done, item.trash);
    });
}

//clear the local storage
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
    
});

//show todays date
const option = {weekday:"long", month:"short", days:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US",option);

//add to do
function addToDo(toDo, id, done, trash) {
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH: "";
        
    <li class="item"> 
    <i class="fa ${DONE} co" job="complete" 
    id="${id}"></i> <p class="text ${LINE}">${toDo}</p> 
    <i class="fa fa-trash-o de" job="delete" id="${id}"></i> </li>
const item = `<li class="item"> <i class="fa ${DONE} co" job="complete" id="${id}"></i> <p class="text ${LINE}">${toDo}</p> <i class="fa fa-trash-o de" job="delete" id="${id}"></i> </li>`

const position = "beforeend"

list.insertAdjacentElement(position, item)
}

document.addEventListener("keyup", function(event){
    if(event.keycode == 13){
        const toDo = impput.nodesValue;
        if(toDo){
            addToDo(toDo, id, false , false)
            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });
            //add item to localStorage. Must BE ADDED WHERE LIST ARRAY IS UPDATED.
            localStorage.setItem("TODO", JSON.stringify(LIST));
            id++;
        }
    }
    input.value = "";
})