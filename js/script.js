
// eventlistener once DOM loaded do function then fetch 
// nav component then convert to text,string then take 
// converted data and put in getelemntiD inner.HTML
// error handling in case of error display error message

document.addEventListener("DOMContentLoaded",()=>{
   // let depth = window.location.pathname.split("/").length - 2; // figuring out the level depth of file 
   // let prefix = depth > 0 ? "../".repeat(depth) : ""; //  repeats the amount of ../ by the calculated string length above
   // fetch" prefix + ("path")"
    fetch("components/navbar.html")
    .then(response => response.text())
    .then(data =>{
        document.getElementById("navbar-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading the navbar:",error))

    //load footer

    fetch("components/footer.html")

    .then(response=> response.text())
    .then(data=>{
        document.getElementById("footer").innerHTML=data;
    })
    .catch(error=> console.error("Error loading the navbar:",error))
})



// prevents refreshing page / sending it to a backendserver default behaviour
// document.getElementById("myform").addEventListener("submit",(event)=>{
//     event.preventDefault();
// })