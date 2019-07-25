var numturno = 0;

function gestione_turni(){
	numturno++;
	var cvtm = controllo_vittoria_tutte_mangiate();
	if(cvtm == false){
		var cvtb = controllo_vittoria_tutte_bloccate();
	}
	if(numturno%2==1){ //muovono i bianchi
		//changeNavbarStyle("white");
		for(var i=1; i<=64; i++){
			var pedina = document.getElementById(i);
			if(pedina.className == "pedina_scura" || pedina.className == "dama_scura"){
				disabilita(pedina);
			}
					
			if(pedina.className == "pedina_chiara" || pedina.className == "dama_chiara"){
				abilita(pedina);
			}
		}
	}
			
	if(numturno%2==0){//muovono i neri 
		//changeNavbarStyle("black");
		for(var i=1; i<=64; i++){
			var pedina = document.getElementById(i);
			if(pedina.className == "pedina_chiara"|| pedina.className == "dama_chiara"){
				disabilita(pedina);
			}
					
			if(pedina.className == "pedina_scura"|| pedina.className == "dama_scura"){
				abilita(pedina);
			}
		}
	}		
}

function disabilita(pedina){
	pedina.setAttribute("onclick", "null");
	pedina.setAttribute("onmouseenter", "null");
	pedina.setAttribute("onmouseleave", "null");
}

function abilita(pedina){
	pedina.setAttribute("onmouseenter", "visualizza_mosse_sposta(this)");
	pedina.setAttribute("onmouseleave", "nascondi_mosse(this)");
	pedina.setAttribute("onclick", "seleziona_pedina(this)");
}
