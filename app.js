/* console.log('I am in a separate file') */
// update value function
function updateValue(item, value, booleanValue) {
    const previousvalue = document.getElementById(item + '-increase');
    let newValue = previousvalue.value;

    if (booleanValue) {
        newValue = parseFloat(newValue) + 1;
    }
    else if (newValue > 0) {
        newValue = parseFloat(newValue) - 1;

    }
    // updateing the value
    previousvalue.value = newValue
    const initialvalue = document.getElementById(item + 'Value')
    initialvalue.innerText = newValue * value
    // totalCalculation part
    calculationPart();
}
function itemTotal(item) {
    const previousvalue = document.getElementById(item + '-increase');
    const newValue = previousvalue.value
    const newitem = parseFloat(newValue)
    return newitem

}
function calculationPart() {
    const phonequenty = itemTotal('phone') * 1219
    const caseQuenty = itemTotal('case') * 59
    const total = phonequenty + caseQuenty
    const textValue = total / 10
    const fullTotal = total + textValue
    const subtotal = document.getElementById('sub-total')
    subtotal.innerText = total
    const taxtotal = document.getElementById('tax-total')
    taxtotal.innerText = textValue
    const fullValuetotal = document.getElementById('total-value')
    fullValuetotal.innerText = fullTotal
}
//phone increase value
document.getElementById('phone-increase-button').addEventListener('click', function () {
    updateValue('phone', 1219, true);
})
//phone decrease value
document.getElementById('phone-decrease-button').addEventListener('click', function () {
    updateValue('phone', 1219, false);
})
// case increase the value
document.getElementById('case-increase-button').addEventListener('click', function () {
    updateValue('case', 59, true);
})
// case decrease the value
document.getElementById('case-decrease-button').addEventListener('click', function () {
    updateValue('case', 59, false);
});