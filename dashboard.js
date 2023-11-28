import { authHandeler } from "./utils/authorization.js";

const initHandler = () => {
    authHandeler()
}

document.addEventListener("DOMContentLoaded",initHandler);