const courseInfo = document.querySelector(".course-info")
const imgOfCourse = courseInfo.querySelector(".course-info img");
const author_Name = courseInfo.querySelector(".course-info .course-info-author");
const course_Name = document.querySelectorAll(".course-name");
const course_title = document.querySelector(".course-title");

const urlParams = new URLSearchParams(window.location.search);

const img_src = urlParams.get("src");
const author = urlParams.get("author");
const desc = urlParams.get("desc");
const name_ = urlParams.get("name")

window.onload = ()=>{
    imgOfCourse.src = img_src;
    author_Name.textContent = author;
    course_Name.forEach((e)=>{
        e.textContent = name_; 
    })
    course_title.textContent = desc;
    setColorMode()
}

const favCardContainer = document.querySelector(".fav-cards")
const favCard = document.querySelector(".fav-card-container");
const addCourseToFavBtn = courseInfo.querySelector(".course-info button");

addCourseToFavBtn.addEventListener("click",()=>{
    const newFavCourse = favCard.cloneNode(true);
    newFavCourse.querySelector("img").src = img_src;
    newFavCourse.querySelector(".fav-course-name").textContent = name_;
    favCardContainer.appendChild(newFavCourse);
},{once:true})

function setColorMode() {
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