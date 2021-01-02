const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput= toDoForm.querySelector("input"),
    toDoList=document.querySelector(".js-toDoList");

const TODOS_LS='toDos';    
let toDos=[];

function deleteToDo(event){
    //console.log(event.target.parentNode);
    const btn=event.target;
    const li=btn.parentNode;
    toDoList.removeChild(li);
    //toDos배열의 모든 요소들은 filter함수를 거쳐 true인것만 반환되어 새로운 cleanToDos를 만듬
    const cleanToDos=toDos.filter(function(toDo){
        //li에서 삭제된 배열들을 필터링해서 새로운 배열만들고자함
        console.log(toDo.id, parseInt(li.id));//toDo.id는 숫자고, li.id는 string형식
        return toDo.id !== parseInt(li.id);//string을 숫자로 변환 : parseInt함수
    });
    console.log(cleanToDos);    
    toDos=cleanToDos;
    saveToDos();
}
function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
    //localStorage은 STRING형식만 저장가능 =>따라서 JSON을 사용해야함
    //JSON.stringify(object) : object를 string으로 바꿔줌
}

function paintToDo(text){
    const li=document.createElement("li");
    const delBtn=document.createElement("button");
    const span=document.createElement("span");
    const newId=toDos.length+1;
    //console.log(toDos);
    delBtn.innerHTML="❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText=text;

    li.appendChild(delBtn);
    li.appendChild(span);   
    li.id=newId;
    toDoList.appendChild(li);

    const toDoObj={
        text:text,
        id:newId
    };
    toDos.push(toDoObj);
    saveToDos(); 
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue=toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const loadedToDos =localStorage.getItem(TODOS_LS);
    if(loadedToDos !==null){        
        const parsedToDos=JSON.parse(loadedToDos);        
        //localStorage에 저장된 string형태를 object형태로 변환
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();