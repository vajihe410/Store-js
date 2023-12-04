import { authHandeler } from "./utils/authorization.js";
import { getData } from "./utils/httpRequest.js";

const container = document.querySelector(".container")
const logout = document.querySelector("button")

const renderUsers = (users) => {
    
    container.innerHTML = "";

    users.map(user => {
        const JSX = `<div id="card">
                        <h3>${user.id}</h3>
                        <div>
                            <p><i class="fa-solid fa-user"></i> Name:</p>
                            <span>${user.name.firstname} ${user.name.lastname}</span>
                        </div>
                        <div>
                            <p><i class="fa-solid fa-paperclip"></i> UserName:</p>
                            <span>${user.username}</span>
                        </div>
                        <div>
                            <p><i class="fa-solid fa-envelope"></i> Email:</p>
                            <span>${user.email}</span>
                        </div>
                        <div>
                            <p><i class="fa-solid fa-phone"></i> Phone:</p>
                            <span>${user.phone}</span>
                        </div>
                        <div>
                            <p><i class="fa-solid fa-location-dot"></i> Address:</p>
                        <span>${user.address.city}-${user.address.street}-${user.address.zipcode}</span>
                    </div>
        
                    </div>`
        container.innerHTML += JSX            
    })
}

const initHandler = async() => {
    authHandeler()
    const users = await getData("users")
    renderUsers(users)
}
const logoutHamdeler = () => {
    document.cookie = "token=; max-age=0";
    location.assign("index.html")
}

logout.addEventListener("click",logoutHamdeler)
document.addEventListener("DOMContentLoaded",initHandler);