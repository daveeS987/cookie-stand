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
  generateCookiePerHour: function() {
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

// seattle.generateCookiePerHour();
// seattle.generateTotalSum();
console.log('first run: ' + seattle.totalSum);
console.log('first run: ' + seattle.cookieSaleEveryHour);
seattle.generateCookiePerHour();
seattle.generateTotalSum();
console.log(seattle.totalSum);
console.log(seattle.cookieSaleEveryHour);
