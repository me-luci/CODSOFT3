const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));
const operator = {
  '/': (prev, next) => prev / next,
  '*': (prev, next) => prev * next,
  '-': (prev, next) => prev - next,
  '+': (prev, next) => prev + next,
};

let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

buttons.map( button => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerText;
    
    if(buttonText === 'C') {
      firstOperand = null;
      secondOperand = null;
      currentOperator = null;
      display.value = '';
      return;
    }

    if(buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
      currentOperator = buttonText;
      firstOperand = parseFloat(display.value);
      display.value = '';
      return;
    }

    if(buttonText === '=') {
      const result = operator[currentOperator](firstOperand, parseFloat(display.value));
      display.value = result;
      firstOperand = result;
      secondOperand = null;
      currentOperator = null;
      return;
    }

    display.value += buttonText;
  });
});