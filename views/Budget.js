import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        this.setTitle("Budget")
    }

    //Här returnerar jag Ahmads Budget.html text, dock tar jag bara taggar o skapade en ny p-tag som "container"
    async getHtml() {
        return `
        <p>
            <form action="" id="form" method="post">
              <label for="name">Budget Name</label><br />
              <input type="text" name="name" id="name" /><br />
        
              <label for="startdate">Start Date</label><br />
              <input type="date" name="startdate" id="startdate" /><br />
        
              <label for="enddate">End Date</label><br />
              <input type="date" name="enddate" id="enddate" /><br />
        
              <!-- <label for="maxamount">Amount</label><br />
              <input type="number" name="maxamount" id="maxamount" /><br /> -->
        
              <button type="submit" id="btn-budget">Add</button>
            </form>
        
            <script src="script.js"></script>
          </p>
        `
    }
}