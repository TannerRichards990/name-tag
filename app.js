// grab DOM elements

const nameInput = document.getElementById('name-input');
console.log(nameInput);


const nameDisplay = document.getElementById('name-display');
console.log(nameDisplay);

// set event listeners
// get info from user input
// use user input to update state
// update DOM to reflect the new state
nameInput.addEventListener('input', () => {
    const name = nameInput.value;
    console.log(name);
    nameDisplay.textContent = name;
});
