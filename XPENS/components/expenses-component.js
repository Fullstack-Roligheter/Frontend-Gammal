import { ExpensesBudgetComponent } from './expenses-budget-component.js';
import { ExpensesSidebarComponent } from './expenses-sidebar-component.js';

export const render = (app) => {
    
    const oldStyleSheet = document.getElementById("lac-style");
    if (oldStyleSheet) oldStyleSheet.remove();
  
    const customStyleSheet = document.createElement("link");
    customStyleSheet.setAttribute("id", "lac-style");
    customStyleSheet.setAttribute("rel", "stylesheet");
    customStyleSheet.setAttribute("href", "lac.css");
    document.head.appendChild(customStyleSheet)

    const main = document.createElement('main');
    main.setAttribute('id', 'main')

    const mainContainer = document.createElement('div');
        mainContainer.setAttribute('class', 'main-container')
        mainContainer.setAttribute('id', 'main-container')

    const article = document.createElement('article');
        article.setAttribute('id', 'article')

    const titleContainer = document.createElement('div');

    const h1 = document.createElement('h1');
    const text = document.createTextNode('Expenses');

    h1.appendChild(text);
    titleContainer.appendChild(h1);
    article.appendChild(titleContainer)
    mainContainer.appendChild(article);
    main.appendChild(mainContainer);
    app.appendChild(main);

    ExpensesBudgetComponent(mainContainer)
    ExpensesSidebarComponent(mainContainer)
}