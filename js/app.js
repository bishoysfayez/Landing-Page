/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/




// Selectors of sections by id
let links_node = [];
let sections_node = document.querySelectorAll('section');
let sections_count = sections_node.length;
// selector for nav bar
navbar_ul = document.getElementById('navbar__list');
let navbar = document.querySelector('.navbar__menu');
const main_page = document.querySelector('main');

// navbar.appendChild(btn_addSection);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


// Function to set scroll when link clicked
function scrollWhenClick(links_node, sections_node){
	for (let i = 0; i < sections_count; i++){
		links_node[i].addEventListener('click', function(){
			sections_node[i].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
			links_node[i].classList.add('active__link');
			for (let j = 0; j < sections_count; j++){
				if(j!=i){
					links_node[j].classList.remove('active__link');
					sections_node[j].classList.remove('your-active-class');

				}
			}

		})
	}
}


// function to bild nav
function buildNav(sections_node, navbar_ul){
	sections_node.forEach(sec => {
	// create new li element
	let new_li = document.createElement('li');
	// get id of the current section
	let sectionId = sec.getAttribute("id");
	// modify the inner HTML of the new Li element
	new_li.innerText = sectionId;
	new_li.setAttribute('name', sectionId);
	
	// add the li element to the navbar
	// add class of menu link to the new div
	new_li.classList.add("menu__link");
	navbar_ul.appendChild(new_li);
})
}




// function to check if section is viewport
  



// function to set section into active when clicked in section
function setSectionActive(link, section, isViewed){
	section.classList.add('your-active-class');
	link.classList.add('active__link');
	// for (let j = 0; j < sections_count; j++){
	// 	if(j!=i){
	// 		link.classList.remove('active__link');
	// 		section.classList.remove('your-active-class');
	// 	}
	}





/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

buildNav(sections_node, navbar_ul);

// Add class 'active' to section when near top of viewport
	


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 





// Scroll to section on link click
links_node = document.querySelectorAll('li');
scrollWhenClick(links_node, sections_node);


//Set sections as active
for (let i = 0; i < sections_count; i++){
		if(sections_node[i].getBoundingClientRect().top >= 0 && sections_node[i].getBoundingClientRect().bottom >= window.innerHeight){
			links_node[i].classList.add('active__link');
			sections_node[i].classList.add('your-active-class');
			for (let j = 0; j < sections_count; j++){
				if(j!=i){
					links_node[j].classList.remove('active__link');
					sections_node[j].classList.remove('your-active-class');

				}
			}
		}
	}


// add new section
btn_addSection = document.createElement('button');
btn_addSection.textContent = 'New Section';
document.querySelector('.for_button').appendChild(btn_addSection);
btn_addSection.addEventListener('click',function (){
	
	let new_random_section = sections_node[sections_node.length-1]
	let cln = new_random_section.cloneNode(true);
	
	main_page.appendChild(cln);
	
	let new_section_to_add = sections_node[sections_node.length - 1];

	sections_node = document.querySelectorAll('section');
    sections_count = sections_node.length;
  	new_section_to_add.setAttribute("id",sections_node.length)
	let sectionId = sections_node.length;


    
	let new_li = document.createElement('li');
	let newSecTitle = document.querySelectorAll('h2');
	// get id of theTitle current section
	
	// modify the inner HTML of the new Li element
	
	new_li.innerText = 'section'+ sectionId;
	new_li.setAttribute('name', sectionId);
    newSecTitle[newSecTitle.length - 1].textContent = 'section '+ sectionId;
	// update the List of nav bar
	

	// add the li element to the navbar
	// add class of menu link to the new div
	new_li.classList.add("menu__link");
	navbar_ul.appendChild(new_li);


	// update navbar 
navbar_ul = document.getElementById('navbar__list');
links_node = document.querySelectorAll('li');
scrollWhenClick(links_node, sections_node)






});

	
// hide the nav bar when scrolling

window.addEventListener('scroll', function(){
	navbar.style.display ='none';
})
	
// show again after stop scrolling  

 let isScrolling;
 window.addEventListener('scroll', function () {

	// Clear our timeout throughout the scroll
	window.clearTimeout(isScrolling);

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

		// Run the callback
		navbar.style.display ='block';
	}, 66);

}, false);