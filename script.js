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
  console.log(`Clic numéro ${i}`);
});

// Fonctionnalité 2 :

document.getElementById("navbarHeader").addEventListener("click",function(){
  document.getElementById("navbarHeader").classList.toggle('collapse');
});



// Fonctionnalité 3 :


// Fonctionnalité 4 :


// Fonctionnalité 5 :