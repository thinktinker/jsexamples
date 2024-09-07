async function ftnFetch(page=1){
  
  // TODO: fetch color list remotely
  let url = "https://reqres.in/api/unknown";

  if(page > 1)
    url += `?page=${page}`;

  const response = await fetch(url);
  const resp = await response.json();

  // TODO: return the fetched colours to the caller
  return resp;
}







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

// Implement the function fetchColorsList() using the browser Fetch API to download the full color list from the following endpoint:
// https://reqres.in/api/unknown

async function fetchColorsList() {

    // method A: using a fetch request (with methods to address promises, e.g. resolve or reject)
    // ---------------------------------------------------------------------------------------------
    
    /* 
    let allColors = null;
    let resp = null;

    await fetch('https://reqres.in/api/unknown')
    .then(response => response.json())
    .then(response => {                             // promise.resolve returned
            // console.log(response);               // log all the response's results
            resp = response;                        // log only the response's results with the name: data
    })
    .catch(error => console.error('Error:', error)); // catch a promise.reject
   */

    // method B: Using a fetch request (WITHOUT using promise-chaining returned from the api)
    // --------------------------------------------------------------------------------------

    // Using fetch, call for the 1st page of Data from the given url 
    
    let allColors = null;
    let resp = await ftnFetch();

    allColors = resp.data;
    let page = resp.page + 1;
    let totalPages = resp.total_pages;

    // Fetch the subsequent page(s) of Data (using a For Loop)
    for (let currentPage = page; currentPage <= totalPages; currentPage++) {
      const resp = await ftnFetch(currentPage);
      allColors = [...allColors, ...resp.data];   // allColors = allColors.concat(resp.data);
    }
    
    console.log(allColors);

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
    for (let index = 0; index < parsedColors.length; index++) {
      addItem(parsedColors[index]);
    }

}

document.addEventListener("DOMContentLoaded", () => {

  const key = window.localStorage.getItem("list-colors");

  if(!key){                                     // if localStorage has no key called list-colors
    fetchColorsList();                          // fetch the list remotely
    console.log("fetching from server");
  }else{                                        // else
    loadColorsFromStorage();                    // load the data from localStorage
    console.log("fetching from localStorage");
  }

  return;
})
