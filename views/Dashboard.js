import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        this.setTitle("Dashboard")
    }
    
    //Här returnerar jag Ahmads Dashboard.html text, dock tar jag bara taggar o skapade en ny p-tag som "container"
    async getHtml() { 
        return `
        
            <h1>Welcome</h1>
            <p>
            <button id="btn-to-budget" onclick="toBudget()">Add Budget</button>
            <button id="btn-to-expense" onclick="toExpense()">Add Expense</button>
            <br />
            <a href="">Show Plan</a>
        
            <script src="script.js"></script>
            </p>
        `
    }
}