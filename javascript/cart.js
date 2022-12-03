function popUp() { //function for the cart pop up menu
    var pop = document.getElementById("popUpWindow");
    var popButton = document.getElementById("cart");
    pop.classList.toggle("show");
    document.getElementById("popUpWindow").style.visibility = "visible";
    // popButton.addEventListener("click", addOverlay);
    // overlay.classList.toggle("showOverlay");
    
}

function addOverlay() {

    if(document.getElementById("overlay").style.display == "block"){
        document.getElementById("overlay").style.display = "none";
    }
    else{
        document.getElementById("overlay").style.display = "block";
    }
    document.getElementById("overlay").addEventListener("click", function() {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("popUpWindow").style.visibility = "hidden";
    });


}

var cartCount = 0; //number of items in current cart
var total = 0; //used later for totaling the all cart items' prices

function addItem() { //logic for adding items to cart
    cartCount++;
    document.getElementById("cart").innerHTML = "CART " + "(" + cartCount + ")";

    document.getElementById("table-header").insertAdjacentHTML( //inserts the data from the product cards into the cart menu
                "afterend",
                "<tr><td>"+document.activeElement.previousElementSibling.innerText+"</td><td>"+document.activeElement.nextElementSibling.innerText+"</td></tr>"
            );

            var curPrice = document.activeElement.previousElementSibling.innerText.replaceAll("$", "");
            var curPriceFin = curPrice.replaceAll(",", "");
            var curPriceInt = parseInt(curPriceFin);
            total += curPriceInt; //adding the prices to total from HTML inner text from product cards

            if(document.getElementById("totalNum") == null){ //this if-else block used to ensure only 1 price shows for the total
                document.getElementById("totals").insertAdjacentHTML(
                    "beforeend",
                     '<span id = "totalNum">'+ total +"</span>$");
            }
            else {
                document.getElementById("totalNum").remove();
                document.getElementById("totals").insertAdjacentHTML(
                    "beforeend",
                     '<span id = "totalNum">'+ total +"</span>");
            }
           
}