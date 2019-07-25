function deseleziona_pedina(x){
	if(x.className == "pedina_chiara"||x.className=="dama_chiara"){
		x.style.backgroundColor = "white";
	}
	
	if(x.className == "pedina_scura"||x.className=="dama_scura"){
		x.style.backgroundColor = "#343d46";
	}
	
	x.setAttribute("onclick", "seleziona_pedina(this)");
	
	for(var i=1; i<=64; i++){
		var casella = document.getElementById("casella"+(i));
		casella.setAttribute("onclick", "null");
	}
}
	
function seleziona_pedina(x){ 
	x.style.backgroundColor = "yellow";
	for(var i=1; i<=64; i++){
		if(i==x.id){
			x.setAttribute("onclick", "deseleziona_pedina(this)");
		}
		else{
			var pedinanonsel = document.getElementById(i);
			if(pedinanonsel.className == x.className||pedinanonsel.className=="dama_chiara" && x.className == "pedina_chiara"||pedinanonsel.className=="dama_scura" && x.className == "pedina_scura"||pedinanonsel.className=="pedina_chiara" && x.className == "dama_chiara"||pedinanonsel.className=="pedina_scura" && x.className == "dama_scura"){
				deseleziona_pedina(pedinanonsel);
			}
		}
	}
	
	var pedina = document.getElementById(x.id);
	controllo_mosse_spostamento(pedina);
	controllo_mosse_mangia(pedina);
}
		
function seleziona_pedina2(x){ 
	x.style.backgroundColor = "yellow";
	for(var i=1; i<=64; i++){
		if(i==x.id){
			x.setAttribute("onclick", "null");
			x.setAttribute("onmouseenter", "visualizza_mosse_mangia(this)");
			x.setAttribute("onmouseleave", "nascondi_mosse(this)");
		}
		else{
			var pedinanonsel= document.getElementById(i);
			pedinanonsel.setAttribute("onclick", "null");
			pedinanonsel.setAttribute("onmouseenter", "null");
			pedinanonsel.setAttribute("onmouseleave", "null");
		}
	}
	
	var pedina = document.getElementById(x.id);
	controllo_mosse_mangia(pedina);
}		
