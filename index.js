import { getCookie } from "./utils/cookie.js"
import { getData } from "./utils/httpRequest.js"
import { shortTitle } from "./utils/stringFunction.js"

const loginButton = document.getElementById("login")
const dashboardButton = document.getElementById("dashboard")
const mainContent = document.querySelector(".products")

const showProducts = (products) => {
   
   mainContent.innerHTML = "";
   
   products.forEach(product => {
    const {title ,image ,price ,rating} = product
    const JSX = `<div class = "product">
                    <div id="rate">
                        <span><i class="fa-solid fa-star"></i> ${rating.rate}</span>
                        <span><i class="fa-solid fa-user"></i> ${rating.count}</span>
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
    const allProducts = await getData("products")
    
    showProducts(allProducts) 
}



document.addEventListener("DOMContentLoaded",initHandeler)