/*  
*************************

Search Button Function:

Click search button to make search bar appear
and disapear.

*************************
*/


let addSearchBar = document.getElementById("searchBar");
let addSearchTransition = document.getElementById("test");

document.getElementById("searchButton").addEventListener("click", function() {   
    if (addSearchBar.style.display === "none") {
        addSearchBar.style.display = "flex";     
    } else {
      addSearchBar.style.display = "none";
    }    
});



/*  
*************************

Open Close Blog Posts:

Click each blog div element to change child span element
from invisable to flex

*************************
*/



document.querySelectorAll('.p-title-and-date-test').forEach(item => {
    item.addEventListener('click', function() {
        /* console.log(this.children[2]) */
        if (this.children[2].style.display === "none") {
            this.children[2].style.display = "flex";     
        } else {
            this.children[2].style.display = "none";
        }  
    })
});





/*  
*************************

Search Bar Value:

Collect and log search bar value
in console.

*************************
*/


function submitSearch() {    
    console.log( document.getElementById("query").value );    
};



/*  
*************************

Add Button Function:

Clicking add button makes html 
form appear and disapear.

Also styles the html form.

***currently only adds an html details
tag and styles the tag and child tags
like summary***

*************************
*/



document.getElementById("addButton").addEventListener("click", function() {
    let newDetail = document.createElement("details");    
    let newSummary = document.createElement("summary");
    newSummary.textContent = "hello";
    let newHr = document.createElement("hr");
    let newP = document.createElement("p");
    newP.textContent = "One Two Three Four";
    let newHrTop = document.createElement("hr");

    newDetail.innerHTML = document.getElementById("query").value;

    newHrTop.style.border = "1px";
    newHrTop.style.margin = "8px";
       
    
    newDetail.style.margin = "20px 40px";    
    newDetail.style.background = "#fee3f6";
    newDetail.style.padding = "20px";
    newDetail.style.borderRadius =  "10px";


    newHr.style.background = "linear-gradient(to right, red, yellow)";
    newHr.style.height = "5px";
    newHr.style.border = "none";
    
    /* btn.onclick = function () {
        alert("Button is clicked");
        }; */

    /* newHrTop.append(newHrTop); */

    document.body.appendChild(newHrTop);
    
    newDetail.append(newSummary, newHr, newP);


    let container = document.getElementById("appendHere");
    document.body.insertBefore( newDetail, container );
    /* container.appendChild(btn); */
    /* container.body.appendParent(btn); */
    /* btn.insertAdjacentHTML( 'afterend', '<hr id="appendHere">' ); */
});


