function abilita_mangiata_pedina_bianca(casella, x, altracasella){
	if(altracasella.firstChild.className != "pedina_nascosta" && altracasella.firstChild.className!=x.className && altracasella.firstChild.className != "dama_chiara" && altracasella.firstChild.className != "dama_scura"){
		if(x.id >16){ 
			if(casella.firstChild.className == "pedina_nascosta" && casella.className != "casella_chiara"){
				casella.setAttribute("onclick", "mangia_pedina(this, "+x.id+", "+altracasella.firstChild.id+")");
				return casella;
			}
		}
	}
	return null;
}

function abilita_mangiata_pedina_nera(casella, x, altracasella){
	if(altracasella.firstChild.className != "pedina_nascosta" && altracasella.firstChild.className!=x.className && altracasella.firstChild.className != "dama_chiara" && altracasella.firstChild.className != "dama_scura"){
		if(x.id <49){ 
			if(casella.firstChild.className == "pedina_nascosta" && casella.className != "casella_chiara"){
				casella.setAttribute("onclick", "mangia_pedina(this, "+x.id+", "+altracasella.firstChild.id+")");
				return casella;
			}
		}
	}
	return null;
}

function abilita_mangiata_dama_chiara_sup(casella, x, altracasella){
	if(x.id>8){
		if(altracasella.firstChild.className != "pedina_nascosta" && altracasella.firstChild.className!=x.className && altracasella.firstChild.className != "pedina_chiara"){
			if(x.id>16){
				if(casella.firstChild.className == "pedina_nascosta" && casella.className != "casella_chiara"){
					casella.setAttribute("onclick", "mangia_pedina(this, "+x.id+", "+altracasella.firstChild.id+")");
					return casella;
				}
			}
		}
	}
	return null;
}

function abilita_mangiata_dama_chiara_inf(casella, x, altracasella){
	if(x.id<57){
		if(altracasella.firstChild.className != "pedina_nascosta" && altracasella.firstChild.className!=x.className && altracasella.firstChild.className != "pedina_chiara"){
			if(x.id<49){
				if(casella.firstChild.className == "pedina_nascosta" && casella.className != "casella_chiara"){
					casella.setAttribute("onclick", "mangia_pedina(this, "+x.id+", "+altracasella.firstChild.id+")");
					return casella;
				}
			}
		}
	}
	return null;
}

function abilita_mangiata_dama_scura_sup(casella, x, altracasella){
	if(x.id>8){
		if(altracasella.firstChild.className != "pedina_nascosta" && altracasella.firstChild.className!=x.className && altracasella.firstChild.className != "pedina_scura"){
			if(x.id>16){
				if(casella.firstChild.className == "pedina_nascosta" && casella.className != "casella_chiara"){
					casella.setAttribute("onclick", "mangia_pedina(this, "+x.id+", "+altracasella.firstChild.id+")");
					return casella;
				}
			}
		}
	}
	return null;
}

function abilita_mangiata_dama_scura_inf(casella, x, altracasella){
	if(x.id<57){
		if(altracasella.firstChild.className != "pedina_nascosta" && altracasella.firstChild.className!=x.className && altracasella.firstChild.className != "pedina_scura"){
			if(x.id<49){
				if(casella.firstChild.className == "pedina_nascosta" && casella.className != "casella_chiara"){
					casella.setAttribute("onclick", "mangia_pedina(this, "+x.id+", "+altracasella.firstChild.id+")");
					return casella;
				}
			}
		}
	}
	return null;
}

function controllo_mosse_mangia(x){
	if(x.className == "pedina_chiara"){
		var caselladx = document.getElementById("casella"+(((x.id)-8)+1)); 
		var casellasx = document.getElementById("casella"+(((x.id)-8)-1));
	}
	
	if(x.className == "pedina_scura"){
		var caselladx = document.getElementById("casella"+(((x.id)*1+8)+1)); 
		var casellasx = document.getElementById("casella"+(((x.id)*1+8)-1));
	}
	
	var caselladxs = document.getElementById("casella"+(((x.id)-8)+1)); 
	var casellasxs = document.getElementById("casella"+(((x.id)-8)-1));
	var caselladxi = document.getElementById("casella"+(((x.id)*1+8)+1)); 
	var casellasxi = document.getElementById("casella"+(((x.id)*1+8)-1));
	
	if(x.className == "pedina_chiara"){
		var check1=false;
		var check2=false;
		
		//mangia pedina a dx 
		var casellamangdx = document.getElementById("casella"+(((x.id)-16)+2));
		check1 = abilita_mangiata_pedina_bianca(casellamangdx, x, caselladx);
		
		//mangia pedina a sx
		var casellamangsx = document.getElementById("casella"+(((x.id)-16)-2));
		check2 = abilita_mangiata_pedina_bianca(casellamangsx, x, casellasx);

        var caselle = {
            one: check1,
            one_move: caselladx,
            two: check2,
            two_move: casellasx,
            check: check1 == null && check2 == null? false : true
        };

		return(caselle);
	}

	if(x.className == "pedina_scura"){
		var check1=false;
		var check2=false;
		
		//mangia pedina a dx
		var casellamangdx = document.getElementById("casella"+(((x.id)*1+16)+2));
		check1 = abilita_mangiata_pedina_nera(casellamangdx, x, caselladx);
		
		//mangia pedina a sx
		var casellamangsx = document.getElementById("casella"+(((x.id)*1+16)-2));
		check2 = abilita_mangiata_pedina_nera(casellamangsx, x, casellasx);

        caselle = {
            one: check1,
            one_move: caselladx,
            two: check2,
            two_move: casellasx,
            check: check1 == null && check2 == null ? false : true
        };

		return(caselle);
	}
	
	if(x.className == "dama_chiara"){
		var check1=false;
		var check2=false;
		var check3=false;
		var check4=false;
		//mangia pedina a dxs
		var casellamangdxs = document.getElementById("casella"+(((x.id)-16)+2));
		check1 = abilita_mangiata_dama_chiara_sup(casellamangdxs, x, caselladxs);
		
		//mangia pedina a sxs
		var casellamangsxs = document.getElementById("casella"+(((x.id)-16)-2));
		check2 = abilita_mangiata_dama_chiara_sup(casellamangsxs, x, casellasxs);
		
		//mangia pedina a dxi
		var casellamangdxi = document.getElementById("casella"+(((x.id)*1+16)+2));
		check3 = abilita_mangiata_dama_chiara_inf(casellamangdxi, x, caselladxi);

		
		//mangia pedina a sxi
		var casellamangsxi = document.getElementById("casella"+(((x.id)*1+16)-2));
		check4 = abilita_mangiata_dama_chiara_inf(casellamangsxi, x, casellasxi);

        caselle = {
            one: check1,
            one_move: caselladxs,
            two: check2,
            two_move: casellasxs,
            three: check3,
            three_move: caselladxi,
            four: check4,
            four_move: casellasxi,
            check: check1 == null && check2 == null && check3 == null && check4 == null? false : true
        };
					
		return(caselle);
	}
	
	if(x.className == "dama_scura"){
		var check1=false;
		var check2=false;
		var check3=false;
		var check4=false;
		
		//mangia pedina a dxs
		var casellamangdxs = document.getElementById("casella"+(((x.id)-16)+2));
		check1 = abilita_mangiata_dama_scura_sup(casellamangdxs, x, caselladxs);
		
		//mangia pedina a sxs
		var casellamangsxs = document.getElementById("casella"+(((x.id)-16)-2));
		check2 = abilita_mangiata_dama_scura_sup(casellamangsxs, x, casellasxs);
		
		//mangia pedina a dxi
		var casellamangdxi = document.getElementById("casella"+(((x.id)*1+16)+2));
		check3 = abilita_mangiata_dama_scura_inf(casellamangdxi, x, caselladxi);

		//mangia pedina a sxi
		var casellamangsxi = document.getElementById("casella"+(((x.id)*1+16)-2));
		check4 = abilita_mangiata_dama_scura_inf(casellamangsxi, x, casellasxi);

        caselle = {
            one: check1,
            one_move: caselladxs,
            two: check2,
            two_move: casellasxs,
            three: check3,
            three_move: caselladxi,
            four: check4,
            four_move: casellasxi,
            check: check1 == null && check2 == null && check3 == null && check4 == null? false : true
        };

		return(caselle);
	}		
}

function mangia_pedina(casellasel, y, z){
	var pedinasel = document.getElementById(y);
	var pedinamang = document.getElementById(z);
	if(pedinamang.className != pedinasel.className){
		casellasel.firstChild.className = pedinasel.className;
		
		if(pedinasel.className == "pedina_chiara"){
			//trasformazione in dama
			if(casellasel.firstChild.id <= 8){
                casellasel.firstChild.className ="dama_chiara";
			}
		}
		
		if(pedinasel.className == "pedina_scura"){
			//trasformazione in dama
			if(casellasel.firstChild.id >= 58) {
                casellasel.firstChild.className ="dama_scura";
			}
		}
		
		var control = false;
		if(pedinasel.className == "dama_chiara"||pedinasel.className == "dama_scura")
			control = true;
		
		//controllo vittoria
		if(pedinamang.className == "pedina_chiara"||pedinamang.className == "dama_chiara"){
			pedine_chiare--;
		}
			
		if(pedinamang.className == "pedina_scura"||pedinamang.className == "dama_scura"){
			pedine_scure--;
		}
		
		//rimozione pedine					
		pedinasel.className="pedina_nascosta";
		pedinamang.className = "pedina_nascosta";
			
		for(var i=1; i<=64; i++){
			var pedina = document.getElementById(i);
			deseleziona_pedina(pedina);
		}
		
		//controllo_vittoria_tutte_mangiate();
			
		if(controllo_mosse_mangia(casellasel.firstChild).check){
			if(control == true){
				return seleziona_pedina2(casellasel.firstChild);
			}
			
			if(control == false){
				if(casellasel.firstChild.id>8 && casellasel.firstChild.id<57)
					return seleziona_pedina2(casellasel.firstChild);
				else
					gestione_turni();
			}
		}
		else	
			gestione_turni();
	}
}
