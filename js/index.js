var save =localStorage.getItem("colorbar");
if(save !== null){
    document.documentElement.style.setProperty("--main-color",save);
    document.querySelectorAll(".color-bar li").forEach(element =>{
        element.classList.remove("act");
        if(element.dataset.color === save){
            element.classList.add("act");
        }
    });
}

document.querySelector(".Nav-bar").onclick =function(){
    this.classList.toggle("activ");
    document.querySelector('.list').classList.toggle("on");
};

document.querySelector(".fa-cog").onclick = function (){
    this.style.visibility= "hidden";
    document.querySelector(".sitting-box").classList.toggle("open");
};
document.querySelector(".but-Done").onclick = function(){
    document.querySelector(".fa-cog").style.visibility= "visible";
    document.querySelector(".sitting-box").classList.toggle("open");
}
// select li 
const colorbar = document.querySelectorAll(".color-bar li");
// loop on li 
colorbar.forEach(li => {
    li.addEventListener('click',(e) => {
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        localStorage.setItem("colorbar",e.target.dataset.color);
            e.target.parentElement.querySelectorAll(".act").forEach(element =>{
                element.classList.remove("act");
            });
            e.target.classList.add("act");
    })
    
});
// select landing page
let layout = document.querySelector('.landing-page');
// array of img
var imgesArray =["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
// change image in time
setInterval(function(){
// random number
    var rondom = Math.floor(Math.random()*imgesArray.length); 
// set image
    layout.style.backgroundImage = 'url("../img/'+imgesArray[rondom]+'")';
}
    ,5000)