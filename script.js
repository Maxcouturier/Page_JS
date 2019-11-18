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

let navbar = document.getElementsByClassName("navbar-toggler")[0];
navbar.addEventListener('click', function(){
navbar.classList.toggle("collapse");
});
console.log(navbar.className)

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