"use strict";
const tableBody = document.getElementById("namesData");
const totalRow = document.getElementById("table-footer");
const namesData = [
    { "names": [
        { "name": "Ville", "amount": 24 },
        { "name": "Anna", "amount": 6 },
        { "name": "Antti", "amount": 22 },
        { "name": "Sanna", "amount": 5 },
        { "name": "Mikko", "amount": 19 },
        { "name": "Minna", "amount": 5 },
        { "name": "Timo", "amount": 18 },
        { "name": "Satu", "amount": 5 },
        { "name": "Tuomas", "amount": 16 },
        { "name": "Tiina", "amount": 5 },
        { "name": "Tero", "amount": 15 },
        { "name": "Kati", "amount": 5 },
        { "name": "Sami", "amount": 15 },
        { "name": "Henna", "amount": 4 },
        { "name": "Mika", "amount": 12 },
        { "name": "Liisa", "amount": 4 },
        { "name": "Janne", "amount": 12 },
        { "name": "Paula", "amount": 4 },
        { "name": "Petri", "amount": 11 },
        { "name": "Suvi", "amount": 4 }
        ]
    }
];

window.onload = () => {
    loadTableData(data);
};

let data = namesData[0].names;
let sortDirection = false;

// loads data into the table body, calculates the total row number and loads this row 
function loadTableData() {
    let dataHtml = "";
    let nameCount = data.reduce((acc, cur) => acc + cur.amount, 0);
    for (let item of data) {
        dataHtml += `<tr><td>${item.name}</td><td>${item.amount}</td></tr>`;
    }
    tableBody.innerHTML = dataHtml;
    totalRow.innerHTML = `<tr><td>Total</td><td>${nameCount}</td></tr>`;
}

// sorts the columns when clicked and changes the sort styling 
function sortColumn(columnName) {
    const dataType = typeof data[0][columnName];
    sortDirection = !sortDirection;
    switch(dataType) {
    case 'number':
        document.getElementById('amount').setAttribute("class", "th-sort-asc-" + sortDirection);
        document.getElementById('name').setAttribute("class", "th-unsorted");
        data = data.sort((a, b) => {
            return sortDirection ? a[columnName] - b[columnName] : b[columnName] - a[columnName]
        });
    break;
    case 'string':
        document.getElementById('name').setAttribute("class", "th-sort-asc-" + sortDirection);
        document.getElementById('amount').setAttribute("class", "th-unsorted");
        data = data.sort((a, b) => {
            return sortDirection && (a[columnName] > b[columnName]) ? 1 : -1
        });
    break;
    } 
    
    loadTableData(data);
}

// filters table rows following user input and updates the total row
function filterName() {
    
    let searchQuery = document.getElementById("search-input").value;
    let dataHtml = "";
    let nameCount = 0;
    for (let item in data) {
        if (data[item].name.includes(searchQuery)) {
            dataHtml += `<tr><td>${data[item].name}</td><td>${data[item].amount}</td></tr>`;
            nameCount += data[item].amount;
        }
    }
    tableBody.innerHTML = dataHtml;
    totalRow.innerHTML = `<tr><td>Total</td><td>${nameCount}</td></tr>`;    
}