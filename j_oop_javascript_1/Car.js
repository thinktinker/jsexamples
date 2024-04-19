// a) Constructor function for creating a Car object
class Car {
    constructor(make, model, year){
        this.make = make; // Property to store the car's make
        this.model = model; // Property to store the car's model
        this.year = year; // Property to store the car's year
        this.kilometersDriven = 0; // Property to track the kilometers driven by the car
    }


    // Method to drive the car and update kilometers driven
    drive(distance) {
        this.kilometersDriven += distance;
        console.log(`The ${this.year} ${this.make} ${this.model} has been driven ${distance} km.`);
    };

    // Method to get the total kilometers driven by the car
    getTotalKilometersDriven() {
        return this.kilometersDriven;
    };
}

// b) Creating a new instance of Car
let myCar = new Car("Toyota", "Raize", 2022);

// c) Call the method drive() to update the distance of the instance of Car by 100
myCar.drive(100);

// d) Call the method getTotalKilometersDriven to retrive the mileage of the instance of car
myCar.getTotalKilometersDriven();