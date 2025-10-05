// Script to update h2 Title with the current date
const h2Title = ()=>{
    const today = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-GB').format(today);
    return document.querySelector('.currency-list h2').innerHTML += formattedDate
}

// Script to update the year at the footer dynamically
const currentYear = ()=>{
   return document.getElementById("current-year").textContent = new Date().getFullYear();
}

export {currentYear, h2Title}