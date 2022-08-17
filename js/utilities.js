function getInputFieldValueById(inputId){
    const inputFieldValue = document.getElementById(inputId);
    const inputFieldValueString = inputFieldValue.value;
    const inputAmount = parseFloat(inputFieldValueString);
    inputFieldValue.value = '';

    return inputAmount;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;

    const elementValue = parseFloat(elementValueString);
    
    return elementValue;
}

function setElementValueById(elementId,newValue)
{
    document.getElementById(elementId).innerText = newValue;
}