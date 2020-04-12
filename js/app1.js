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

//  Instantiate and Initialize store Array //////////////////
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

// Call on GenerateArrayCookiePerHour & GenerateTotalSum ////
function callOnGenerateArrayAndTotal(array) {
  for (var i = 0; i < array.length; i++) {
    array[i].generateArrayCookiePerHour();
    array[i].generateTotalSum();
    console.log(array[i]);
  }
}
callOnGenerateArrayAndTotal(storeArray);



function createHeading(timesArray) {
  var parentElHeading = document.getElementById('table');
  var tHeadingEl = document.createElement('th');
  parentElHeading.appendChild(tHeadingEl);
  var tdEl = document.createElement('th');
  tHeadingEl.appendChild(tdEl);

  for (var i = 0; i < timesArray.length; i++) {
    // Add times
    var tdElTimes = document.createElement('th');
    tdElTimes.textContent = `${timesArray[i]}`;
    parentElHeading.appendChild(tdElTimes);
  }

  var tdElTotal = document.createElement('th');
  tdElTotal.textContent = 'Daily Location Total';
  parentElHeading.appendChild(tdElTotal);
}
createHeading(timesFormatArray);



function createStoreSalesRow (storeArr) {
  for (var i = 0; i < storeArr.length; i++) {
    // Create table row
    var parentElTable = document.getElementById('table');
    var tableRowEl = document.createElement('tr');
    parentElTable.appendChild(tableRowEl);
    // Add city as first element
    var cityTd = document.createElement('td');
    cityTd.textContent = `${storeArr[i].storeName}`;
    tableRowEl.appendChild(cityTd);
    // Add Cookie Sales for the rest of columns
    for (var j = 0; j < storeArr[i].cookieSaleEveryHour.length; j++) {
      var cookieSaleTd = document.createElement('td');
      cookieSaleTd.textContent = `${storeArr[i].cookieSaleEveryHour[j]}`;
      tableRowEl.appendChild(cookieSaleTd);
    }
    var totalTd = document.createElement('td');
    totalTd.textContent = `${storeArr[i].totalSum}`;
    tableRowEl.appendChild(totalTd);
  }
}
createStoreSalesRow(storeArray);



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



function createTableFooter(arrayOfTotal) {
  // Create Table row
  var parentElTable = document.getElementById('table');
  var tableRowEl = document.createElement('tr');
  parentElTable.appendChild(tableRowEl);
  // Add the string total as first element
  var totalTd = document.createElement('td');
  totalTd.textContent = 'Totals';
  tableRowEl.appendChild(totalTd);
  // add sum of all sales for each time
  for (var i = 0; i < arrayOfTotal.length; i++) {
    var hourlyTotalTd = document.createElement('td');
    hourlyTotalTd.textContent = `${arrayOfTotal[i]}`;
    tableRowEl.appendChild(hourlyTotalTd);
  }
}
createTableFooter(arrayOfTotalPerHour);
