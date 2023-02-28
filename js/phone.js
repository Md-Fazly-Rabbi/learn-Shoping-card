
function inputField(isIncrease , ){
  const phoneField  = document.getElementById('phone-number-field')
  const newPhoneString = phoneField.value ;
  const newPhone = parseInt(newPhoneString)
  let totalPhone;
  if(isIncrease){
    totalPhone = newPhone + 1 ;
  }
  else{
    totalPhone = newPhone - 1 ;
  }
  

  phoneField.value = totalPhone;


 
  return totalPhone ;
}

function updateTotalPrice (newPhone){
  const totalPrice = newPhone * 1219 ;
 const totalElement = document.getElementById('phone-total')
 totalElement.innerText = totalPrice
}
document.getElementById('btn-phone-plus').addEventListener('click' , function(){
 const newPhone = inputField(true)
updateTotalPrice(newPhone)
totalAmount();
 
}) 

document.getElementById('btn-phone-minus').addEventListener('click' , function(){

newPhone = inputField(false)
updateTotalPrice(newPhone )
totalAmount();
})