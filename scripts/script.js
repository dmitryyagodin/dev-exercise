"use strict";

function tableViewChange() {
    let tableView = document.getElementById("table-view").value;
    switch(tableView) {
        case "order-by-name":
            sortColumn('name');
            break;
        case "order-by-count":
            sortColumn('amount');
            break;
    }
}

let sortDirection = false;
let namesData = [
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
    loadTableData(namesData);
};

// the following functionality was borrowed and further developed from Dylan Israel's tutorial (see: https://youtu.be/ri5Nqe_IK50)

function loadTableData(namesData) {
    const tableBody = document.getElementById("namesData");
    let dataHtml = "";
    for (let person of namesData[0].names) {
        dataHtml += `<tr><td>${person.name}</td><td>${person.amount}</td></tr>`;
    }

    tableBody.innerHTML = dataHtml;
    const totalRow = document.getElementById("table-footer");
    let data = namesData[0].names;
    let nameCount = data.reduce((acc, cur) => acc + cur.amount, 0);
    
    totalRow.innerHTML = `<tr><td>Total</td><td>${nameCount}</td></tr>`;
}

function sortColumn(columnName) {
    const dataType = typeof namesData[0].names[0][columnName];
    sortDirection = !sortDirection;

    switch(dataType) {
    case 'number':
    sortNumberColumn(sortDirection, columnName);
    break;
    case 'string':
    sortStringColumn(sortDirection, columnName);
    break;
    } 
    
    loadTableData(namesData);
}

function sortNumberColumn(sortDirection, columnName) {
    namesData[0].names = namesData[0].names.sort((n1, n2) => {
        return sortDirection ? n1[columnName] - n2[columnName] : n2[columnName] - n1[columnName]
    });
}
// I had to come up with sortStringColumn myself 
function sortStringColumn(sort, columnName) {
    namesData[0].names = namesData[0].names.sort((n1, n2) => {
        return sortDirection && (n1[columnName] > n2[columnName]) ? 1 : -1
    });
}

//// Moved this function into load table data
// function totalCount() {
//     const totalRow = document.getElementById("table-footer");
//     let data = namesData[0].names;
//     let nameCount = data.reduce((acc, cur) => acc + cur.amount, 0);
//     totalRow.innerHTML = `<tr><td>Total</td><td>${nameCount}</td></tr>`;
// }