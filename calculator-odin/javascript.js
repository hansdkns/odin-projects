let buttons = document.querySelectorAll('.buttons');
let screen = document.querySelector('#screen');
let operator = '';
let display = '';
let a = 0;
let b = 0;

const calculate = function(a,b,operator){
    if (operator==='+'){
        return a+b;
    } else if (operator==='-'){
        return a-b;
    } else if (operator==='*'){
        return a*b;
    } else {
        if (b !== 0){
            return a/b;
        }else{
            return 'My Disappointment is Immeasurable and My Day is Ruined';
        }};
};

const clean = function(){
    a = 0;
    b = 0;
    operator = '';
    display = '';
};

const fixScreen = function(display){
    screen.innerText = display;
};

const arraySplit = function(display,operator){
    let array = display.split(operator);
    let a = Number(array[0]);
    let b = Number(array[1]);
    let result = calculate(a,b,operator);
    if (typeof(result)=== 'number'){
        result = roundDecimal(result)};
    clean();
    return result;
}

function roundDecimal(result){
    if (result % 1 !== 0) {
        return parseFloat(result.toFixed(2));
    } else {
        return result;
    };
};

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        let target = event.target;
        element = target.innerText
    
        switch(element) {
            case 'AC':
                clean();
                fixScreen(display);
                break;
            case 'DEL':
                display = display.toString();
                display = display.slice(0, -1);
                fixScreen(display);
                break;
            case '+/-':
                break;
            case '/':
            case '*':
            case '-':
            case '+':
                if (operator !== ''){
                    result = arraySplit(display,operator);
                    a,display = result;
                    fixScreen(display);};
                operator = element;
                display += element;
                fixScreen(display);
                break;
            case 'EXE':
                result = arraySplit(display,operator);
                a,display = result;
                fixScreen(display);
                break;
            default:
                display += element;
                fixScreen(display);
                break;
        };
    });
});
