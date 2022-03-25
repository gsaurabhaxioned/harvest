$(document).ready(function(){
    $(".ham").click(function(){
        $(this).toggleClass("cross");
        $(".menus").slideToggle();
    })
})

let category = document.querySelector(".all-job-category"),
category_content = document.querySelectorAll(".category-content");
category.addEventListener("change",()=>{
    let category_name = category.value.toLowerCase();
    category_content.forEach(i=>{
        i.classList.add("hidecontent");
        i.classList.remove("category-content");
        if(i.innerHTML.toLowerCase().indexOf(category_name) > -1) {
            i.classList.remove("hidecontent");
        }
    })
})





















