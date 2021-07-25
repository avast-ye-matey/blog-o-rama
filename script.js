/*  
*************************

Search Button Function:

Click search button to make 
search bar appear and disapear.

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

Click each blog div element to 
change child span element from invisable to flex

*************************
*/



document.querySelectorAll('.p-title-and-date-test').forEach(item => {
    item.addEventListener('click', function() {
        
        if (this.children[2].style.display === "none") {
            this.children[2].style.display = "flex";     
        } else {
            this.children[2].style.display = "none";
        }  
    })
}); 
 

function yallLostYourMind() {

    document.querySelectorAll('.p-title-and-date-test').forEach(item => {
        item.addEventListener('click', function() {
            
            if (this.children[2].style.display === "none") {
                this.children[2].style.display = "flex";     
            } else {
                this.children[2].style.display = "none";
            }  
        })
    }); 
     
}




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

Clicking add button makes HTML 
form appear and disapear.

Also styles the HTML form.

*************************
*/



let addFormClassDiv = document.getElementById("addFormClassDiv")
document.getElementById("addButton").addEventListener("click", function() {
    
    if (addFormClassDiv.style.display === "none") {
        addFormClassDiv.style.display = "flex";     
    } else {
        addFormClassDiv.style.display = "none";
    }    
});


/*  
*************************

Add Post Button Function:

Clicking Add Post button takes value from
TITLE and TEXTAREA and creates a new DIV
element in MAIN to show new post in HTML

*************************
*/




let mainElement = document.querySelector("main");
let findTitleOg = document.getElementById("title").value;
let findTextAreaOg = document.getElementById("story").value;

console.log( document.getElementById("title").value );
console.log( document.getElementById("story").value );


document.getElementById("addFormButton").addEventListener("click", function() {       
    let cloneThisElement= document.getElementById('post-title-and-date');    
    let clonedElement = cloneThisElement.cloneNode(true);

    console.log(clonedElement);   

    console.log( document.getElementById("title").value );  
    console.log( document.getElementById("story").value );

    let findTitle = document.getElementById("title").value;
    let findTextArea = document.getElementById("story").value;    


    let h1NewInput1 = clonedElement.childNodes[1];
    let h1NewInput2 = h1NewInput1.childNodes[1];
    console.log( h1NewInput1 );
    console.log( h1NewInput2 );
    h1NewInput2.innerHTML = findTitle;
    console.log (h1NewInput2);


    let pNewInput = h1NewInput1.childNodes[5];
    let pNewInput2 = pNewInput.childNodes[3];
    let pNewInput3 = pNewInput2.childNodes[1]; 
    pNewInput3.innerHTML = findTextArea;

    
    console.log( h1NewInput1.childNodes[3]); //dates

    h1NewInput1.setAttribute( "onclick" , "yallLostYourMind()" );       
        
    mainElement.append(clonedElement);
    addFormClassDiv.style.display = "none";
   
});




