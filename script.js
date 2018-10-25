"use strict";

// Creates list of initial purchases
const purchases = [
    {
        name: "Pants for Bruce",
        price: 60,
        category: "Attire"
    },
    {
        name: "Avengers Tower Rebuild",
        price: 5000000,
        category: "Bills"
    },
    {
        name: "Shawarma",
        price: 20,
        category: "Food"
    } 
];

// Creates pie chart populated with initial values 
$(document).ready(() => {
    anychart.onDocumentReady(function() {

        let data = [{
                x: "Food",
                value: 25
            },
            {
                x: "Entertainment",
                value: 25
            },
            {
                x: "Attire",
                value: 25
            },
            {
                x: "Bills",
                value: 25
            }
        ];

        let chart = anychart.pie();
        chart.title("");
        chart.data(data);
        chart.container('container');
        chart.draw();
    });



});