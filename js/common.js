function getTotalElementById(ElementId){
    const elementField = document.getElementById(ElementId)
    const elementTotalString = elementField.innerText
    const elementTotal = parseInt(elementTotalString);
    return elementTotal; 
    }
    
    function totalAmountFunction(totalField , value){
        const sobTotalField = document.getElementById(totalField)
        sobTotalField.innerText = value ;
    }
    function totalAmount(){
      const phoneTotalPrice = getTotalElementById('phone-total')
    const caseTotalPrice = getTotalElementById('case-total')
    const subTotal = phoneTotalPrice + caseTotalPrice ;
totalAmountFunction('sub-total' , subTotal)

    const texAmountString=  (subTotal * .1 ).toFixed(2)
    const texAmount = parseFloat(texAmountString)
 totalAmountFunction('tax-amount' , texAmount)

 const totalCashOut = subTotal + texAmount;
 totalAmountFunction('final-total' , totalCashOut)
    }

 
