"use strict";

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
                x: "Clothing",
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