var questionActuelle;
var reponseActuelle;
var correctionActuelle = null;
var qcmPossibilites = [];
var qcmChecked= []
var nbPoss;

var inputPAT = [];
var nbInputPAT;
var reponsePAT = [];

var url = "https://api.jsonstorage.net/v1/json/954cc290-ed90-4f21-b835-8dc85cd0bf94"

var lireData;
var xmlHttp;




/* Traitement des questions de type phrase à trou
*/
function isTruePAT(){

    var vrai = false;
    var vrais = [];

    for(var i =0; i < nbInputPAT; i++){
        
        if(document.getElementById("idTextPAT" + i).value == reponsePAT[i]){
            vrais.push(true);
        }
        else{
            vrais.push(false);
        }
    }

    for(var i = 0; i < nbInputPAT; i++){
        if(vrais[i]){
            vrai = true;
        }
        else{
            vrai = false
        }
    }

    if(vrai){
        document.getElementById("reponsePAT").innerHTML = "Bonne réponse </br>";
    }
    else{
        if(correctionActuelle != null){
            document.getElementById("reponsePAT").innerHTML = "Mauvaise réponse </br>" + correctionActuelle;
        }
        else{
            document.getElementById("reponsePAT").innerHTML = "Mauvaise réponse </br>";
        }
    }
}

/* Traitement des questions de type question avec saisie
*/
function isTrueQAS(){
    if (document.getElementById("idTextQAS").value == reponseActuelle){
        document.getElementById("reponseQAS").innerHTML = "Bonne réponse </br>";
    }
    else{
        if(correctionActuelle != null){
            document.getElementById("reponseQAS").innerHTML = "Mauvaise réponse </br>" + correctionActuelle;
        }
        else{
            document.getElementById("reponseQAS").innerHTML = "Mauvaise réponse </br>";
        }
    }
}

/* Traitement des questions de type QCM
*/
function isTrueQCM(){
    var vrai = false;

    for(var i = 0; i < nbPoss; i++){
        if(qcmChecked[i].checked == true && qcmPossibilites[i].innerHTML == reponseActuelle){
            vrai = true;
        }
    }

    if(vrai){
        document.getElementById("reponseQCM").innerHTML = "Bonne réponse </br>";
    }
    else{
        if(correctionActuelle != null){
            document.getElementById("reponseQCM").innerHTML = "Mauvaise réponse </br>" + questionActuelle.correction + "</br>";
        }
        else{
            document.getElementById("reponseQCM").innerHTML = "Mauvaise réponse </br>";
        }
    }
}

/*
Choix d'une question au hasard parmi le pool de questions faciles
*/
function recupQuestionFacile(data){


    questionActuelle = data.facile[Math.floor(Math.random()*data.facile.length)];

    if(questionActuelle.type == "QCM"){//question de type QCM

        var nbposs = Number(questionActuelle.nbPoss);

        var i = 0;
        //Création dynamique des éléments
        for( ; i < nbposs; i++){
            let div = document.createElement('div');
            div.classList.add('radioMain');

            let input = document.createElement('input');
            input.setAttribute("type", "radio")
            input.setAttribute("name", "drone")
            qcmChecked.push(input);

            div.appendChild(input);

            let label = document.createElement('label');
            label.setAttribute('value', questionActuelle.possibilite[i]);
            label.innerHTML = questionActuelle.possibilite[i];

            div.appendChild(label);

            qcmPossibilites.push(label);

            var currentDiv = document.getElementById('boutonQCM');
            document.getElementById('QCM').insertBefore(div, currentDiv);
        }
        
        document.getElementById("questionQCM").innerHTML = questionActuelle.question;
        reponseActuelle = questionActuelle.reponse;
        nbPoss = nbposs;

        try{
            correctionActuelle = questionActuelle.correction;
        }
        catch{
            correctionActuelle = null;
        }

        document.getElementById("QAS").style.display = 'none';
        document.getElementById("PAT").style.display = 'none';
        document.getElementById("QCM").style.display = 'block';
    }
    else if(questionActuelle.type == "QAS"){//question avec saisie
        document.getElementById("questionQAS").innerHTML = questionActuelle.question;
        reponseActuelle = questionActuelle.reponse;
        try{
            correctionActuelle = questionActuelle.correction;
        }
        catch{
            correctionActuelle = null;
        }

        document.getElementById("QCM").style.display = 'none';
        document.getElementById("PAT").style.display = 'none';
        document.getElementById("QAS").style.display = 'block';
    }
    else if(questionActuelle.type == "PAT"){//Question phrase a trou
        document.getElementById("questionPAT").style.display = 'none';
        reponsePAT = questionActuelle.reponse;

        var nb = Number(questionActuelle.nb);

        nbInputPAT = 0;

        for(var i = 0; i < nb; i++){

            var elem;

            if (questionActuelle.tab[i] == "VIDE"){
                elem = document.createElement('input');
                elem.classList.add('p1Main');
                elem.setAttribute('type', "text");
                elem.setAttribute('class', "textQAS");
                elem.setAttribute('id', "idTextPAT" + nbInputPAT);
                nbInputPAT += 1;
                inputPAT.push(elem);
            }
            else{
                elem = document.createElement('p');
                elem.innerHTML = questionActuelle.tab[i];
                elem.setAttribute('class', "textQAS");
            }

            var prev = document.getElementById("boutonPAT");
            document.getElementById('PAT').insertBefore(elem, prev);
        }

        try{
            correctionActuelle = questionActuelle.correction;
        }
        catch{
            correctionActuelle = null;
        }

        document.getElementById("QAS").style.display = 'none';
        document.getElementById("QCM").style.display = 'none';
        document.getElementById("PAT").style.display = 'block';
    }
}

/*
Choix d'une question au hasard parmi le pool de questions moyennes
*/
function recupQuestionMoyennes(data){


    questionActuelle = data.moyen[Math.floor(Math.random()*data.moyen.length)];

    if(questionActuelle.type == "QCM"){//question de type QCM

        var nbposs = Number(questionActuelle.nbPoss);

        var i = 0;
        //Création dynamique des éléments
        for( ; i < nbposs; i++){
            let div = document.createElement('div');
            div.classList.add('radioMain');

            let input = document.createElement('input');
            input.setAttribute("type", "radio")
            input.setAttribute("name", "drone")
            qcmChecked.push(input);

            div.appendChild(input);

            let label = document.createElement('label');
            label.setAttribute('value', questionActuelle.possibilite[i]);
            label.innerHTML = questionActuelle.possibilite[i];

            div.appendChild(label);

            qcmPossibilites.push(label);

            var currentDiv = document.getElementById('boutonQCM');
            document.getElementById('QCM').insertBefore(div, currentDiv);
        }
        
        document.getElementById("questionQCM").innerHTML = questionActuelle.question;
        reponseActuelle = questionActuelle.reponse;
        nbPoss = nbposs;

        try{
            correctionActuelle = questionActuelle.correction;
        }
        catch{
            correctionActuelle = null;
        }

        document.getElementById("QAS").style.display = 'none';
        document.getElementById("PAT").style.display = 'none';
        document.getElementById("QCM").style.display = 'block';
    }
    else if(questionActuelle.type == "QAS"){//question avec saisie
        document.getElementById("questionQAS").innerHTML = questionActuelle.question;
        reponseActuelle = questionActuelle.reponse;
        try{
            correctionActuelle = questionActuelle.correction;
        }
        catch{
            correctionActuelle = null;
        }

        document.getElementById("QCM").style.display = 'none';
        document.getElementById("PAT").style.display = 'none';
        document.getElementById("QAS").style.display = 'block';
    }
    else if(questionActuelle.type == "PAT"){//Question phrase a trou
        document.getElementById("questionPAT").style.display = 'none';
        reponsePAT = questionActuelle.reponse;

        var nb = Number(questionActuelle.nb);

        nbInputPAT = 0;

        for(var i = 0; i < nb; i++){

            var elem;

            if (questionActuelle.tab[i] == "VIDE"){
                elem = document.createElement('input');
                elem.classList.add('p1Main');
                elem.setAttribute('type', "text");
                elem.setAttribute('class', "textQAS");
                elem.setAttribute('id', "idTextPAT" + nbInputPAT);
                nbInputPAT += 1;
                inputPAT.push(elem);
            }
            else{
                elem = document.createElement('p');
                elem.innerHTML = questionActuelle.tab[i];
                elem.setAttribute('class', "textQAS");
            }

            var prev = document.getElementById("boutonPAT");
            document.getElementById('PAT').insertBefore(elem, prev);
        }

        try{
            correctionActuelle = questionActuelle.correction;
        }
        catch{
            correctionActuelle = null;
        }

        document.getElementById("QAS").style.display = 'none';
        document.getElementById("QCM").style.display = 'none';
        document.getElementById("PAT").style.display = 'block';
    }
}

function tirageQuestionDiff(){}

/*
Choix d'une question au hasard parmi le pool de questions difficiles
*/
function recupQuestionDifficiles(data){

    if(premierPassage){
        httpGet()
        return 0
    }

    questionActuelle = data.difficile[Math.floor(Math.random()*data.difficile.length)];
    console.log(questionActuelle.question);

    if(questionActuelle.type == "QCM"){//question de type QCM

        var nbposs = Number(questionActuelle.nbPoss);

        var i = 0;
        //Création dynamique des éléments
        for( ; i < nbposs; i++){
            let div = document.createElement('div');
            div.classList.add('radioMain');

            let input = document.createElement('input');
            input.setAttribute("type", "radio")
            input.setAttribute("name", "drone")
            qcmChecked.push(input);

            div.appendChild(input);

            let label = document.createElement('label');
            label.setAttribute('value', questionActuelle.possibilite[i]);
            label.innerHTML = questionActuelle.possibilite[i];

            div.appendChild(label);

            qcmPossibilites.push(label);

            var currentDiv = document.getElementById('boutonQCM');
            document.getElementById('QCM').insertBefore(div, currentDiv);
        }
        
        document.getElementById("questionQCM").innerHTML = questionActuelle.question;
        reponseActuelle = questionActuelle.reponse;
        nbPoss = nbposs;

        try{
            correctionActuelle = questionActuelle.correction;
        }
        catch{
            correctionActuelle = null;
        }

        document.getElementById("QAS").style.display = 'none';
        document.getElementById("PAT").style.display = 'none';
        document.getElementById("QCM").style.display = 'block';
    }
    else if(questionActuelle.type == "QAS"){//question avec saisie
        document.getElementById("questionQAS").innerHTML = questionActuelle.question;
        reponseActuelle = questionActuelle.reponse;
        try{
            correctionActuelle = questionActuelle.correction;
        }
        catch{
            correctionActuelle = null;
        }

        document.getElementById("QCM").style.display = 'none';
        document.getElementById("PAT").style.display = 'none';
        document.getElementById("QAS").style.display = 'block';
    }
    else if(questionActuelle.type == "PAT"){//Question phrase a trou
        document.getElementById("questionPAT").style.display = 'none';
        reponsePAT = questionActuelle.reponse;

        var nb = Number(questionActuelle.nb);

        nbInputPAT = 0;

        for(var i = 0; i < nb; i++){

            var elem;

            if (questionActuelle.tab[i] == "VIDE"){
                elem = document.createElement('input');
                elem.classList.add('p1Main');
                elem.setAttribute('type', "text");
                elem.setAttribute('class', "textQAS");
                elem.setAttribute('id', "idTextPAT" + nbInputPAT);
                nbInputPAT += 1;
                inputPAT.push(elem);
            }
            else{
                elem = document.createElement('p');
                elem.innerHTML = questionActuelle.tab[i];
                elem.setAttribute('class', "textQAS");
            }

            var prev = document.getElementById("boutonPAT");
            document.getElementById('PAT').insertBefore(elem, prev);
        }

        try{
            correctionActuelle = questionActuelle.correction;
        }
        catch{
            correctionActuelle = null;
        }

        document.getElementById("QAS").style.display = 'none';
        document.getElementById("QCM").style.display = 'none';
        document.getElementById("PAT").style.display = 'block';
    }
}

//requete pour obtenir un json stocké
function httpGet(){
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url );
    xmlHttp.setRequestHeader('Content-Type', "application/json; charset=UTF-8");
    xmlHttp.send( null );
    xmlHttp.onreadystatechange = checkData;

    document.getElementById("QAS").style.display = 'none';
    document.getElementById("QCM").style.display = 'none';
    document.getElementById("PAT").style.display = 'none';
}
//Utilisation des datas
function checkData(){
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
        lireData = JSON.parse(xmlHttp.response);//parsing en json
        console.log(lireData)
    }
}

function afficheQDiff(){
    document.getElementById("diff").style.display = 'none';
    methodeAAppeler = recupQuestionDifficiles
    methodeAAppeler(lireData)
}

function afficheQMoyen(){
    document.getElementById("diff").style.display = 'none';
    methodeAAppeler = recupQuestionMoyennes
    methodeAAppeler(lireData)
}

function afficheQFacile(){
    document.getElementById("diff").style.display = 'none';
    methodeAAppeler = recupQuestionFacile
    methodeAAppeler(lireData)
}

function suivant(){

}

var methodeAAppeler = recupQuestionMoyennes

window.onload = httpGet(lireData);