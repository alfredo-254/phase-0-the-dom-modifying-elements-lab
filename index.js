// Write your code here!
const mainElement = document.querySelector('main#main');
    //   expect(mainElement,
mainElement.remove()

// create h1 element with the variable name newHeader
const newHeader = document.createElement('h1');

// Set the id attribute to 'victory'
newHeader.id = 'victory';

// Text content is set to 'YOUR-NAME is the champion'
const championText = 'ALFRED is the champion';
newHeader.textContent = championText;

// Append the <h1> element to the document body.
document.body.appendChild(newHeader);
