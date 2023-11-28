import { getCookie } from "./cookie.js"

const authHandeler = () => {

    const url = location.href
    const cookie = getCookie() 
    if((cookie && url.includes("auth")) || (!cookie && url.includes("dashboard"))){
        location.assign("index.html")
        return false
    }
}
export {authHandeler}