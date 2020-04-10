'use strict';

// Sales Data

// create separate JS object literals for each shop location that outputs the following to the sales.html file

/*
object
- store location
- store min hourly customers
- store max hourly customers
- store average cookies per customer
- use method to generate random number of customers per hour
- calculate and store cookies purchased for each hour at each location(use random number of customer times average)
- store the result for each location in a separate array
- display values of each array as unordered list
- get sum
*/

//Display the values of each array as unordered lists in the browser
/*

Seattle

6am: 16 cookies
7am: 20 cookies
8am: 35 cookies
9am: 48 cookies
10am: 56 cookies
11am: 77 cookies
12pm: 93 cookies
1pm: 144 cookies
2pm: 119 cookies
3pm: 84 cookies
4pm: 61 cookies
5pm: 23 cookies
6pm: 42 cookies
7pm: 57 cookies
Total: 875 cookies
*/

var timesFormatArray = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function generateFormatedList(timesArray, cookieSalesArray, total) {
  var formatedList = [];
  for (var k = 0; k < timesArray.length; k++) {
    var listString = `${timesArray[k]}: ${cookieSalesArray[k]} cookies`;
    formatedList.push(listString);
  }
  formatedList.push(`Total: ${total} cookies`);
  return formatedList;
}
// Seattle
var seattle = {
  location: 'Seattle',
  minHourlyCustomer: 23,
  maxHourlyCustomer: 65,
  avgCookiePerCustomer: 6.3,
  startHour: 6,
  endHour: 20,
  cookieSaleEveryHour: [],
  totalSum: 0,
  generateNumberOfCustomer: function() {
    return Math.round(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
  },
  generateArrayCookiePerHour: function() {
    var cookieSales = [];
    for (var i = this.startHour; i < this.endHour; i++) {
      cookieSales.push(Math.round(this.generateNumberOfCustomer() * this.avgCookiePerCustomer));
    }
    this.cookieSaleEveryHour = cookieSales;
  },
  generateTotalSum: function() {
    var sum = 0;
    for (var j = 0; j < this.cookieSaleEveryHour.length; j++) {
      sum += this.cookieSaleEveryHour[j];
    }
    this.totalSum = sum;
  },
};

seattle.generateArrayCookiePerHour();
seattle.generateTotalSum();
var seattleFormatedList = generateFormatedList(timesFormatArray, seattle.cookieSaleEveryHour, seattle.totalSum);

var pElSeattle = document.getElementById('seattleList');
for (var l = 0; l < seattleFormatedList.length; l++) {
  var liElSeattle = document.createElement('li');
  liElSeattle.textContent = `${seattleFormatedList[l]}`;
  pElSeattle.appendChild(liElSeattle);
}


// Tokyo
var tokyo = {
  location: 'Tokyo',
  minHourlyCustomer: 3,
  maxHourlyCustomer: 24,
  avgCookiePerCustomer: 1.2,
  startHour: 6,
  endHour: 20,
  cookieSaleEveryHour: [],
  totalSum: 0,
  generateNumberOfCustomer: function() {
    return Math.round(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
  },
  generateArrayCookiePerHour: function() {
    var cookieSales = [];
    for (var i = this.startHour; i < this.endHour; i++) {
      cookieSales.push(Math.round(this.generateNumberOfCustomer() * this.avgCookiePerCustomer));
    }
    this.cookieSaleEveryHour = cookieSales;
  },
  generateTotalSum: function() {
    var sum = 0;
    for (var j = 0; j < this.cookieSaleEveryHour.length; j++) {
      sum += this.cookieSaleEveryHour[j];
    }
    this.totalSum = sum;
  },
};

tokyo.generateArrayCookiePerHour();
tokyo.generateTotalSum();
var tokyoFormatedList = generateFormatedList(timesFormatArray, tokyo.cookieSaleEveryHour, tokyo.totalSum);
console.log(tokyoFormatedList);

var pEltokyo = document.getElementById('tokyoList');
console.log(pEltokyo);
for (var m = 0; l < tokyoFormatedList.length; m++) {
  var liEltokyo = document.createElement('li');
  liEltokyo.textContent = `${tokyoFormatedList[m]}`;
  pEltokyo.appendChild(liEltokyo);
}



