/*global window:false, $:false*/
/*jslint browser:true*/
var main = function () {
    "use strict";
    // TODO: Put all your code BELOW this line in this 'main' function
    var getPrice = function () {
        var the_price = 500;
        the_price += (this.speed === '4GHz') ? 300 : 100;
        the_price += (this.hdspace === '1TB') ? 150 : 80;
        the_price += (this.ram === '16GB') ? 200 : 100;
        return the_price;
    };

    var Computer = function (speed, hdspace, ram) {
        this.speed = speed;
        this.hdspace = hdspace;
        this.ram = ram;
    };
    Computer.prototype.price = getPrice;

    var workComputer = new Computer('3.4GHz', '500GB', '4GB');
    var homeComputer = new Computer('4GHz', '1TB', '16GB');
    var laptop = new Computer('2.93GHz', '250GB', '8GB');
    
    // TODO: Put all your code ABOVE this line in this 'main' function
    // Build an object/hash table/associative array of the Computer objects you were supposed to create
    // with user fiendly key names using an object literal.
    var computers = {
        "Work Computer": workComputer,
        "Home Computer": homeComputer,
        Laptop: laptop
    };
    // Append the prices of each property in the computers object/hash table/associative array
    for (var compName in computers) {
        $("#content").append("<h3>" + compName + "'s features:</h3>");
        for (var propName in computers[compName]) {
            if (propName != "price") {
                $("#content").append(propName + ": " + computers[compName][propName] + "<br />");
            }
        }
        $("#content").append("<strong>price</strong>: $" + computers[compName].price() + "<br />");
    }

    $("#content").append("<br/>");
};

// Bind the main function to the window.onload event
window.onload = main;