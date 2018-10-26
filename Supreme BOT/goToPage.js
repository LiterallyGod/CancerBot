var cat;
var url;
var item;
var lastIndexOfVarNeeded;
var hasVistedItem = false;
chrome.storage.local.get(null, function(userData){
		cat = userData.itemCategory;
	});

chrome.tabs.onUpdated.addListener(function(id, info, tab) {
	if (tab.url === "http://www.supremenewyork.com/") {
		if(cat === "jackets"){
			var newUrl = "http://www.supremenewyork.com/shop/all/jackets";
			url = newUrl;
			item = url.substring(39, 40 +  cat.length);
			hasVistedItem = true;
			chrome.tabs.update(tab.id, {url: newUrl});
		}else if(cat === "shirts"){
			var newUrl = "http://www.supremenewyork.com/shop/all/shirts";
			url = newUrl;
			item = url.substring(39, 40 +  cat.length);
			hasVistedItem = true;
			chrome.tabs.update(tab.id, {url: newUrl});
		}else if(cat === "tops_sweaters"){
			var newUrl = "http://www.supremenewyork.com/shop/all/tops_sweaters";
			url = newUrl;
			item = url.substring(39,  40 +  cat.length);
			hasVistedItem = true;
			chrome.tabs.update(tab.id, {url: newUrl});
		}else if(cat === "sweatshirts"){
			var newUrl = "http://www.supremenewyork.com/shop/all/sweatshirts";
			url = newUrl;
			item = url.substring(39, 40 + cat.length);
			hasVistedItem = true;
			chrome.tabs.update(tab.id, {url: newUrl});
		}else if(cat === "pants"){
			var newUrl = "http://www.supremenewyork.com/shop/all/pants";
			url = newUrl;
			item = url.substring(39, 40 +  cat.length);
			hasVistedItem = true;
			chrome.tabs.update(tab.id, {url: newUrl});
		}else if(cat === "t-shirts" ){
			var newUrl = "http://www.supremenewyork.com/shop/all/t-shirts";
			url = newUrl;
			item = url.substring(39, 40 +  cat.length);
			hasVistedItem = true;
			chrome.tabs.update(tab.id, {url: newUrl});
		}else if(cat === "hats"){
			var newUrl = "http://www.supremenewyork.com/shop/all/hats";
			url = newUrl;
			item = url.substring(39, 40 +  cat.length);
			hasVistedItem = true;
			chrome.tabs.update(tab.id, {url: newUrl});
		}else if(cat === "bags"){
			var newUrl = "http://www.supremenewyork.com/shop/all/bags";
			url = newUrl;
			item = url.substring(39, 40 +  cat.length);
			hasVistedItem = true;
			chrome.tabs.update(tab.id, {url: newUrl});
		}else if(cat === "accessories"){
			var newUrl = "http://www.supremenewyork.com/shop/all/accessories";
			url = newUrl;
			item = url.substring(39, 40 +  cat.length);
			hasVistedItem = true;
			chrome.tabs.update(tab.id, {url: newUrl});
		}else if(cat === "shoes"){
			var newUrl = "http://www.supremenewyork.com/shop/all/shoes";
			url = newUrl;
			item = url.substring(39, 40 +  cat.length);
			hasVistedItem = true;
			chrome.tabs.update(tab.id, {url: newUrl});
		}else if(cat === "skate"){
			var newUrl = "http://www.supremenewyork.com/shop/all/skate";
			url = newUrl;
			item = url.substring(39, 40 +  cat.length);
			hasVistedItem = true;
			chrome.tabs.update(tab.id, {url: newUrl});
		}else{
			var newUrl = "http://www.supremenewyork.com/shop/all";
			url = newUrl;
			item = url.substring(39, 40 + cat.length );
			hasVistedItem = true;
			chrome.tabs.update(tab.id, {url: newUrl});
		}
		// console.log(item);
		// console.log(cat);
		// console.log(item === cat);
		console.log(url.charAt(34) === "/");
	}else if(url.length >= 38 && url.charAt(34) === "/"){
		var delay = 5000;
		setTimeout(function() { 
			//console.log(url);
			var addtoCartButton = document.getElementById("cart-addf");
			//console.log(document.getElementById("cart-addf"));
			//var checkOutButton = document.getElementsByClassName("button checkout")[0];
			addtoCartButton.click();
			//checkOutButton.click();
		}, delay);
	}
});


