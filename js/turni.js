var numturno = 0;

function gestione_turni(){
	numturno++;
	var cvtm = controllo_vittoria_tutte_mangiate();
	if(cvtm == false){
		var cvtb = controllo_vittoria_tutte_bloccate();
	}
	if(!cvtb && !cvtm) {

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

            if(vsPcModeFlag) {
                setTimeout(vsPcMode, 500);
            }

        }
    }
}

function pcMangia(){
        //controlla se puo mangiare
        for(var i=1; i<=64; i++){
            var pedina = document.getElementById(i);
            if(pedina.className == "pedina_scura"|| pedina.className == "dama_scura") {
                var caselle_mangia = controllo_mosse_mangia(pedina);
                console.log(caselle_mangia);
                while(caselle_mangia.check) {

                    var casella;
                    var altracasella;

                    if(caselle_mangia.one != null) {
                        casella = caselle_mangia.one;
                        altracasella = caselle_mangia.one_move;
                    } else if( caselle_mangia.two != null) {
                        casella = caselle_mangia.two;
                        altracasella = caselle_mangia.two_move;
                    } else if( caselle_mangia.three != null) {
                        casella = caselle_mangia.three;
                        altracasella = caselle_mangia.three_move;
                    } else if( caselle_mangia.four != null) {
                          casella = caselle_mangia.four;
                          altracasella = caselle_mangia.four_move;
                    } else {
                        casella = null;
                        altracasella = null;
                    }

                    caselle_mangia = mangia_pedina(casella, i, altracasella.firstChild.id);
                    console.log(caselle_mangia);
                    console.log("mangia");
                    if(caselle_mangia == undefined) {
                        return true;
                    }
                }
            }
        }
        return false;
}

function pcSposta(caselle_spostamento, i){

        var casella;

        if(caselle_spostamento.one != null) {
            casella = caselle_spostamento.one;
        } else if( caselle_spostamento.two != null) {
            casella = caselle_spostamento.two;
        } else if( caselle_spostamento.three != null) {
            casella = caselle_spostamento.three;
        } else if( caselle_spostamento.four != null) {
              casella = caselle_spostamento.four;
        } else {
            casella = null;
        }

        sposta_pedina(casella, i);
        console.log("sposta");
        return true;
}

function checkIfIcanMove(pedina){
    if((pedina.className == "pedina_scura"|| pedina.className == "dama_scura") && controllo_mosse_spostamento(pedina).check) {
        return true;
    } else {
        return false;
    }
}

function vsPcMode(){
    var checkMangia;
    var checkSposta;

    checkMangia = pcMangia();
    if(!checkMangia) {
    //altrimenti prende una pedina a caso e la muove
        var i = Math.floor(Math.random() * 64) + 1;
        var pedina = document.getElementById(i);
        while(!checkIfIcanMove(pedina)){
            var i = Math.floor(Math.random() * 64) + 1;
            pedina = document.getElementById(i);
        }
        var caselle_spostamento = controllo_mosse_spostamento(pedina);
        checkSposta = pcSposta(caselle_spostamento, i);
    }
    if(checkMangia || checkSposta) {
        return true;
    } else {
        return false;
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
