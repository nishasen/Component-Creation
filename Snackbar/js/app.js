const basic = document.querySelector("#basic-btn")
const archived = document.querySelector("#archived-btn")
const stacked = document.querySelector("#stacked-btn")

basic.addEventListener("click", () => {
    console.log("in basic")
    let x = document.getElementById("basic-snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", "appear"); }, 3000);
})

archived.addEventListener("click", () => {
    console.log("in archived")
    let x = document.getElementById("archived-snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", "appear"); }, 3000);
})

stacked.addEventListener("click", () => {
    console.log("in stacked")
    let x = document.getElementById("stacked-snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", "appear"); }, 3000);
})