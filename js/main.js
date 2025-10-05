import {currentYear, h2Title} from './modules/dom.js'
import {fetchData} from './modules/api.js'
import { getData } from './script.js'

document.addEventListener('DOMContentLoaded', ()=>{
    // Script to update h2 Title with the current date
    h2Title()
    // Script to update the year at the footer dynamically
    currentYear()

    async function loadData() {
        const data = await fetchData("https://api.hgbrasil.com/finance?format=json-cors&key=5dabf770");
    
        if (data) {
            console.log("Data received:", data); // ✅ Works
            useData(data); // ✅ Call another function with data
        } else {
            console.error("No data received.");
        }
    }
    
    // Example function that uses data outside fetch
    function useData(data) {
        console.log("Using data:", data);
        // You can now manipulate or display the data here
    }
    
    // Call the function to fetch and use data
    loadData();
    getData()
})