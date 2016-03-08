var Vehicle = function() {
    this.speed = 1;
    this.damagePts = 0;
}

Vehicle.prototype.insert = function() {
    var newVehicle = $('<div class= "vehicle ' + this.type + '" id=' + this.id + '></div>');
    $('.container').append(newVehicle);
    var left = Math.floor(Math.random() * document.documentElement.clientWidth);
    var top = Math.floor(Math.random() * document.documentElement.clientHeight);
    $('#'+this.id).css("left", left);
    $('#'+this.id).css("top", top);
    $('#'+this.id).css("background-color", 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')');
    this.move();
}

Vehicle.prototype.move = function() {
    var newDirectionIndex = Math.floor(Math.random() * this.directions.length);
    var newDirection = this.directions[newDirectionIndex];
    console.log("moving", this.type, newDirection);
    var duration = 2000;
    if (newDirection == "N") {
        $('#'+this.id).css("transform", "rotate(90deg)");
        $('#'+this.id).animate({top: "-=400"}, duration / this.speed);
    }
    if (newDirection == "S") {
        $('#'+this.id).css("transform", "rotate(-90deg)");
        $('#'+this.id).animate({top: "+=400"}, duration / this.speed);
    }
    if (newDirection == "W") {
        $('#'+this.id).css("transform", "rotate(0)");
        $('#'+this.id).animate({left: "-=400"}, duration / this.speed);
    }
    if (newDirection == "E") {
        $('#'+this.id).css("transform", "rotate(180deg)");
        $('#'+this.id).animate({left: "+=400"}, duration / this.speed);
    }
    if (newDirection == "NW") {
        $('#'+this.id).css("transform", "rotate(45deg)");
        $('#'+this.id).animate({left: "-=300", top: "-=300"}, duration / this.speed);
    }
    if (newDirection == "NE") {
        $('#'+this.id).css("transform", "rotate(135deg)");
        $('#'+this.id).animate({left: "+=300", top: "-=300"}, duration / this.speed);
    }
    if (newDirection == "SW") {
        $('#'+this.id).css("transform", "rotate(-45deg)");
        $('#'+this.id).animate({left: "-=300", top: "+=300"}, duration / this.speed);
    }
    if (newDirection == "SE") {
        $('#'+this.id).css("transform", "rotate(-135deg)");
        $('#'+this.id).animate({left: "+=300", top: "+=300"}, duration / this.speed);
    }
}

Vehicle.prototype.damage = function() {
    
}

Vehicle.prototype.totaled = function() {
    
}


var Car = function() {
    Vehicle.call(this);
    this.directions = ["W", "E"];
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

var CopCar = function() {
    Car.call(this);
    this.directions = ["N", "S"];
}
CopCar.prototype = Object.create(Car.prototype);
CopCar.prototype.constructor = CopCar;

var Motorcycle = function() {
    Vehicle.call(this);
    this.speed = 2;
    this.directions = ["NW", "NE", "SW", "SE"];
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

var Tank = function() {
    Vehicle.call(this);
    this.speed = 0.5;
    this.directions = ["N", "S", "W", "E", "NW", "NE", "SW", "SE"]
}
Tank.prototype = Object.create(Vehicle.prototype);
Tank.prototype.constructor = Tank;


var allVehicles = [];


var addCar = function() {
    allVehicles.push(new Car());
    allVehicles[allVehicles.length - 1].id = allVehicles.length - 1;
    allVehicles[allVehicles.length - 1].type = "car";
    allVehicles[allVehicles.length - 1].insert();
}

var addCopCar = function() {
    allVehicles.push(new CopCar());
    allVehicles[allVehicles.length - 1].id = allVehicles.length - 1;
    allVehicles[allVehicles.length - 1].type = "copCar";
    allVehicles[allVehicles.length - 1].insert();
}

var addMotorcycle = function() {
    allVehicles.push(new Motorcycle());
    allVehicles[allVehicles.length - 1].id = allVehicles.length - 1;
    allVehicles[allVehicles.length - 1].type = "motorcycle";
    allVehicles[allVehicles.length - 1].insert();
}

var addTank = function() {
    allVehicles.push(new Tank());
    allVehicles[allVehicles.length - 1].id = allVehicles.length - 1;
    allVehicles[allVehicles.length - 1].type = "tank";
    allVehicles[allVehicles.length - 1].insert();
}

function randomNum() {
    return Math.floor((Math.random() * 150)) + 50;
}

$(document).ready(function() {
    $('#btnCar').click(function() {
        addCar();
    });
    $('#btnCopCar').click(function() {
        addCopCar();
    });
    $('#btnMotorcycle').click(function() {
        addMotorcycle();
    });
    $('#btnTank').click(function() {
        addTank();
    });
});