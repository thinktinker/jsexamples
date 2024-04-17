# Web Storage API 

## A. Tasks

Open the js folder and the index.html file and analyse their functionality of the code within. Then, write your code in index.js.

***Task 1:***
- Implement the function fetchColorsList() using the Fetch API to download the full colour list from the following endpoint: https://reqres.in/api/unknown

***Task 2:*** 
- Connect fetchColorsList() with the addItem() function so the colours list is filled and displayed in index.html.

***Task 3:*** 
- Modify the fetchColorsList() function so when the data is downloaded from the API, the colours list is stored using the local storage.

***Task 4:*** 
- Implement the loadColorsFromStorage() function so the colour values are loaded from the local storage.
- Open the developer tools and verify that the data is stored in the local storage.


## B. Challenge

If you have completed the above tasks, try the following extra tasks for a bonus challenge!

***Task 5:***
- Add a "clear" button that removes all the elements from the list.

***Task 6:*** 

- Add a "load" button that calls the fetchColorsList() function and loads the colours again. 

***Task 7:*** 

- Refactor your code, create a function ftnFetch() to call the fetch api:

```js 
    // re-write fetchColorsList() to call ftnFetch() 
    // ftnFetch return the fetched data to caller fetchColorsList()
    // 
    function ftnFetch(){
        // call fetch() api here 
        // return the JSON data
    }
```

