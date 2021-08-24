function abilita_spostamento(casella, x){
	if(casella.firstChild.className == "pedina_nascosta" && casella.className != "casella_chiara"){
			casella.setAttribute("onclick", "sposta_pedina(this,"+x.id+")");
			return casella;
	}
	return null;
}


function controllo_mosse_spostamento(x){
	var check1;
	var check2;
	var check3;
	var check4;

	//sposta pedina o dama	
	if(x.className == "pedina_chiara"||x.className == "pedina_scura"){
		if(x.className == "pedina_chiara"){
			var caselladx = document.getElementById("casella"+(((x.id)-8)+1)); 
			var casellasx = document.getElementById("casella"+(((x.id)-8)-1));
		}
		else{
			var caselladx = document.getElementById("casella"+(((x.id)*1+8)+1)); 
			var casellasx = document.getElementById("casella"+(((x.id)*1+8)-1));
		}
		
		check1 = abilita_spostamento(caselladx, x);
		check2 = abilita_spostamento(casellasx, x);

		var caselle = {
		    one: check1,
		    two: check2,
		    check: check1 == null && check2 == null? false : true
		};
		
		return(caselle);
	}
	
	if(x.className == "dama_chiara"||x.className == "dama_scura"){
		var caselladxs = document.getElementById("casella"+(((x.id)-8)+1)); 
		var casellasxs = document.getElementById("casella"+(((x.id)-8)-1));
		var caselladxi = document.getElementById("casella"+(((x.id)*1+8)+1)); 
		var casellasxi = document.getElementById("casella"+(((x.id)*1+8)-1));
		if(x.id>8){
			check1 = abilita_spostamento(caselladxs, x);
			check2 = abilita_spostamento(casellasxs, x);
		}
		if(x.id<57){
			check3 = abilita_spostamento(caselladxi, x);
			check4 = abilita_spostamento(casellasxi, x);
		}

        caselle = {
            one: check1,
            two: check2,
            three: check3,
            four: check4,
            check: check1 == null && check2 == null && check3 == null && check4 == null? false : true
        };

		return(caselle);
	}
}

function sposta_pedina(casellasel, y){
	var pedinasel = document.getElementById(y);
	
	casellasel.firstChild.className = pedinasel.className;
	
	if(pedinasel.className == "pedina_chiara"){
		if(casellasel.firstChild.id <= 8)
			casellasel.firstChild.className ="dama_chiara";
	}
		
	if(pedinasel.className == "pedina_scura"){
		if(casellasel.firstChild.id >= 58)
			casellasel.firstChild.className ="dama_scura";
	}	
	
	pedinasel.className="pedina_nascosta";
	
	for(var i=1; i<=64; i++){
		var pedina = document.getElementById(i);
		deseleziona_pedina(pedina);
	}
	
	gestione_turni();
}
