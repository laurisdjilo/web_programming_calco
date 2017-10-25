/*la fonction recucepereValeur permet d'ajouter a l'ecran, la valeur du bouton surlequel l'utilisateur clique*/ 

initial=false;
function recupereValeur(valeur){
	if(initial==true){
		if(typeof(valeur)=="number"){
			effacer();
		}
		initial=false;
	}
	var valeurEcran=document.getElementById("editeur").value;
	document.getElementById("editeur").value=valeurEcran+valeur;
}



/* la fonction clear suivante permet d'effacer l'ecran*/
function effacer(){
	document.getElementById("editeur").value=" ";
}

/*la fonction egal suivante permet de calculer le resultat de l'expression affiché a l'ecran et d'ensuite l'afficher sur  l'acran*/
function egal(){
	initial=true;
	var expression=document.getElementById("editeur").value;
	try{
		var resultatFinal= eval(expression);
	}
	catch(err){
		resultatFinal="Error";
	}
	resultatFinal=resultatFinal+"";
	if(resultatFinal.length>=11){
		document.getElementById("editeur").value=resultatFinal.substring(0,11)+"...";
	}else{
		document.getElementById("editeur").value= resultatFinal;
	}
}