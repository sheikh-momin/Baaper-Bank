function inputField (fieldId){
    const filedInputString = document.getElementById(fieldId)
    const filedInput = filedInputString.value
    const inputValue = parseFloat(filedInput)
    filedInputString.value =''
    return inputValue;
}

function textFiled(textId){
    const textFiledString = document.getElementById(textId)
    const textFiled = textFiledString.innerText
    const textValue = parseFloat(textFiled)
    return textValue;
}
function updateValue(elementId , newValue){
    const textFiled = document.getElementById(elementId);
    textFiled.innerText = newValue;
}