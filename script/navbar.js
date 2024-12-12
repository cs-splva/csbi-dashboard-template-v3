//var $ = window.CustomJQuery

var elements = Array.from(document.getElementsByClassName("sfx_page-tab_1314"));
var navBar = document.getElementById('js-nav-bar');

function changePage(page) {
	targetInnerText = "_" + page; // "_" is added because createNewLinks only looks for pages that start with "_"
  
	for (let i = 0; i < elements.length; i++) {
	  const currentElement = elements[i];
  
	  if (currentElement.innerText === targetInnerText) {
		currentElement.click();
	  }
	}
  }

function createNewLinks() {
  elements.forEach(div => {
    if (div.innerText.startsWith('_')) { // Check if the innerText starts with "_"
      const newLinkContainer = document.createElement('div');
      if (div.classList.contains('sf-element-active-page-tab')) {
        newLinkContainer.className = 'active';
      } else {
        newLinkContainer.className = 'link';
      }
      const newLink = document.createElement('a');
      newLink.textContent = div.innerText.substring(1); // Remove the first character
      //newLink.href = '#'; // Add the appropriate URL for the link
      newLink.onclick = function() {
        changePage(div.innerText.substring(1)); // Remove the first character
      };
      newLinkContainer.appendChild(newLink);
      navBar.appendChild(newLinkContainer);
    }
  });
}

createNewLinks();