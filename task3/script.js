var screen = document.querySelector('#screen');
var btns = document.querySelectorAll('.btns .btn');

// Add event listeners for all buttons with class .btn
btns.forEach(button => {
    button.addEventListener('click', () => {
        var buttonText = button.innerText;

        // Handle special cases for multiplication and division symbols
        if (buttonText === '×') {
            buttonText = '*';
        } else if (buttonText === '÷') {
            buttonText = '/';
        }

        screen.value += buttonText;
    });
});

// Function to handle trigonometric functions (sin, cos, tan)
function trigFunction(func) {
    var value = parseFloat(screen.value);
    if (func === 'sin') {
        screen.value = Math.sin(value);
    } else if (func === 'cos') {
        screen.value = Math.cos(value);
    } else if (func === 'tan') {
        screen.value = Math.tan(value);
    }
}

// Function to handle logarithm (log)
function logarithm() {
    var value = parseFloat(screen.value);
    screen.value = Math.log10(value);
}

// Function to handle constants (pi, e)
function constant(constant) {
    if (constant === 'pi') {
        screen.value = Math.PI;
    } else if (constant === 'e') {
        screen.value = Math.E;
    }
}

// Function to handle power
function pow() {
    var base = parseFloat(screen.value);
    var exponent = prompt("Enter exponent:");
    screen.value = Math.pow(base, exponent);
}

// Function to handle factorial
function fact() {
    var num = parseInt(screen.value);
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    screen.value = result;
}

// Function to handle square root
function sqrt() {
    var value = parseFloat(screen.value);
    screen.value = Math.sqrt(value);
}

// Function to handle inverse (1/x)
function inverse() {
    var value = parseFloat(screen.value);
    screen.value = 1 / value;
}

// Function to handle log base 10
function logBase10() {
    var value = parseFloat(screen.value);
    screen.value = Math.log10(value);
}

// Function to toggle the calculator ON/OFF
function toggleCalculator() {
    var calcState = document.querySelector('#on-off').innerText;
    if (calcState === "ON") {
        document.querySelector('#on-off').innerText = "OFF";
        btns.forEach(button => {
            button.disabled = false;
        });
        screen.disabled = false;
    } else {
        document.querySelector('#on-off').innerText = "ON";
        btns.forEach(button => {
            button.disabled = true;
        });
        screen.disabled = true;
    }
}

// Function to handle AC (Clear screen)
document.getElementById('ac').addEventListener('click', () => {
    screen.value = '';
});

// Function to handle DEL (Delete last character)
document.getElementById('del').addEventListener('click', () => {
    screen.value = screen.value.slice(0, -1);
});

// Function to evaluate the expression
document.getElementById('eval').addEventListener('click', () => {
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        screen.value = 'Error';
    }
});
