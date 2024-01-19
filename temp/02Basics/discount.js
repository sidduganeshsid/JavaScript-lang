//LISTING price
//selling price
//Discount = (L - S)/L*100

var sellingPrice = 4499
var listingPrice = 5999

var discountPercent = ((listingPrice - sellingPrice)/listingPrice) * 100;

console.log("Discount percentage is : "+Math.round(discountPercent)+"% off");

var result = listingPrice > sellingPrice;

console.log(typeof result)
//many Math libraries exists
// one is Math.round()