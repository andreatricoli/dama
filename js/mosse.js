function visualizza_mosse_sposta(x){
	x.style.height = "65px";
	x.style.width = "65px";

	if(x.className == "pedina_chiara"){
		var caselladx = document.getElementById("casella"+(((x.id)-8)+1));			
		var casellasx = document.getElementById("casella"+(((x.id)-8)-1));
	}

	if(x.className == "pedina_scura"){
		var caselladx = document.getElementById("casella"+(((x.id)*1+8)+1));			
		var casellasx = document.getElementById("casella"+(((x.id)*1+8)-1));
	}
	
	if(x.className == "dama_chiara"||x.className == "dama_scura"){
		var caselladxs = document.getElementById("casella"+(((x.id)-8)+1));
		var casellasxs = document.getElementById("casella"+(((x.id)-8)-1));
		var caselladxi = document.getElementById("casella"+(((x.id)*1+8)+1));		
		var casellasxi = document.getElementById("casella"+(((x.id)*1+8)-1));
	}
	
	if(x.id%16==1){ //tipo casella 49
		if(x.className == "pedina_chiara"||x.className == "pedina_scura"){
			coloraCasellaSposta(caselladx);	
		}
		
		if(x.className == "dama_chiara"||x.className == "dama_scura"){
			if(x.id>8){
				coloraCasellaSposta(caselladxs);
			}
			if(x.id<57){
				coloraCasellaSposta(caselladxi);
			}
		}
	}
	
	else if(x.id%16==0){ //tipo casella 48 (alto a destra dei bianchi)
		if(x.className == "pedina_chiara"||x.className == "pedina_scura"){
			coloraCasellaSposta(casellasx);
		}
		
		if(x.className == "dama_chiara"||x.className == "dama_scura"){
			if(x.id>8){
				coloraCasellaSposta(casellasxs);
			}
			if(x.id<57){
				coloraCasellaSposta(casellasxi);
			}
		}
	}

	else{
		if(x.className == "pedina_chiara"||x.className == "pedina_scura"){
			coloraCasellaSposta(caselladx);
			coloraCasellaSposta(casellasx);
		}
		
		if(x.className == "dama_chiara"||x.className == "dama_scura"){
			if(x.id>8){
				coloraCasellaSposta(caselladxs);
				coloraCasellaSposta(casellasxs);
			}
			
			if(x.id<57){
				coloraCasellaSposta(caselladxi);
				coloraCasellaSposta(casellasxi);
			}
		}
	}
	
	var pedina = document.getElementById(x.id);
	visualizza_mosse_mangia(x);
}

function coloraCasellaSposta(casella){
	if(casella.firstChild.className == "pedina_nascosta"){
				casella.style.backgroundColor = "green";
				casella.style.backgroundImage = "none";
			}
	else{
		casella.style.backgroundColor = "red";
		casella.style.backgroundImage = "none";
	}
}

function coloraCasellaMangia_pedina(casella, x, altracasella){
	if(casella.firstChild.className != "pedina_nascosta"){
		if(x.className == "pedina_chiara" && x.id>16 || x.className == "pedina_scura" && x.id<49){
			if(casella.firstChild.className != x.className && x.className == "pedina_chiara" && casella.firstChild.className != "dama_chiara"&& casella.firstChild.className != "dama_scura"|| casella.firstChild.className != x.className && x.className == "pedina_scura" && casella.firstChild.className != "dama_scura" && casella.firstChild.className != "dama_chiara"){
				if(altracasella.firstChild.className == "pedina_nascosta" && altracasella.className != "casella_chiara"){
					altracasella.style.backgroundColor = "green";
					altracasella.style.backgroundImage = "none";
				}
			}
		}
	}	
}

function coloraCasellaMangia_dama(casella, x, altracasella){
	if(casella.firstChild.className != "pedina_nascosta"){
		if(casella.firstChild.className != x.className && x.className == "dama_chiara" && casella.firstChild.className != "pedina_chiara"|| casella.firstChild.className != x.className && x.className == "dama_scura" && casella.firstChild.className != "pedina_scura"){
			if(altracasella.firstChild.className == "pedina_nascosta" && altracasella.className != "casella_chiara"){
				altracasella.style.backgroundColor = "green";
				altracasella.style.backgroundImage = "none";
			}
		}
	}
}
			
function visualizza_mosse_mangia(x){
	if(x.className == "pedina_chiara"){
		var caselladx = document.getElementById("casella"+(((x.id)-8)+1));			
		var casellasx = document.getElementById("casella"+(((x.id)-8)-1));
		//indice caselle dove è possibile mangiare
		var caselladx2 = document.getElementById("casella"+(((x.id)-16)+2));
		var casellasx2 = document.getElementById("casella"+(((x.id)-16)-2));
	}
	
	if(x.className == "pedina_scura"){
		var caselladx = document.getElementById("casella"+(((x.id)*1+8)+1));			
		var casellasx = document.getElementById("casella"+(((x.id)*1+8)-1));
		//indice caselle dove è possibile mangiare
		var caselladx2 = document.getElementById("casella"+(((x.id)*1+16)+2));
		var casellasx2 = document.getElementById("casella"+(((x.id)*1+16)-2));
	}
	
	if(x.className == "dama_chiara"||x.className == "dama_scura"){
		var caselladxs = document.getElementById("casella"+(((x.id)-8)+1));
		var caselladxs2 = document.getElementById("casella"+(((x.id)-16)+2));			
		var casellasxs = document.getElementById("casella"+(((x.id)-8)-1));
		var casellasxs2 = document.getElementById("casella"+(((x.id)-16)-2));
		var caselladxi = document.getElementById("casella"+(((x.id)*1+8)+1));
		var caselladxi2 = document.getElementById("casella"+(((x.id)*1+16)+2));			
		var casellasxi = document.getElementById("casella"+(((x.id)*1+8)-1));
		var casellasxi2 = document.getElementById("casella"+(((x.id)*1+16)-2));
	}
				
	if(x.id%16==1){ //tipo casella 49
	//casella dove è possibile mangiare
		if(x.className == "pedina_chiara"||x.className == "pedina_scura"){
			coloraCasellaMangia_pedina(caselladx, x, caselladx2);
		}
		
		if(x.className == "dama_chiara"||x.className == "dama_scura"){
			//dxs
			if(x.className == "dama_chiara" && x.id>16 || x.className == "dama_scura" && x.id>16){
				coloraCasellaMangia_dama(caselladxs, x, caselladxs2);
			}
		
			//dxi
			if(x.className == "dama_chiara" && x.id<49 || x.className == "dama_scura" && x.id<49){
				coloraCasellaMangia_dama(caselladxi, x, caselladxi2);
			}
		}
	}
	
	else if(x.id%16==0){ //tipo casella 48 (alto a destra dei bianchi)
		if(x.className == "pedina_chiara"||x.className == "pedina_scura"){
			coloraCasellaMangia_pedina(casellasx, x, casellasx2);
		}
		
		if(x.className == "dama_chiara"||x.className == "dama_scura"){
			//sxs
			if(x.className == "dama_chiara" && x.id>16 || x.className == "dama_scura" && x.id>16){
				coloraCasellaMangia_dama(casellasxs, x, casellasxs2);
			}
		
			//sxi
			if(x.className == "dama_chiara" && x.id<49 || x.className == "dama_scura" && x.id<49){
				coloraCasellaMangia_dama(casellasxi, x, casellasxi2);
			}
		}
	}
	
	else{
		if(x.className == "pedina_chiara"||x.className == "pedina_scura"){
			coloraCasellaMangia_pedina(caselladx, x, caselladx2);
			coloraCasellaMangia_pedina(casellasx, x, casellasx2);
		}
		
		
		if(x.className == "dama_chiara"||x.className == "dama_scura"){
			//sxs
			if(x.className == "dama_chiara" && x.id>16 || x.className == "dama_scura" && x.id>16){
				coloraCasellaMangia_dama(casellasxs, x, casellasxs2);
			}
			
			//sxi
			if(x.className == "dama_chiara" && x.id<49 || x.className == "dama_scura" && x.id<49){
				coloraCasellaMangia_dama(casellasxi, x, casellasxi2);
			}
			
			//dxs
			if(x.className == "dama_chiara" && x.id>16 || x.className == "dama_scura" && x.id>16){
				coloraCasellaMangia_dama(caselladxs, x, caselladxs2);
			}
			
			//dxi
			if(x.className == "dama_chiara" && x.id<49 || x.className == "dama_scura" && x.id<49){
				coloraCasellaMangia_dama(caselladxi, x, caselladxi2);
			}
		}
	}
}

function nascondi_mosse(x){
	x.style.height = "60px";
	x.style.width = "60px";
	
	for(var i=1; i<=64; i++){
		var casella = document.getElementById("casella"+(i));
		if(casella.className == "casella_chiara"){
			casella.style.backgroundImage = "url('img/glass_chiaro.png')";
			casella.style.backgroundColor = "none";
		}
		if(casella.className == "casella_scura"){
			casella.style.backgroundColor = "none";
			casella.style.backgroundImage = "url('img/glass_scuro3.png')";
		}
	}
}
