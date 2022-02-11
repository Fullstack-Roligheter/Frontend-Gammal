import DashBoard from './views/Dashboard.js'
import Budget from './views/Budget.js'
import home from '../../views/home.js'

//History API
const navigateTo = url => {
    history.pushState(null, null, url)
    router()   // <-- Kallar på Client Side Router för att processa den nya history entry:n

}

//import express from 'express'
//import {createRequire} from 'module'
//const require = createRequire("express/lib/application")
//const { routes } = require("express/lib/application")

//Vi behöver göra funktionen async för att vi ska ladda in innehållet för våra "sidor" en i taget, inte samtidigt! 
const router = async () => {
    const routes = [ //Array över våra routes. Path '/' är default/homepage på index [0]
        { path: "/", view: Home}, //Här kan vi ladda fram våra "views" för sidorna, nu har jag bara lagt en enkel console.log för att testa om det funkar
        { path: "/budget", view: Budget},
        { path: "/dashboard", view: Dashboard}
    ]

    //Testar varje route för att hitta en matchning
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path //På websidan, inspektera - console; skriv location.pathname och det bör dyka upp en '/' för Home och '/login' när man trycker på Login
        }
    })
    //Om vi hittar en matching till vår route (Ex Login, Budget etc) returnerar den en bool:true
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    //Om matchning inte hittas ska den gå tillbaka till Default Root (Home page)
    if(!match) {
        match = {
            route: routes[0], //I vår router array är index[0] homepage
            isMatch: true
        }
    }
    
    const view = new match.route.view()

    document.querySelector(#app).innerHTML = await view.getHtml()

    //console.log(match.routes.view()) 

    //console.log(potentialMatches) //För att se om den kunde hitta connections inne i console
}

//Eventlistener för att spara data när man backar till en annan sida (History Api)
window.addEventListener("popstate", router)

//Funktion för att kolla ovanstående console.log(portentialMatches) <-- Denna kommer enbart synas i console
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => { //Event listener för att reagera på data-link navigering i index.html (History API)
        if(e.target.matches("[data-link")){
            e.preventDefault()
            navigateTo(e.target.href) //e.target kommer referera till data-länken i href taggen, om länken har [data-link] reference, prevent defaultbehaviour (refresh page)
        }
    })
    router()
})