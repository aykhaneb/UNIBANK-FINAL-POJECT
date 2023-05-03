let tabclick = document.querySelectorAll(".icons span a")
for (let item of tabclick) {
    item.onclick = function () {
        let active_btn = document.querySelector(".active")
        active_btn.classList.remove("active")
        this.classList.add("active")
    }
}

let nav = document.querySelector(".sm_nav")
let menu = document.querySelector(".menu")
let all = document.querySelector(".all_body")
nav.onclick = function () {
    // all.classList.add("d-none")
    menu.classList.toggle("d-none")
}

let all_link = document.querySelector("#myAnchor").addEventListener("click", function (event) {

    event.preventDefault()
});

// buttons_all = document.querySelectorAll("#myAnchor")
// for (let btn_all of buttons_all) {
//     btn_all.onclick = function (e) {
//         e.preventDefault()
//     }
// }


//   document.getElementById("myAnchor").addEventListener("click", function(event){
//     event.preventDefault()
//   });
let slider = document.querySelector('.slider')

document.querySelectorAll('.indicators ul li').forEach(function (indicator, index) {
    indicator.addEventListener('click', function () {
        document.querySelector('.indicators .active').classList.remove('active')
        indicator.classList.add('active')
        slider.style.transform = `translate(${index * -25}%)`
    })
})


let theme = document.querySelector(".theme")
let theme_btn = document.querySelector(".theme_link")
theme_btn.onclick = function () {
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        theme.classList.add("fa-moon")
    }
    else{
        theme.classList.remove("fa-moon")
        theme.classList.add("fa-sun")
    }
    // theme.classList.toggle("fa-moon")
    // theme.classList.toggle("fa-sun")
}



let search_link = document.querySelector(".search_link")
let search_section = document.querySelector(".search_section")
search_link.onclick = function () {
    search_section.classList.toggle("d-none")
}
let qclick = document.querySelector(".click")
qclick.onclick = function () {
    search_section.classList.add("d-none")
}

let news_summary = document.querySelector(".news_summary")

let ahrefs = document.querySelectorAll(".item")

for (let item of ahrefs) {
    item.onclick = function () {
        let active_btn1 = document.querySelector(".active1")
        active_btn1.classList.remove("active1")
        this.classList.add("active1")
    }
}


if (localStorage.getItem("cards") === null) {
    localStorage.setItem('cards', JSON.stringify([]))
}

let buttons = document.querySelectorAll(".btn")

for (let btnn of buttons) {
    btnn.onclick = function (e) {
        e.preventDefault()
        let id = this.parentElement.parentElement.parentElement.parentElement.id;
        let src = null;
        if (this.parentElement.parentElement.previousElementSibling) {
            src = this.parentElement.parentElement.previousElementSibling.firstElementChild.src;
        }
        // let name = this.parentElement.parentElement.querySelector('.name_card').innerHTML;
        let cardName = document.querySelector('.name_card').textContent;
        let card_list = JSON.parse(localStorage.getItem("cards"))

        let existCard = card_list.find(item => item.Id == id);

        if (existCard === undefined) {
            card_list.push({
                Id: id,
                Image: src,
                Name: cardName,
                // Price: price,
                Count: 1
            })
        }
        else {
            existCard.Count += 1
        }

        localStorage.setItem('cards', JSON.stringify(card_list))

        ShowCount()
    }
}


function ShowCount() {
    let items = JSON.parse(localStorage.getItem('cards'))
    document.querySelector('.count').innerHTML = `${items.length}`;
    GetProducts()
}



