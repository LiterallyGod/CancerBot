// defines your check out information
var myNameForCheckOut;
var myEmailForCheckOut;
var myPhoneNumberForCheckOut;
var myAddressForCheckOut;
var myZipForCheckOut;
var myCityForCheckOut;
var myStateForCheckOut;
var myCreditCardNumberForCheckOut;
var myCreditCardExpMonthForCheckOut;
var myCreditCardExpYearForCheckOut;
var myCvvNumForCheckOut;
var reCaptchaToken;

chrome.storage.local.get(null, function(userData){
	myNameForCheckOut = userData.myName;
});

chrome.storage.local.get(null, function(userData){
	myEmailForCheckOut = userData.myEmail;
});

chrome.storage.local.get(null, function(userData){
	myPhoneNumberForCheckOut = userData.myPhoneNumber;
});

chrome.storage.local.get(null, function(userData){
	myAddressForCheckOut = userData.myAddress;
});

chrome.storage.local.get(null, function(userData){
	myZipForCheckOut = userData.myZip;
});

chrome.storage.local.get(null, function(userData){
	myCityForCheckOut = userData.myCity;
});

chrome.storage.local.get(null, function(userData){
	myStateForCheckOut = userData.myState;
});

chrome.storage.local.get(null, function(userData){
	myCreditCardNumberForCheckOut = userData.myCreditCardNum;
});

chrome.storage.local.get(null, function(userData){
	myCreditCardExpMonthForCheckOut = userData.myCreditCardExpMonth;
});

chrome.storage.local.get(null, function(userData){
	myCreditCardExpYearForCheckOut = userData.myCreditCardExpYear;
});

chrome.storage.local.get(null, function(userData){
	myCvvNumForCheckOut = userData.myCvvNum;
});

// delays for fucntions defined below. These delays mimic real user behavior to bypass reCaptcha. 
var delay = 1500;
var microDelay1 = 200;
var microDelay2 = 1000;
var microDelay3 = 250;

// finds the fields on supremenewyork.com for checkout
var billName = document.getElementById("order_billing_name");
var email = document.getElementById("order_email");
var phoneNumber = document.getElementById("order_tel");
var adress = document.getElementById("bo");
var zip = document.getElementById("order_billing_zip");
var city = document.getElementById("order_billing_city");
var state = document.getElementById("order_billing_state");
var creditCardNumber = document.getElementById("nnaerb");
var creditCardExpMonth = document.getElementById("credit_card_month");
var creditCardExpYear = document.getElementById("credit_card_year");
var cvvNum = document.getElementById("orcer");
var agreeToTerms = document.getElementsByClassName("has-checkbox terms")[0];
var processPayment = document.getElementsByClassName("button ")[0];

// fills in your information
setTimeout(function(){
	billName.value = myNameForCheckOut;
	email.value = myEmailForCheckOut;
	zip.value = myZipForCheckOut;
	city.value = myCityForCheckOut; 
	state.value = myStateForCheckOut;
},microDelay2);

setTimeout(function (){
	phoneNumber.value = myPhoneNumberForCheckOut; 
	creditCardExpMonth.value = myCreditCardExpMonthForCheckOut;
	creditCardExpYear.value = myCreditCardExpYearForCheckOut;
},microDelay3);

setTimeout(function(){
	adress.value = myAddressForCheckOut;
	creditCardNumber.value = myCreditCardNumberForCheckOut;
	cvvNum.value = myCvvNumForCheckOut;
}, microDelay1);

// clicks process payment button
setTimeout(function() { 
	agreeToTerms.click();
	processPayment.click();
}, delay);