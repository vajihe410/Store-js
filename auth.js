import {postData} from "./utils/httpRequest.js"

const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
const submitButton = document.getElementById("login-button")

const username = usernameInput.value
const password = passwordInput.value

const submitHandeler = async (event) =>{
    event.preventDefault()
    const response = await postData("auth/login",{username , password})
    console.log(response)
}

submitButton.addEventListener("click" , submitHandeler)            