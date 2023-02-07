//index.js
//DOM-MANIPULATION
//https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events


// create reference to an element already in the DOM from the HTML script
const containerOne = document.querySelector('#container-one');

// create a new DIV element
const contentOne = document.createElement('div');

// add the class "content-one" to the new DIV element
contentOne.classList.add('content-one');

// add text to the new DIV element
contentOne.textContent = 'This is the glorious text-content!';

// insert the new DIV element into the DOM as a child of the DIV element with the ID of container
containerOne.appendChild(contentOne);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// create a new P element
const newParagraph = document.createElement('p');

// add text to the new DIV element
newParagraph.textContent = "Hey I'm red!";

// lets use insertBefore instead of append Child this time. 
// the syntax is parentNode.insertBefore(newNode, referenceNode) 
// this inserts the newNode into parentNode before referenceNode
// so we're going to insert our newDiv, into containerOne, BEFORE contentOne
containerOne.insertBefore(newParagraph, contentOne)

//and now we're going to make it RED
newParagraph.style.color = 'red';   


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// create a new h3 element
const newH3 = document.createElement('h3');

//lets add text to the new H3 element, this time using innerHTML
newH3.innerHTML = "I’m a blue h3!";

// Now we can insert our new h3 element as a child of the paragraph element
newParagraph.appendChild(newH3);

// We didn't have to in this situation, but IF you needed to you can reference the paragraph element you just created in the DOM
// but first need to add a class to it since we didn't before
newParagraph.classList.add('new-paragraph');

// then we can use query selector to reference it
const newParagraphReference = document.querySelector('.new-paragraph');

// the last step is to make our new h3 element Blue. 
// One might assume it would default to black, but it has inherited the color red from it's parent element, newParagraph
// lets leave it red as an example of this but if you wanted to make it blue you could use any of these syntax below:

// newH3.style.color = 'blue'
// OR
// newH3.style['color'] = 'blue'
// OR
// newH3.style.cssText = "color: blue; background:white;" 
// OR
// newH3.setAttribute('style', 'color: blue; background: white;');


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// now we have to create ANOTHER new Div, this time with an H1 element and ANOTHER paragraph element inside it
// first, creat the new Div
const anotherNewDiv = document.createElement('div');

// now lets create the H1 and P elements
const newH1 = document.createElement('h1');
const anotherNewP = document.createElement('p');

// and append them to the parent
anotherNewDiv.appendChild(newH1);
anotherNewDiv.appendChild(anotherNewP);

// and now we'll insert content into them:
newH1.textContent = "I’m in a div";
anotherNewP.textContent = 'ME TOO!';

// lastly, we need to add the parent element, anotherNewDiv, to the Dom
// lets just append it to the first div we created, contentOne
contentOne.appendChild(anotherNewDiv);

// lets give our new div a black border and a pink background
anotherNewDiv.style.border = 'solid thin black';
// because "background-color" uses a hyphen (kebab-case), we have to use camelCase instead
anotherNewDiv.style.backgroundColor = 'pink';

// we also could have written it using any of these syntax:

// bracket notation
anotherNewDiv.style['background-color'] = 'pink';

// kebab-case is fine in a string like this
anotherNewDiv.style.cssText = 'background-color: pink;'

// or this
anotherNewDiv.setAttribute('style', 'background-color: pink;');   


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//lastly you can insert entire segments of html via innerHTML
//heres an exact duplicate of everything we created above, using a single innerHTML 

document.querySelector('#copyOfEverything').innerHTML = 

`
<h1> DOM MANIPULATION </h1>
<div id="container-two">
    <p class="new-paragraph-two" style="color: red;">
        Hey I'm red!
        <h3>I’m a blue h3!</h3>
    </p>
    <div class="content-two">This is the glorious text-content!
        <div style="background-color: pink;">
            <h1>I’m in a div</h1>
            <p>ME TOO!</p>
        </div>
    </div>
</div>
`
;




















