### Final Project for CodeLou Front End Web Development May-July 2021

# ABOUT

This site is built as a blog for myself. The site displays the logo/title, social media icons, the blog posts, then a search and add button on the bottom of the screen (which
is fixed to the bottom of the screen at all times). 

The social media icons are currently linked to the website that correlates to the icon. Since this is currently public site, I dont have them linked to my personal sites. 
(Also I wasn't going to add a logo/title or social media icons but it was a comment by a mentor to add a logo/title then some descriptions about the site so I can manipulate it via media queries because I was having trouble with finding a solid 2nd media query)

The blog posts are hidden in mobile and tablet view. You have to click on each blog headline to make the post appear/drop-down. 

The search button creates a search bar above the search/add buttons. Currently it doesnt search the page but if you click the search bar it changes the background color for the text input. Clicking the search button again makes the bar disappear. 

Next to that is the add button. Once clicked it displays a form for adding a new blog post. You can type a title and blog post. 
(Currently there isnt a spot for adding a date because I was going to have it automatically add the date. I will add to a later build but I wanted to make sure my full project was complete on time) 
On the bottom of the form is an add post button. Click on it and the form disappears and a new post is created with the title and post the user filled in on the form. 

Built for mobile first. Everything is stacked (except icons but those are small enough to be horizontal) to create a better layout on a small screen
but also to add focus on each blog post. The posts are also "closed" only showing title and date until the "button" is clicked and reveals the actual post. 

!!!<br>
As of now, after you add a new form to the page you have to click the post title twice to get the post to appear. The other posts still only need one click. So if new post doesn't open right away just click it again.<br>
!!!



# PROJECT REQUIREMENTS

* You must include a minimum of 2 media queries that create a better layout/user experience. (They must make some visible change to your site’s layout, such as re-aligning/moving content areas, changing your menu, changing the location of content areas and images, hiding/showing elements, etc.)
  * **1st media query is at 768px**. Adjust logo/title and social media icons to the left side of the screen. This focuses on a change in tablets.
  * **2nd media query is at 1080px**. I wanted it bigger than an iPad Pro screen but small enough to show on a 13inch Laptop screen. This media query
changes the Blog Posts from vertical and closed to horizontal and opened. Its a better layout for computer and adds easy scrolling.

* Project is uploaded to your GitHub repository and shows at minimum 5 separate commits
  * **As of 7/25/2021 there are at least 15 commits (not including this readme update) and if you're reading this either it's on github or taken from github.**

* Project includes a README file that explains the following:<br> 
  **(If you're reading this, you're reading the README file 😊)**<br>
  * ✔ A one paragraph or longer description of what your project is
  * ✔ Which 3+ features you have included from the below lists to meet the requirements
  * ✔ If needed, any special instructions required for the reviewer to run your project
  * ✔ The readme should be called readme.md or readme.txt and located in the top level of your project folder so that GitHub automatically displays it when viewing your project        on GitHub

* Choose at least 1 item on the CSS Features List below and implement it in your project:
  * CSS Features List
    * A navigation menu that expands and collapses properly at desktop and mobile sizes, such as by switching between vertical and horizontal styles, or is opened and closed by       clicking the “hamburger” icon<br>
    **My nav menu is social media icons and they switch between vertical and horizontal as the screen widens.**
    
    
* Choose at least 1 item off the list of JavaScript Features List below and implement it in your project:
  * JavaScript Features List
    * Create a form (such as a ‘Contact Us’ form), validate at least one field (ex: email is in the correct format) and then use that information on your page somehow. For example, display it back to the user on button click, or change a setting on the page based on a section. Having a form that does nothing on clicking Submit or that just refreshes the page is not enough - you must capture the value(s) of the form and use it somehow.<br>
    **After clicking the add button a form is created. The form has two values that are title and blog text. Once you click add blog post button on bottom of form the values are used to populate the title and blog post section of a new blog post. That new post is added to the HTML live.**
  

* Choose at least 1 additional item from any of the lists below and implement it in your project:
  * CSS Features List
    * Create your own original CSS animation. For example, create a loading spinner or menu animation. Note: CSS Animations are not included in the assigned Treehouse track, you will have to research this on your own<br>
    **The search bar appearing on the screen is an animation. It's quick but starts with just the icon then expands across the screen. Also when you hover over the search icon, the icon spins.**
    
    
* We recommend you pick a 4th item (or more!) to add, just in case something goes wrong with one of your other items - 3 is only the minimum requirement:
  * CSS Features List
    * Use Flexbox or CSS Grid to organize content areas based on mobile or desktop views. Simply applying a basic flex property so that text wraps as you change screen sizes does not count. You must actually rearrange content or perform some more advanced feature. For example, swapping from a single column layout to a two-column layout on desktop.<br>
    **The logo/title and social media icons are in flexbox and so are the blog posts. At certain breakpoints the layout changes from rox to column.**
    
  * JavaScript Features List
    * Create at least 3 variables (var, const, or let), set their values in JavaScript, and display the values somewhere on your page<br>
    **When creating a new blog post I use various variables to show title, blog posts, and style of blog posts.**
