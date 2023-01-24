//dispaynum
function displayNum(num) {
    result.value += num;
    console.log(num);
}


//clear box

function ClearBox() {
    result.value = "";
}

//evaluate expression
function evaluateExpression() {
    expression = result.value
    output = eval(expression)
    result.value = output
}
//remove last from screen
function removeLast() {
    curentexpression = result.value
    result.value = curentexpression.slice(0, -1)
}