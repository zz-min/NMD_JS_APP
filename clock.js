const clockContainer= document.querySelector(".js-clock"),
clockTitle= clockContainer.querySelector("h1");

function getTime(){
    const date=new Date();
    const minutes= date.getMinutes();
    const hours=date.getHours();
    const seconds=date.getSeconds();
    clockTitle.innerText=`${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes }:${
        seconds < 10 ? `0${seconds}` : seconds }`;
    //삼항연산자 조건문 ? true일 때 : false일때
}

function init(){
    getTime();
    setInterval(getTime,1000);//millionsecond기준이라서 1초=1000밀리언세컨드
}
init();