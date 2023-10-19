function hideAllContentDivs(){
    var contentDivs = document.getElementsByClassName('content');
    for (var i = 0; i < contentDivs.length; ++i) {
        var div = contentDivs[i];  
        div.style.display='none';
    }
  };

let myAccountBalance = parseInt(document.getElementById("myAccountBalance1").innerText);
function sendMoney(){
   var enteredName = document.getElementById("enterName").value;
   var enteredAmount = parseInt(document.getElementById("enterAmount").value);

   if (enteredAmount > 10000) {
      alert("Maximum amount limit reached.")
   }
   if (enteredAmount==0 ){
    alert("Entered Amount not valid")
   }
    else {
      var UserBankAccount = enteredName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(UserBankAccount).innerHTML) + enteredAmount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance1").innerText) - enteredAmount
      if (myAccountBalance>=0){
        document.getElementById("myAccountBalance1").innerText = myAccountBalance
        document.getElementById("myAccountBalance2").innerText = myAccountBalance
        document.getElementById("myAccountBalance3").innerText = myAccountBalance
        document.getElementById(UserBankAccount).innerHTML = finalAmount;
        alert(`Successful Transaction !  
    Rs ${enteredAmount} is sent to ${enteredName}@email.com.`)


      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`Rs ${enteredAmount} is sent to recepient with Email-id ${enteredName}@email.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
      }
      else {
        alert("Insufficient Balance.")
      }

   }
}

