function caseFunction(inCrease){
  const caseNumberField = document.getElementById('case-number-field');
  const caseNumberString = caseNumberField.value 
  const caseNumber = parseInt(caseNumberString)
  let totalCaseNumber ;
  if(inCrease){
totalCaseNumber = caseNumber +1 ;
  }
  else{
    totalCaseNumber = caseNumber - 1 ;
  }
  caseNumberField.value = totalCaseNumber;
  return totalCaseNumber;
}

function totalPrice(totalCaseNumber){
  const totalPrice = totalCaseNumber * 59;
const totalPriceField = document.getElementById('case-total')
totalPriceField.innerText = totalPrice
}


document.getElementById('btn-case-plus').addEventListener('click' , function(){
const totalCaseNumber = caseFunction(true)
totalPrice(totalCaseNumber)
totalAmount();
})

document.getElementById('btn-case-minus').addEventListener('click' , function(){
const totalCaseNumber = caseFunction(false)
totalPrice(totalCaseNumber)
totalAmount();
})

