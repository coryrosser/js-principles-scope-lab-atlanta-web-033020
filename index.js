// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(str) {
    bestCustomer = str;
}

const leastFavoriteCustomer = 'Cory';

function changeLeastFavoriteCustomer(str) {
    leastFavoriteCustomer = 'Bob'
}