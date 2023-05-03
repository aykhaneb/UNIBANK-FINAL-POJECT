let second_div = document.querySelector(".second_div")
let first_div = document.querySelector(".first_div")
let slider_banking2 = document.querySelector(".slider_banking2")
let slider_banking1 = document.querySelector(".slider_banking1")
second_div.onclick = function () {
    slider_banking2.classList.remove("d-none")
    slider_banking1.classList.add("d-none")
}

first_div.onclick = function () {
    slider_banking1.classList.remove("d-none")
    slider_banking2.classList.add("d-none")
}

let li = document.querySelectorAll(".indicators_banking ul li")
for(let item of tabclick){
    item.onclick=function () {
    let active_btn = document.querySelector(".active")
    li.classList.remove("active_banking")
        this.classList.add("active_banking")
    }
}

let fin = document.querySelectorAll(".fin")
for (let item of tabclick) {
    item.onclick = function () {
        let active_banking = document.querySelector(".active_banking")
        active_banking.classList.remove("active_banking")
        this.classList.add("active_banking")
    }
}