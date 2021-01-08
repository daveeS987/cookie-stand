'use strict';

var timesFormatArray = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var storeArray = [];
var pEl = document.getElementById('table');

function addElementToPage(elementType, content, parentEl) {
  var newEl = document.createElement(elementType);
  newEl.textContent = content;
  parentEl.appendChild(newEl);
}

function createRowElement() {
  trEl = document.createElement('tr');
  pEl.appendChild(trEl);
}

function Store(storeName, minHourlyCustomer, maxHourlyCustomer, avgCookiePerCustomer) {
  this.storeName = storeName;
  this.minHourlyCustomer = minHourlyCustomer;
  this.maxHourlyCustomer = maxHourlyCustomer;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.cookieSaleEveryHour = [];
  this.generateArrayCookiePerHour();
  this.renderRow();
  storeArray.push(this);
}

// turn this into a random generator and global function
function generateRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Store.prototype.generateNumberOfCustomer = function () {
//   return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
// };

Store.prototype.generateArrayCookiePerHour = function () {
  // var cookieSales = [];
  for (var i = 0; i < 14; i++) {
    this.cookieSaleEveryHour.push(Math.round(generateRandomNum(this.minHourlyCustomer, this.maxHourlyCustomer) * this.avgCookiePerCustomer));
  }
  // this.cookieSaleEveryHour = cookieSales;
};

Store.prototype.renderRow = function () {
  createRowElement();
  addElementToPage('th', this.storeName, trEl);
  var total = 0;
  for (var i = 0; i < this.cookieSaleEveryHour.length; i++) {
    addElementToPage('td', this.cookieSaleEveryHour[i], trEl);
    total += this.cookieSaleEveryHour[i];
  }
  addElementToPage('td', total, trEl);
};

function createHeading() {
  var trEl = addElementToPage('tr', '', pEl);
  addElementToPage('th', '', trEl);
  for (var i = 0; i < timesFormatArray.length; i++) {
    addElementToPage('th', timesFormatArray[i], trEl);
  }
  addElementToPage('th', 'Daily Location Total', trEl);
}

function createTableFooter() {
  var trEl = addElementToPage('tr', '', pEl);
  addElementToPage('th', 'Totals', trEl);
  var totalOverAll = 0;
  for (var i = 0; i < timesFormatArray.length; i++) {
    var total = 0;
    for (var j = 0; j < storeArray.length; j++) {
      total += storeArray[j].cookieSaleEveryHour[i];
    }
    addElementToPage('td', total, trEl);
    totalOverAll += total;
  }
  addElementToPage('td', totalOverAll, trEl);
}

createHeading();
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);
createTableFooter();

function handleSubmit(event) {
  event.preventDefault();

  var storeName = event.target.store.value;
  var minCust = parseInt(event.target.minHourly.value);
  var maxCust = parseInt(event.target.maxHourly.value);
  var avg = parseInt(event.target.average.value);

  var lastChild = pEl.lastChild;
  pEl.removeChild(lastChild);
  new Store(storeName, minCust, maxCust, avg);
  createTableFooter();

  event.target.store.value = null;
  event.target.minHourly.value = null;
  event.target.maxHourly.value = null;
  event.target.average.value = null;
}

var userAnswer = document.getElementById('userForm');
userAnswer.addEventListener('submit', handleSubmit);
