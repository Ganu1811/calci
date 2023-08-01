let currentInput = '';
let previousInput = '';
let operator = null;

    function updateDisplay() {
      document.getElementById('result').value = currentInput;
    }

    function appendTodisplay(input) {
        // Append the input to currentInput
        currentInput += input;
        updateDisplay();
    }

    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    function Clear() {
    currentInput="";
    updateDisplay();
   }

   function Clr()
   {
      currentInput = currentInput.slice(0, -1); 
      updateDisplay();
   }

   function extractIntegers(str) {
    // Regular expression to match integers
    const integerRegex = /[+-]?(\d+(\.\d*)?|\.\d+)/g;
  
    // Find all matches of integers in the string
    const integers = str.match(integerRegex);
  
    // Extract the operator from the string
    const operator = str.match(/[+\-*/%^]/);
  
    // If there are no integers or no operator, return null
    if (!integers || !operator) {
      return null;
    }
  
    // Extract the integers before and after the operator
    const [num1, num2] = integers.map(Number);
  
    return {
      num1,
      num2,
      operator: operator[0],
    };
    }
  
    function calculate() {
      let integer = extractIntegers(currentInput);
      operator = integer.operator;

      let int1 = integer.num1;
      let int2 = integer.num2;

      switch (operator) {
        case '+':
          currentInput = (int1 + int2).toString();
          break;
        case '-':
          currentInput = (int1 - int2).toString();
          break;
        case '*':
          currentInput = (int1 * int2).toString();
          break;
        case '/':
          currentInput = (int1 / int2).toString();
          break;
        case '%':
          currentInput = ((int1*int2)/100).toString();
        case '^':
          currentInput = (Math.pow(int1,int2)).toString();
      }

      previousInput = '';
      operator = null;
      updateDisplay();
    }
    
    function trigno(name)
    {
        switch(name){
          case "sin":
            currentInput = Math.sin()
        }

    }