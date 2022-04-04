'use strict';
export const ExpensesSidebarComponent = () => {

    const menuItems = [
        'Item-1',
        'Item-2',
        'Item-3',
        'Item-4',
    ]


    const body = document.getElementById('main')
    const sidebarContainer = document.createElement('aside');

    for (let i = 0; i < menuItems.length; i++) {
        let asideMenuItem = document.createElement("div");
        asideMenuItem.setAttribute('class', 'menu-item aside');

        asideMenuItem.innerHTML = menuItems[i];

        sidebarContainer.appendChild(asideMenuItem);

        console.log('Loop Entered...', menuItems[i])
    }
    body.appendChild(sidebarContainer);
}