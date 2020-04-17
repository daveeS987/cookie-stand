'use strict';

var timesFormatArray = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var storeArray = [];

function Store(storeName, minHourlyCustomer, maxHourlyCustomer, avgCookiePerCustomer, cookieSaleEveryHour = [], totalSum = 0) {
  this.storeName = storeName;
  this.minHourlyCustomer = minHourlyCustomer;
  this.maxHourlyCustomer = maxHourlyCustomer;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.cookieSaleEveryHour = cookieSaleEveryHour;
  this.totalSum = totalSum;
  this.generateArrayCookiePerHour();
  this.generateTotalSum();
  storeArray.push(this);
}

Store.prototype.generateNumberOfCustomer = function () {
  return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
};

Store.prototype.generateArrayCookiePerHour = function () {
  var cookieSales = [];
  for (var i = 0; i < 14; i++) {
    cookieSales.push(Math.round(this.generateNumberOfCustomer() * this.avgCookiePerCustomer));
  }
  this.cookieSaleEveryHour = cookieSales;
};

Store.prototype.generateTotalSum = function () {
  var sum = 0;
  for (var j = 0; j < this.cookieSaleEveryHour.length; j++) {
    sum += this.cookieSaleEveryHour[j];
  }
  this.totalSum = sum;
};


var pEl = document.getElementById('table');

Store.prototype.renderRow = function() {
  // create Row
  var pEl = document.getElementById('table');
  var trEl = document.createElement('tr');
  pEl.appendChild(trEl);
  // create city Name
  var thEl = document.createElement('th');
  thEl.textContent = this.storeName;
  trEl.appendChild(thEl);
  // loop over salesArray and enter amount
  for (var i = 0; i < this.cookieSaleEveryHour.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookieSaleEveryHour[i];
    trEl.appendChild(tdEl);
  }
  // enter sum at the end
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalSum;
  trEl.appendChild(tdEl);
};

//  Instantiate and Initialize store Array //////////////////
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);



function createHeading() {
  // create table row
  var trEl = document.createElement('tr');
  pEl.appendChild(trEl);
  // create table heading
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
  // add Times heading
  for (var i = 0; i < timesFormatArray.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = timesFormatArray[i];
    trEl.appendChild(thEl);
  }
  // add Daily Location total
  var thElTotal = document.createElement('th');
  thElTotal.textContent = 'Daily Location Total';
  trEl.appendChild(thElTotal);
}
createHeading();


function createTableBody() {
  for (var i = 0; i < storeArray.length; i++) {
    storeArray[i].renderRow();
  }
}
createTableBody(storeArray);


function createTableFooter() {
  // create table row
  var trEl = document.createElement('tr');
  pEl.appendChild(trEl);
  // start with totals entry
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  // get totals from arrayOfTotal
  var totalOverAll = 0;
  for (var i = 0; i < timesFormatArray.length; i++) {
    var total = 0;
    for (var j = 0; j < storeArray.length; j++) {
      total += storeArray[j].cookieSaleEveryHour[i];
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = total;
    trEl.appendChild(tdEl);
    totalOverAll += total;
  }
  // enter totalOverall at the end
  tdEl = document.createElement('td');
  tdEl.textContent = totalOverAll;
  trEl.appendChild(tdEl);
}
createTableFooter();


















// function createStoreSalesTableBody (storeArr) {
//   for (var i = 0; i < storeArr.length; i++) {
//     // Create table row
//     var parentElTable = document.getElementById('table');
//     var tableRowEl = document.createElement('tr');
//     parentElTable.appendChild(tableRowEl);
//     // Add city as first element
//     var cityTd = document.createElement('td');
//     cityTd.textContent = `${storeArr[i].storeName}`;
//     tableRowEl.appendChild(cityTd);
//     // Add Cookie Sales for the rest of columns
//     for (var j = 0; j < storeArr[i].cookieSaleEveryHour.length; j++) {
//       var cookieSaleTd = document.createElement('td');
//       cookieSaleTd.textContent = `${storeArr[i].cookieSaleEveryHour[j]}`;
//       tableRowEl.appendChild(cookieSaleTd);
//     }
//     var totalTd = document.createElement('td');
//     totalTd.textContent = `${storeArr[i].totalSum}`;
//     tableRowEl.appendChild(totalTd);
//   }
// }
// createStoreSalesTableBody(storeArray);

