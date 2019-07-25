var pedine_chiare = 12;
var pedine_scure = 12;
var win;

function ajaxGestore(str){
	var xmlHttp;
	try{ 
		xmlHttp = new XMLHttpRequest();
	}
	catch(e){
		try{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch(e){
			try{
				xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(e){
				window.alert("il tuo browser non supporta AJAX!");
				return false;
			}
		}
	}

	xmlHttp.open("GET", "vittoria.php?q="+str, true);
	xmlHttp.onreadystatechange = function(){
			if(xmlHttp.readyState == 4 && this.status == 200){
				var data = JSON.parse(xmlHttp.responseText);
				//alert(xmlHttp.responseText);
				classifica(data);	
			}
	}
	xmlHttp.send();
}

function pulisciPagina(elem){
	while(elem.hasChildNodes())
		elem.removeChild(elem.firstChild);
}
	

function classifica(elem){
	document.getElementById("bodyRoom").style.backgroundImage = "none";
	var bodyRoom = document.getElementById("bodyRoom");
	
	pulisciPagina(bodyRoom);
	
	var vittoria = document.createElement("div");
	vittoria.id = "vittoria";
	bodyRoom.appendChild(vittoria);
	
	var vincitore = document.createElement("p");
	vincitore.id = "vincitore";
	vittoria.appendChild(vincitore);
	var testo;
	
	testo = document.createTextNode("Vittoria di " + elem[elem.length-1].winner);
	vincitore.appendChild(testo);
	
	var table=document.createElement("table");
	table.id = "classifica";
	var riga = document.createElement("tr");
	riga.id="titleClassifica";
	var colonna = document.createElement("td");
	testo = document.createTextNode("Nickname");
	colonna.appendChild(testo);
	riga.appendChild(colonna);
	colonna = document.createElement("td");
	testo = document.createTextNode("Vittorie");
	colonna.appendChild(testo);
	riga.appendChild(colonna);
	
	table.appendChild(riga);
	for (var i=0; i<(elem.length-1); i++) {
		var riga=document.createElement("tr");

		riga.setAttribute("class","righeUtenti");
		var casella = document.createElement("td");
		var testo = document.createTextNode(elem[i].nickname);
		casella.appendChild(testo);
		riga.appendChild(casella);

		var casella = document.createElement("td");
		testo = document.createTextNode(elem[i].vinte);
		casella.appendChild(testo);
		riga.appendChild(casella);

		table.appendChild(riga);
	}
	bodyRoom.appendChild(table);
	
	var pannello = document.createElement("div");
	pannello.id = "pannello";
	bodyRoom.appendChild(pannello);
	
	var rigioca = document.createElement("a");
	rigioca.setAttribute("href", "../php/room.php");
	var testo = document.createTextNode("RIGIOCA");
	rigioca.appendChild(testo);

	var logout = document.createElement("a");
	logout.setAttribute("href", "../php/logout.php");
	testo = document.createTextNode("LOGOUT");
	logout.appendChild(testo);
	
	pannello.appendChild(rigioca);
	pannello.appendChild(logout);
	
}
	
function vittoria_per_abbandono(){
	if(numturno%2==1){
		win = "neri";
		ajaxGestore(win);
		return;
	}
	
	if(numturno%2==0){
		win = "bianchi";
		ajaxGestore(win);
		return;
	}
}
	
function controllo_vittoria_tutte_mangiate(){
	if(pedine_chiare == 0){
		win = "neri";
		ajaxGestore(win);
		return true;
	}
			
	if(pedine_scure == 0){
		win = "bianchi";
		ajaxGestore(win);
		return true;
	}
	return false;
}


function controllo_vittoria_tutte_bloccate(){
	if(numturno%2==1){ //muovono i bianchi
		var continua_partita = false;
		for(var i=1; i<=64 ; i++){
			var pedina = document.getElementById(i);

			if(pedina.className == "pedina_chiara"||pedina.className == "dama_chiara"){
				if(controllo_mosse_spostamento(pedina) || controllo_mosse_mangia(pedina)){
					continua_partita = true;
					break;
				}
			}
		}
		
		if(continua_partita != true){
			win = "neri";
			ajaxGestore(win);
			return;
		}
	}
			
	if(numturno%2==0){ //muovono i neri
		var continua_partita = false;
		for(var i=1; i<=64 ; i++){
			var pedina = document.getElementById(i);

			if(pedina.className == "pedina_scura"||pedina.className == "dama_scura"){
				if(controllo_mosse_spostamento(pedina) || controllo_mosse_mangia(pedina)){
					continua_partita = true;
					break;
				}
			}
		}
		
		if(continua_partita != true){
			win = "bianchi";
			ajaxGestore(win);
			return;
		}
	}
}
