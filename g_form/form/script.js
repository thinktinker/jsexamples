// 10. element.setAttribute()
// Setting the Attributes of HTML select input

// Create the array to populate selectDom
const arrTopics = new Array("Methods", "Properties", "EventListeners");

// Create the array to store selected values (for submission)
const arrSelected = new Array();

// Declare constant selectDom to refer to <select> of id = "selectTopics"
const selectDom = document.getElementById("selectTopics");

// Set the attributes of selectDom
// selectDom.options[0] = new Option("Please select an option", "");
// selectDom.options[0].setAttribute("disabled", true);
selectDom.setAttribute("multiple", true);

// Populate the options in selectDom
arrTopics.forEach(topic => {
    selectDom.options.add(new Option(topic, topic));
});

// set the ui of the selection options to use bootstrap classes
for (let index = 0; index < arrTopics.length; index++) {
    selectDom.options[index].setAttribute("class", "btn btn-primary d-block m-2");
 }

// 11. element.getAttribute()
// get the Attributes's value(s) of selected options
selectDom.addEventListener("change", () => {

    // Create constant listSelected to refer to <ul> of id = ""
    const listSelected = document.getElementById("listSelected");

    // Create constant collection to be assigned the selected options from selectDom
    const collection = selectDom.selectedOptions;

    // iterate through collection
    for (let index = 0; index < collection.length; index++) {

        // Use getAttribute() to assign the selected option's value to const itemValue
        const itemValue =  collection[index].getAttribute("value");  // another approach: arrSelected.push(collection[index].value);
        
        // find whether the topic is already selected
        const found = arrSelected.find(item => {return item == itemValue;});

        // if the topic is not selected yet
        if(!found){

            // append the value to arrSelected
            arrSelected.push(itemValue);  // another approach: arrSelected.push(collection[index].value);
            console.log(arrSelected);

            // append and display the selected option in listSelected
            const listItem = document.createElement("li");
            listItem.style.listStyle = "none";
            const itemText = document.createTextNode(itemValue);
            listItem.appendChild(itemText);
            listSelected.appendChild(listItem);
        
        }

    }

})

// 12. element.addEventListener()
// Adding an event listener to a button

// Clear the selection from listSelected and arrSelected
// Use the splice method to remove all elements in an array
btnClearSelection.addEventListener("click", () => {
    
    document.getElementById("listSelected").innerHTML = "";
    arrSelected.splice(0, arrSelected.length);

    console.log(arrSelected);
});

// Challenge Statement:

// 1. Change script.js to allow only 1 selected item
