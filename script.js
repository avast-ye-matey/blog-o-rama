/* let searchButton = document.getElementById("searchButton")
let searchBar = document.getElementById("searchBar")
 */
/* function displaySearchBar() {


} */

/* searchButton.addEventListener("click", function() {
    if (searchBar.style.display === "none") {
        searchBar.style.display = "block";
    } else {
        searchBar.style.display = "none";
    }
}) */

/* function addSearchBar() {
    let addSearchBar = document.getElementById("searchBar");
  if (addSearchBar.style.display === "none") {
    addSearchBar.style.display = "block";
  } else {
    addSearchBar.style.display = "none";
  }
} */

let addSearchBar = document.getElementById("searchBar");

document.getElementById("searchButton").addEventListener("click", function() {
    
    if (addSearchBar.style.display === "none") {
      addSearchBar.style.display = "flex";
    } else {
      addSearchBar.style.display = "none";
    }
});


function submitSearch() {
    
    console.log( document.getElementById("query").value );
    
}



/* var tag = document.createElement("p");
var text = document.createTextNode("Tutorix is the best e-learning platform");
tag.appendChild(text);
var element = document.getElementById("new");
element.appendChild(tag);



document.getElementById("test").addEventListener("click", function() {
    
    var tag = document.createElement("p");
    var text = document.createTextNode("Tutorix is the best e-learning platform");
    tag.appendChild(text);
    var element = document.getElementById("new");
    element.appendChild(tag);
    
});

function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

var fragment = create('<div>Hello!</div><p>...</p>');
// You can use native DOM methods to insert the fragment:
document.body.insertBefore(fragment, document.body.childNodes[0]); */


/* document.getElementById("test").addEventListener("click", function() {
    
    document.getElementById("appendHere").innerHTML += "<details><summary>Pics for Space   ||    Monday 3-31-2021</summary><hr class="summary-line"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p></details>"

}); */






    /* const para = document.createElement("p");
    const node = document.createTextNode("This is new.");
    para.appendChild(node);

    const element = document.getElementById("appendHere");
    element.insertBefore(para);
}); */



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





{/* <form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form> */}