const form = document.getElementById('my-form');
const billInput = document.querySelector('#bill-input');
const buttons = Array.from(document.querySelectorAll('#buttons-container button'));
const customTipInput = document.getElementById('custom-tip-input');
const peopleInput = document.querySelector('#people-input');
const errorMsg = document.getElementById('error-msg');
const resetButton = document.getElementById('reset-button');
// displays
const tipPerPersonDisplay = document.getElementById('tip-amount');
const totalAmountDisplay = document.getElementById('total-amount');

billInput.value = "";
peopleInput.value = "1";

billInput.addEventListener('input', handleBillInput);
peopleInput.addEventListener('input', handlePeopleInput);

let billValue = 0.0;
let tipPercent = 0;
let peopleValue = 1;

function handleBillInput() {
    billValue = parseFloat(billInput.value);
}

function handlePeopleInput() {
    peopleValue = parseFloat(peopleInput.value);
    calculateTip();
}

function calculateTip() {

    if (peopleValue <= 0 || isNaN(peopleValue)) {
        tipPerPersonDisplay.innerText = "$0.00";
        totalAmountDisplay.innerText = "$0.00";
        return;
    }
    
    let totalTip = (billValue * tipPercent) / 100;
    let tipPerPerson = totalTip / peopleValue;

    tipPerPersonDisplay.innerText = "$" + tipPerPerson.toFixed(2);
    totalAmountDisplay.innerText = "$" + (billValue / peopleValue + tipPerPerson).toFixed(2);
}

// button in this outer loop refers to the clicked button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // btn in this inner (nested) loop refers to each button in the array list, this means we need to reset the styles for all buttons
        buttons.forEach((btn) => {
                btn.classList.remove('bg-strongCyan', 'text-veryDarkCyan');
                btn.classList.add('bg-veryDarkCyan', 'text-white');
        });

        // И потоа ги аплицира стиловиве на кликнатиот button а тоа е аргументот што е во outer forEach
        button.classList.remove('bg-veryDarkCyan', 'text-white');
        button.classList.add('bg-strongCyan', 'text-veryDarkCyan');

        // Extract and store tip percent value
        tipPercent = parseFloat(button.textContent);
        // console.log(`Selected tip: ${tipPercent}`);
    });
})

peopleInput.addEventListener('input', () => {
    if (peopleInput.value === '0' || peopleInput.value === '') {
        errorMsg.classList.remove('hidden');
        peopleInput.classList.add('focus:ring-2', 'focus:ring-red-600', 'focus-outline-none')
    }
    else {
        errorMsg.classList.add('hidden');
        peopleInput.classList.remove('focus:ring-2', 'focus:ring-red-600', 'focus-outline-none');
    }
});

peopleInput.addEventListener('focus', () => {
    if (peopleInput.value === '0' || peopleInput.value === ''){
        peopleInput.classList.add('focus:ring-2')
    }
})

customTipInput.addEventListener('input', () => {
    tipPercent = parseFloat(customTipInput.value) || 0;
    // re-calculate the tip
    calculateTip();
})

// Reset button

resetButton.addEventListener('click', () => {
    // Reset all inputs inside the form
    document.querySelector('form').reset(); // This will reset all input fields to their default values

    // Reset displays
    tipPerPersonDisplay.textContent = "$0.00";
    totalAmountDisplay.textContent = "$0.00";

    // Reset tipPercent and button styles
    tipPercent = 0;
    buttons.forEach((button) => {
        button.classList.remove('bg-strongCyan', 'text-veryDarkCyan');
        button.classList.add('bg-veryDarkCyan', 'text-white');
    });

    // Reset custom button style
    customTipButton.classList.remove('bg-strongCyan', 'text-veryDarkCyan');
    customTipButton.classList.add('bg-veryDarkCyan', 'text-white');
});
