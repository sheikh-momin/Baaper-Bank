// DRY ---> Do not Repeat yourself
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = inputField('deposit-field')

    const newDepositText = textFiled('deposit-total')

    const updateDepositAmount = newDepositAmount + newDepositText;

    updateValue('deposit-total', updateDepositAmount)

    const previousTotalText = textFiled('balance-total')
    const newTotalText = previousTotalText + newDepositAmount;
    
    updateValue('balance-total', newTotalText)
})