const form=document.querySelector(".js-form"),
    input=form.querySelector("input"),
    greeting=document.querySelector(".js-greetings");

const USER_LS="currentUser",
    SHOWING_CN= "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function paintGreeting(text){//유저가 있는 경우
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText=`Hello ${text}`;//환영 문구
}

function handleSubmit(event){
    event.preventDefault();
    
    const currentValue = input.value; 
    paintGreeting(currentValue);
    //console.log(currentValue);
    saveName(currentValue);
}
function askForName(){//유저가 없는경우
     form.classList.add(SHOWING_CN);
     form.addEventListener("submit",handleSubmit);
}

function loadName(){
    const currentUser =localStorage.getItem(USER_LS);
    if(currentUser === null){//유저가 없는경우
        askForName();//이름을 물어봐야함
    }else{//유저가 있는 경우
        paintGreeting(currentUser);//환영문구
    }
}

function init(){
    loadName();
}
init();