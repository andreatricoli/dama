function creaDamiera(){
	var idPedina = 1;
	var myDamiera = document.createElement("div");
	myDamiera.id="damiera";
	for (i=1; i<=8; i++) {
		var riga = document.createElement("div");
		riga.className="riga";
		for (j=1; j<=8; j++) { 
			var casella = document.createElement("div");
			casella.id = "casella" + (idPedina); 
			if ((i+j) % 2 !=0){ 
				casella.className="casella_chiara";
				var pedina = document.createElement("div");
				pedina.id = idPedina++;
				pedina.className="pedina_nascosta";
			}
			else{
				casella.className="casella_scura";
				var pedina = document.createElement("div");
				pedina.id = idPedina++;
				
				if(i<=3){
					pedina.className="pedina_scura";
				}
				
				else if(i>=6){
					pedina.className="pedina_chiara";
				}
				
				else{
					pedina.className="pedina_nascosta";
				}
				
				pedina.setAttribute("onmouseenter", "visualizza_mosse_sposta(this)");
				pedina.setAttribute("onmouseleave", "nascondi_mosse(this)");
				pedina.setAttribute("onclick", "seleziona_pedina(this)");

			}
			casella.appendChild(pedina);
			riga.appendChild(casella);
		}
		myDamiera.appendChild(riga);
	}
	document.body.appendChild(myDamiera);
	gestione_turni();
}
