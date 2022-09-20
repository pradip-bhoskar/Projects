// Author: Pradip Bhoskar
// Github: https://github.com/pradip-bhoskar

let result = 0;                     //To calculate result
let enteredValue = 0;               //shows enteredValue
var expression = '';                //shows expression 
let flag = true;                  //used to clear previous enteredValue
let result_flag = false;             //used to clear previous expression
let repeat_op = false;               //used to avoid repeat operation
let history = [];

//Get input number, do calculations, show result
function key_value(value) {

    if (typeof (value) == 'number') {
        if (result_flag == true) {

            //To show history
            var x = document.getElementById("expression").innerText;
            var y = document.getElementById("enteredValue").innerText;
            var z = x.concat(y);
            history.reverse();
            history.push(z);
            history.reverse();
            document.getElementsByClassName("history")[0].innerHTML = '';
            history.forEach((element, index) => {
                console.log(index + "" + typeof (index));
                if (index < 4) {

                    var para = document.createElement("p");
                    var text = document.createTextNode(element);
                    para.appendChild(text);
                    document.getElementsByClassName("history")[0].appendChild(para);
                }
            });

            document.getElementById("expression").innerText = "";
            enteredValue = 0;
            result_flag = false;
        }
        repeat_op = false;
        if (flag == false) {
            enteredValue = 0;
            flag = true;
        }

        enteredValue = enteredValue * 10 + value;
    }
    else {
        if (repeat_op == false) {
            repeat_op = true;
        }
        else {
            return;
        }
        flag = false;
        enteredValue = value;
        try {
            if (value == '=') {
                result_flag = true;
                expression = document.getElementById("expression").innerText;
                result = eval(expression);
                result = parseFloat(result).toFixed(2);
                enteredValue = result;
            }
        } catch (error) {
            enteredValue = "Error";
        }
    }
    expression = document.getElementById("expression").innerText;
    document.getElementById("expression").innerText = `${expression}${value} `;
    document.getElementById("enteredValue").innerText = enteredValue;
}

//delete last entered value
function back_space() {
    expression = document.getElementById("expression").innerText;
    enteredValue = document.getElementById("enteredValue").innerText;

    (enteredValue.length <= 1) ? enteredValue = 0 : enteredValue = enteredValue.substring(0, enteredValue.length - 1);
    (expression.length <= 1) ? expression = '' : expression = expression.substring(0, expression.length - 1);

    document.getElementById("enteredValue").innerText = enteredValue;
    document.getElementById("expression").innerText = expression;
}

//Clear all values
function all_clear() {
    document.getElementById("enteredValue").innerText = 0;
    document.getElementById("expression").innerText = '';
    result = 0;
    enteredValue = 0;
    expression = '';
    flag = true;
    result_flag = false;
    repeat_op = false;
    history = [];
}

//History toggle button
function show_history() {
    var x = document.querySelector(".history");
    if (x.style.display == 'none') {
        x.style.display = 'block'
    }
    else {
        x.style.display = 'none'
    }
}