var timesFormatArray = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var storeArray = [];

function Store(storeName, minHourlyCustomer, maxHourlyCustomer, avgCookiePerCustomer, cookieSaleEveryHour = [], totalSum = 0) {
  this.storeName = storeName;
  this.minHourlyCustomer = minHourlyCustomer;
  this.maxHourlyCustomer = maxHourlyCustomer;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.cookieSaleEveryHour = cookieSaleEveryHour;
  this.totalSum = totalSum;
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

Store.prototype.renderRow = function() {
  // create Row
  var pEl = document.getElementById('table');
  var trEl = document.createElement('tr');
  pEl.appendChild(trEl);
  // create city Name
  var thEl = document.createElement('th');
  thEl.textContent = `${this.storeName}`;
  trEl.appendChild(thEl);
  // loop over sales and add amount
  for (var i = 0; i < this.cookieSaleEveryHour.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = `${this.cookieSaleEveryHour[i]}`;
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = `${this.totalSum}`;
  trEl.appendChild(tdEl);
};

//  Instantiate and Initialize store Array //////////////////
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

function createHeading(timesArray) {
  var pEl = document.getElementById('table');
  var trEl = document.createElement('tr');
  pEl.appendChild(trEl);
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);

  for (var i = 0; i < timesArray.length; i++) {
    // Add times
    thEl = document.createElement('th');
    thEl.textContent = `${timesArray[i]}`;
    trEl.appendChild(thEl);
  }
  var thElTotal = document.createElement('th');
  thElTotal.textContent = 'Daily Location Total';
  trEl.appendChild(thElTotal);
}
createHeading(timesFormatArray);

// Call on GenerateArrayCookiePerHour & GenerateTotalSum ////
function callOnGenerateAndRender(array) {
  for (var i = 0; i < array.length; i++) {
    array[i].generateArrayCookiePerHour();
    array[i].generateTotalSum();
    array[i].renderRow();
    console.log(array[i]);
  }
}
callOnGenerateAndRender(storeArray);



// function createStoreSalesRow (storeArr) {
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
// createStoreSalesRow(storeArray);



function getTotalPerHour(storeArr) {
  var hourlyTotalArray = [];
  for (var i = 0; i < storeArr[0].cookieSaleEveryHour.length; i++) {
    var total = 0;
    for(var j = 0; j < storeArr.length; j++) {
      total += storeArr[j].cookieSaleEveryHour[i];
    }
    hourlyTotalArray.push(total);
  }
  return hourlyTotalArray;
}
var arrayOfTotalPerHour = getTotalPerHour(storeArray);
console.log(arrayOfTotalPerHour);

function getOverallTotal(storeArr) {
  var total = 0;
  for (var i = 0; i < storeArr.length; i++) {
    total += storeArr[i].totalSum;
  }
  return total;
}
var totalOverAll = getOverallTotal(storeArray);

function createTableFooter(arrayOfTotal) {
  var pEl = document.getElementById('table');
  var trEl = document.createElement('tr');
  pEl.appendChild(trEl);
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  for (var i = 0; i < arrayOfTotal.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = `${arrayOfTotal[i]}`;
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = `${totalOverAll}`;
  trEl.appendChild(tdEl);
}
createTableFooter(arrayOfTotalPerHour);
