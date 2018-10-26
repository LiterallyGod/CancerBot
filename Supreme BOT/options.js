  window.onload = function(){
    document.getElementById('saveInfo').onclick = function(){

      var userData = {
         "myName":   document.getElementById('names').value,
         "myEmail":  document.getElementById('email').value,
         "myPhoneNumber": document.getElementById('number').value,
         "myAddress": document.getElementById('adress').value,
         "myZip":   document.getElementById('zipCode').value,
         "myCity":  document.getElementById('city').value,
         "myState":  document.getElementById('state').value,
         "myCreditCardNum": document.getElementById('ccn').value,
         "myCreditCardExpMonth": document.getElementById('ccnm').value,
         "myCreditCardExpYear": document.getElementById('ccny').value,
         "myCvvNum": document.getElementById('ccnv').value,
         "itemCategory": document.getElementById('itemCat').value
      }
    chrome.storage.local.set(userData, function(){}); 
  }
}


