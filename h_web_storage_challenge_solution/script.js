const listColors = document.querySelector("#list-colors");

function addItem(item) {
  const colorCard = document.createElement("section");
  colorCard.className = "card w-100";
  listColors.append(colorCard);

  const colorCardBody = document.createElement("article");
  colorCardBody.className = "card-body";
  colorCard.append(colorCardBody);

  const colorCardTitle = document.createElement("h5");
  colorCardTitle.className = "card-title";
  colorCardTitle.innerText = item.name;
  colorCardBody.append(colorCardTitle);

  const colorCardText = document.createElement("p");
  colorCardText.className = "card-text";
  colorCardText.innerText = item.pantone_value;
  colorCardBody.append(colorCardText);

  const colorCardColor = document.createElement("figure");
  colorCardColor.style = "background-color: " + item.color + ";";
  colorCardColor.innerText = item.color;
  colorCardBody.append(colorCardColor);

  const colorCardBreak = document.createElement("br");
  listColors.append(colorCardBreak);
}

// 1. Implement the function fetchColorsList() using the browser Fetch API to download the full color list from the following endpoint:
// https://reqres.in/api/unknown

async function fetchColorsList() {

    // method A: using a fetch request (with methods to address promises, e.g. resolve or reject)
    // ---------------------------------------------------------------------------------------------
    
    // let allColors = null

    // fetch('https://reqres.in/api/unknown')
    // .then(response => response.json())
    // .then(response => {                             // promise.resolve returned
    //         console.log(response);                  // log all the response's results
    //         // allColors = response.data;           // log only the response's results with the name: data
    //         // console.log(allColors);
    // })
    // .catch(error => console.error('Error:', error)); // catch a promise.reject

    // method B: Using a fetch request (WITHOUT addressing promises returned from the api)
    // --------------------------------------------------------------------------------------

    // Using fetch, call for the 1st page of Data from the given url

    // --- Refactored ---
    // const response = await fetch("https://reqres.in/api/unknown");
    // const resp = await response.json();

    const apiEndpoint = "https://reqres.in/api/unknown";
    const resp = await ftnFetch(apiEndpoint);

    console.log(resp);   // check the data that is returned

    let allColors = resp.data;
    let page = resp.page + 1;
    let totalPages = resp.total_pages;

    // Fetch the subsequent page(s) of Data (using a For Loop)
    for (let currentPage = page; currentPage <= totalPages; currentPage++) {
        
        // --- Refactored ---
        // const response = await fetch("https://reqres.in/api/unknown?page=" + currentPage);
        // const resp = await response.json();
        
        const resp = await ftnFetch(apiEndpoint, currentPage);

        allColors = [...allColors, ...resp.data];
    }
    
    // Clear listColors first
    listColors.innerHTML = "";

    // Create an array to store the color list to localStorage
    const arrColors = new Array();

    // Loop through each array index to be passed to addItem(item) function for display
    // Also, convert each JSON object item into a string for storage into arrColors
    allColors.forEach(item => {
        addItem(item);
        arrColors.push(item);
    });

    // Store the array data arrColors into the browser window's localStorage 
    window.localStorage.setItem("list-colors", JSON.stringify(arrColors));
}

// 2.  Implement the loadColorsFromStorage() function so the colour values are loaded from the local storage. 
//     Open the developer tools and verify that the data is stored in the local storage.

function loadColorsFromStorage() {
    
    // Retrive the values stored in list-colors from localstorage
    const arrColors = window.localStorage.getItem("list-colors");

    // parse the values into Objects (JSON.parse())
    const parsedColors = JSON.parse(arrColors);

    // iterate and populate the HTML page by calling addItem()
    parsedColors.forEach(item => {
        addItem(item);
    });
}

// Ensure that the document's content is loaded before
// running fetchColorList() and locdColoursFromStorage()
document.addEventListener("DOMContentLoaded", () => {
    fetchColorsList();
    // loadColorsFromStorage();
})

// Add a "clear" button that removes all the elements from the list.
btnClearColors.addEventListener("click", () => {
    listColors.innerHTML = "";
    window.localStorage.removeItem("list-colors");
})

// - Add a "load" button that calls the fetchColorsList() function and loads the colours again. 
btnLoadColors.addEventListener("click", () => {
    if(!listColors.innerHTML)
        fetchColorsList();
    else
        alert("Colors already loaded.");
})

// Refactor code, create a function ftnFetch() to call the fetch api
async function ftnFetch(endpoint, page = 1){

    // try-catch block addresses errors in the try block
    // and renders an output in the catch block if an error occurs
    try {
        // checks whether there is more than 1 page to load
        let url = endpoint;
        if (page > 1) 
            url = url + "?page=" + page;

        // call fetch() api here 
        const response = await fetch(url);
        
        // return the JSON data
        return await response.json();

    } catch (error) {
        listColors.innerHTML = "<span class='p-2'> Unable to load colours. <span>";
    }
}