
// eventlistener once DOM loaded do function then fetch 
// nav component then convert to text,string then take 
// converted data and put in getelemntiD inner.HTML
// error handling in case of error display error message

document.addEventListener("DOMContentLoaded",()=>{
    fetch("/components/navbar.html")
    .then(response => response.text())
    .then(data =>{
        document.getElementById("navbar-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading the navbar:",error))
})