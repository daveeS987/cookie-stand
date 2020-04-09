'use strict';

// sales Data

// create separate JS object literals for each shop location that outputs the following to the sales.html file

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array… perhaps as a property of the object representing that location

//Display the values of each array as unordered lists in the browser

/*
Calculating the sum of these hourly totals; your output for each location should look like this:

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

// display list on sales.html

/*
object
- store location
- store min hourly customers
- store max hourly customers
- store average cookies per customer
- use method of that object to generate random number of customers per hour
- calculate and store cookies purchased for each hour at each location(use random number of customer times average)
- store the result for each location in a separate array
- display values of each array as unordered list
- get sum
*/

var seattleObj = {
  location: 'Seattle',
  minHourlyCustomer: 23,
  maxHourlyCustomer: 65,
  avgCookiePerCustomer: 6.3,
  startHour: 6,
  endHour: 19,
  hoursOpened: this.endHour - this.startHour,
  generateNumberOfCustomer: function () {
    return Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer;
  },
  generateCookiePerHour: function () {
    var cookiesPerHourArray = [];
    for (var i = this.startHour; i < this.endHour; i++) {
      cookiesPerHourArray.push(this.generateNumberOfCustomer() * this.avgCookiePerCustomer);
    }
    return cookiesPerHourArray;
  },
  generateTotalSum: function() {
    var total = 0;
    for (var j = 0; j < this.cookieSaleEveryHour.length; j++) {
      total += this.cookieSaleEveryHour[j];
    }
    return total;
  },
  cookieSaleEveryHour: this.generateCookiePerHour(),
  sum: this.generateTotalSum()
};

console.log(seattleObj);

