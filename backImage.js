const bodyContainer=document.querySelector("body"),
    imgDivCont=bodyContainer.querySelector(".imgDiv");

const IMG_NUMBER=16;

function genRandom(){
    const number=Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function paintImage(imgNumber){
    const img= new Image();
    const imgSrc=`images/${imgNumber+1}.jpg`;
    img.src=imgSrc;   
    img.classList.add("backImg");
    //bodyContainer.appendChild(img);
    imgDivCont.prepend(img);

    
    //bodyDivCont.style.backgroundImage="url('images/2.jpg')"; =>유일하게 성공
    //bodyDivCont.style.backgroundImage="url('images/'+n+'.jpg')";
    //bodyDivCont.style.backgroundImage="url(imgSrc)";
    //bodyDivCont.style.backgroundImage.url(imgSrc);
    //bodyDivCont.style.backgroundImage="image(img)";
    //console.log('images/'+n+'.jpg');

    console.log(imgSrc);
    //img.addEventListener("loadend",handleImageLoad);
}
function init(){
    const randomNumber= genRandom();
    paintImage(randomNumber);
}
init();