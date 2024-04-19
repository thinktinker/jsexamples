const arrCategories = new Array(
    {name: "Cat A", description: "Cars below 1600cc"},
    {name: "Cat B", description: "Cars above 1600cc"},
    {name: "Cat C", description: "Goods Vehicles and Buses"}
);

console.log(arrCategories.length);
console.log(arrCategories[0].name, arrCategories[0].description);

arrCategories.push({name: "Cat E", description: "Open"});
console.log(arrCategories);


