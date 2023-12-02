import { getCookie } from "./utils/cookie.js"
import { getData } from "./utils/httpRequest.js"
import { shortTitle } from "./utils/stringFunction.js"

let allProducts = null;
let category = "all";
let search = "";

const loginButton = document.getElementById("login")
const dashboardButton = document.getElementById("dashboard")
const mainContent = document.querySelector(".products")
const searchInput = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")
const listItems = document.querySelectorAll("li")

const showProducts = (products) => {
   
   mainContent.innerHTML = "";
   
   products.forEach(product => {
    const {title ,image ,price ,rating} = product
    const JSX = `<div class = "product">
                    <div id="rate">
                        <span id="rateStar"><i class="fa-solid fa-star"></i> ${rating.rate}</span>
                        <span id="rateUser"><i class="fa-solid fa-user"></i> ${rating.count}</span>
                    </div>
                    <img src=${image} alt=${title}/>
                    <h4>${shortTitle(title)}</h4>
                    <div id="price">
                        <span>$ ${price}</span>
                        <button>Buy<i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                </div>`
        mainContent.innerHTML += JSX     
   } )
   
}

const initHandeler = async () => {
    const cookie = getCookie()
    if(cookie){
        loginButton.style.display = "none"
    }
    else{
        dashboardButton.style.display = "none"
    }
     allProducts = await getData("products")
    
    showProducts(allProducts) 
}
const filterProducts = () => {
        const filteredPeoducts = allProducts.filter(product => {
            if(category === "all"){
                return product.title.toLowerCase().includes(search)
            }
            else{
                return (product.title.toLowerCase().includes(search) && product.category.toLowerCase() === category)
            }
        })
        showProducts(filteredPeoducts)
}
const searchHandeler = () => {
    search= searchInput.value.trim().toLowerCase()
    filterProducts()
}
const filterHandeler = (event) => {
    category = event.target.innerText.toLowerCase()

    listItems.forEach(li =>{
        if (li.innerText.toLowerCase() === category){
        li.className = "selected"
    }
    else{
        li.className = ""
    }
})
    filterProducts()
}


document.addEventListener("DOMContentLoaded",initHandeler)
searchButton.addEventListener("click",searchHandeler)
listItems.forEach(li => li.addEventListener("click",filterHandeler))