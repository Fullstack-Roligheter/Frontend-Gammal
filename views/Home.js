import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super() //<-- Måste kalla på construktorn i AbstractViews.js
        this.setTitle("Home")
    }
    
    async getHtml() { 
        return `
        <h1>Welcome to Home</h1>
            <p>
                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
            </p>
            <p>
            <a href="/budget" data-link>View budget</a>.
            <a href="/dashboard" data-link>View Dashboard</a>.
            </p>
        `
    }
}