// color modes Functionality
window.onload = ()=>{
    if(localStorage.getItem("color-mode") === "dark mode"){
        document.documentElement.style.setProperty("--bg_default",localStorage.getItem("bg-default"));
        document.documentElement.style.setProperty("--bg_body",localStorage.getItem("bg-body"));
        document.documentElement.style.setProperty("--lines-color",localStorage.getItem("lines-color"));
        document.documentElement.style.setProperty("--body-text",localStorage.getItem("body-text"));

        let darkModeBtn = document.querySelector(".dark-mode");
        darkModeBtn.classList.remove("dark-mode");
        darkModeBtn.classList.add("light-mode");
        darkModeBtn.querySelector("span").innerHTML = "Light Mode";
    }
}

let switchColorModeBtn = document.querySelector(".color-mode-btn");
let switchBtnText = switchColorModeBtn.querySelector("span");

switchColorModeBtn.addEventListener("click",()=>{
    if(switchColorModeBtn.classList.contains("dark-mode")){
        switchBtnText.innerHTML = "Light Mode";
        switchColorModeBtn.classList.remove("dark-mode");
        switchColorModeBtn.classList.add("light-mode");

        setDarkMode()
    }else if(switchColorModeBtn.classList.contains("light-mode")){ 
        switchBtnText.innerHTML = "Dark Mode";
        switchColorModeBtn.classList.remove("light-mode");
        switchColorModeBtn.classList.add("dark-mode");

        setLightMode();
    } 
})

// Favourite list functionality

let myFavBtn = document.querySelector(".favBtn");
let myFavouriteList = document.querySelector(".my-favourite")

myFavBtn.addEventListener("click",()=>{
    myFavouriteList.classList.toggle("active");
})

function setDarkMode() {
    document.documentElement.style.setProperty("--bg_default","#1A1A1A");
    document.documentElement.style.setProperty("--bg_body","#282828");
    document.documentElement.style.setProperty("--lines-color","#000000");
    document.documentElement.style.setProperty("--body-text","#EDEDED");

    localStorage.setItem("bg-default","#1A1A1A");
    localStorage.setItem("bg-body","#282828");
    localStorage.setItem("lines-color","#000000");
    localStorage.setItem("body-text","#EDEDED");
    localStorage.setItem("color-mode","dark mode");
}

function setLightMode(){
    document.documentElement.style.setProperty("--bg_default","#FFFFFF");
    document.documentElement.style.setProperty("--bg_body","#F0F9FF");
    document.documentElement.style.setProperty("--lines-color","#DDDDDD");
    document.documentElement.style.setProperty("--body-text","#333333");

    localStorage.setItem("bg-default","#FFFFFF");
    localStorage.setItem("bg-body","#F0F9FF");
    localStorage.setItem("lines-color","#DDDDDD");
    localStorage.setItem("body-text","#333333");
    localStorage.setItem("color-mode","light mode");
}

// Clicking on cards functionality
let cards = document.querySelectorAll(".card");

cards.forEach((e)=>{
    
    e.onclick = ()=>{
        let src = e.querySelector("img").src;
        let desc = e.querySelector(".course-desc").textContent;
        let author_name = e.querySelector(".author").textContent.replace("Author: ","");
        let course_name = e.querySelector(".course-name").textContent
        if(window.location.href.includes("index.html")){
            window.location.href = `${window.location.href.replace("index.html","")}Details.html?src=${src}&desc=${desc}&author=${author_name}&name=${course_name}`
        }else{
            window.location.href = `${window.location.href}Details.html?src=${src}&desc=${desc}&author=${author_name}&name=${course_name}`
        }
    }
})


