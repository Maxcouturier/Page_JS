// Fonctionnalité 1 :

var footer = document.getElementsByTagName("footer");
footer[0].addEventListener('click', function(){
  console.log("clique");
});

// Fonctionnalité 1-bis :

var footer = document.getElementsByTagName("footer");
let i=0 ;
footer[0].addEventListener('click', function(){
  i++;
  console.log("Clic numéro " + i);
});

// Fonctionnalité 2 :

let hamburger = document.getElementsByClassName("navbar-toggler")[0];
let navbarHeader = document.getElementById("navbarHeader");

hamburger.addEventListener("click", function(){
    navbarHeader.classList.toggle("collapse");
});

// Fonctionnalité 3 :

let firstCard = document.getElementsByClassName("card mb-4 box-shadow")[0];
var editButton = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0];
editButton.addEventListener('click', function(){
firstCard.style.color = 'red';
});


// Fonctionnalité 4 :

let editButton2 = document.getElementsByClassName("btn-outline-secondary")[1];
let secondCard = document.getElementsByClassName("card-text")[1];
editButton2.addEventListener('click', function(){
if (secondCard.style.color === 'green') { 
  secondCard.style.color = '' ; 
} else {
  secondCard.style.color = 'green';
}
});


// Fonctionnalité 5 :

let navbar = document.getElementsByClassName("navbar")[0];
let bootstrap = document.getElementsByTagName('link')[0];

console.log(bootstrap);

	navbar.addEventListener("dblclick", destroyCDN);

	function destroyCDN() {
		if  (bootstrap.rel == "stylesheet") { 
			bootstrap.rel = "styleDisabled";
		} else {
			bootstrap.rel = "stylesheet";
		}
		};

// Fonctionnalité 6 :

let viewLength = document.getElementsByClassName("btn-success").length

for (let i = 0; i < viewLength; i++) {

	let btnView = document.getElementsByClassName("btn-success");

	btnView[i].addEventListener("mouseover", Fonction1);

	function Fonction1() {
		document.getElementsByClassName("card-text")[i].classList.toggle("d-none"); //d-none on enleve le texte
		document.getElementsByClassName("card-img-top")[i].style.width = '80%';
	};
};


// Fonctionnalité 7 :