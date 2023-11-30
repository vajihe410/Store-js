import { authHandeler } from "./utils/authorization.js"
import { setCookie } from "./utils/cookie.js"
import { postData } from "./utils/httpRequest.js"
import validateForm from "./utils/validation.js"


const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
const submitButton = document.getElementById("login-button")



const submitHandeler = async (event) =>{

    const username = usernameInput.value
    const password = passwordInput.value

    const validation = validateForm(username, password)
    if(!validation) return

    event.preventDefault()

    const response = await postData("auth/login",{username , password})

    setCookie(response.token)
    
    location.assign("index.html")
} 


submitButton.addEventListener("click" , submitHandeler)            
document.addEventListener("DOMContentLoaded" , authHandeler)
