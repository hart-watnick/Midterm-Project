"use strict";

$(document).ready(() => {
    // Creates list of initial purchases
    const purchases = [{
            name: "Pants for Bruce",
            price: 60,
            category: "Attire"
        },
        {
            name: "Parking Ticket",
            price: 100,
            category: "Bills"
        },
        {
            name: "Pants for Bruce",
            price: 60,
            category: "Attire"
        },
        {
            name: "Shawarma",
            price: 20,
            category: "Food"
        },
        {
            name: "Missiles",
            price: 3000,
            category: "Weapons"
        },
        {
            name: "Pants for Bruce",
            price: 60,
            category: "Attire"
        },
        {
            name: "Hawkeye",
            price: 400,
            category: "Weapons"
        },
        {
            name: "City Repairs",
            price: 10000,
            category: "Bills"
        },
        {
            name: "Thor's Bar Tab",
            price: 600,
            category: "Food"
        }
    ];

    // This function creates totals by category
    const categoryTotals = (purchases) => {
        let food = 0,
            attire = 0,
            bills = 0,
            weapons = 0;
            // catTotals = [];
        for (let purchase of purchases) {
            switch (purchase.category) {
                case "Attire":
                    attire += Number(purchase.price);
                    break;
                case "Food":
                    food += Number(purchase.price);
                    break;
                case "Bills":
                    bills += Number(purchase.price);
                    break;
                case "Weapons":
                    weapons += Number(purchase.price);
                    break;
                default:
                    break;
            }
        }
        return [{
            x: "Food",
            value:food
        },
        {
            x: "Attire",
            value: attire
        },
        {
            x: "Bills",
            value: bills
        }, 
        { 
            x: "Weapons",
            value: weapons
        }];
    };

    let chartData = categoryTotals(purchases);
    console.log(chartData);

    // Creates pie chart populated with initial values 
    anychart.onDocumentReady(function () {
        let chart = anychart.pie();
        chart.title("");
        chart.data(chartData);
        chart.container('container');
        chart.draw();
    });

    // Adds new purchases to purchase array and redraws chart with ne info
    $(document).on("click", ".category-btn", (event) => {
        let newItem = {
            name: $(".itemName")[0].value,
            price: Number($(".price")[0].value),
            category: $(".catSelector")[0].value
        };

        $(".pie-chart").empty().append(`<div id="container" style="width: 100%; height: 100%"></div>`);

        purchases.push(newItem);
        chartData = categoryTotals(purchases);
        let chart = anychart.pie();
        chart.title("");
        chart.data(chartData);
        chart.container('container');
        chart.draw();
        // anychart.(function () {
        //     let chart = anychart.pie();
        //     chart.title("");
        //     chart.data(chartData);
        //     chart.container('container');
        //     chart.draw();
        // });
    });


});