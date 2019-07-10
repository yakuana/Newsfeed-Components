/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(menuArray) {

  // define new elements 
  const menu = document.createElement("div"); 
  const menuList = document.createElement("ul"); 

  // format structure 
  menu.appendChild(menuList); 

  // add class names 
  menu.classList.add("menu"); 

  
  // iterate through given menuArray 
  menuArray.forEach((item) => {
    // create li element 
    const listItem = document.createElement("li"); 
  
    // get li element's text 
    listItem.textContent = item; 

    // append li element to parent ul
    menuList.appendChild(listItem)
  });

  // console.log("current menu", menuList); 

  
  // select menu-button currently on the DOM 
  const domMenuButton = document.querySelector(".menu-button"); 

  // add eventlistener to DOM menu-button 
  domMenuButton.addEventListener("click", (event) => {
    
    // check if button has been clicked 
    console.log('button clicked', event.target)

    // toggles menu open/close 
    menu.classList.toggle("menu--open"); 
    
  })

  return menu; 
}

// get the parent container of the menu 
const domHeader = document.querySelector(".header"); 

// append the menu to the header 
domHeader.appendChild(createMenu(menuItems)); 