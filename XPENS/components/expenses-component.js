
import { ExpensesBudgetComponent } from './expenses-budget-component.js';

export const render = (app) => {
    
    const oldStyleSheet = document.getElementById("lac-style");
    if (oldStyleSheet) oldStyleSheet.remove();
  
    const customStyleSheet = document.createElement("link");
    customStyleSheet.setAttribute("id", "lac-style");
    customStyleSheet.setAttribute("rel", "stylesheet");
    customStyleSheet.setAttribute("href", "lac.css");
    document.head.appendChild(customStyleSheet)

    const mainContainer = document.createElement('main');
    const titleContainer = document.createElement('div');
    const h1 = document.createElement('h1');
    const text = document.createTextNode('Expenses');
    h1.appendChild(text);
    titleContainer.appendChild(h1);
    mainContainer.appendChild(titleContainer);
    app.appendChild(mainContainer);


    ExpensesBudgetComponent()
}

