var questionActuelle;
var reponseActuelle;
var correctionActuelle = null;
var qcmPossibilites = [];
var qcmChecked= []
var nbPoss;

var inputPAT = [];
var nbInputPAT;
var reponsePAT = [];

var url = "https://api.jsonstorage.net/v1/json/537ea1fb-838c-47c2-927a-f64fcb392dee"

var lireData;
var xmlHttp;
var difficulte;
var methodeAAppeler;

var pts = 0;
var qeffec = 0;
var numQ;



/* Traitement des questions de type phrase à trou
*/
function isTruePAT(){

    var vrai = false;
    var vrais = [];
    qeffec+=1;

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
        pts+=1;
    }
    else{
        if(correctionActuelle != null){
            document.getElementById("reponsePAT").innerHTML = "Mauvaise réponse </br>" + correctionActuelle;
        }
        else{
            document.getElementById("reponsePAT").innerHTML = "Mauvaise réponse </br>";
        }
    }
    document.getElementById("boutonSuivantPAT").style.display = 'inline';

}

/* Traitement des questions de type question avec saisie
*/
function isTrueQAS(){
    qeffec+=1;
    if (document.getElementById("idTextQAS").value == reponseActuelle){
        document.getElementById("reponseQAS").innerHTML = "Bonne réponse </br>";
        pts+=1;
    }
    else{
        if(correctionActuelle != null){
            document.getElementById("reponseQAS").innerHTML = "Mauvaise réponse </br>" + correctionActuelle;
        }
        else{
            document.getElementById("reponseQAS").innerHTML = "Mauvaise réponse </br>";
        }
    }
    document.getElementById("boutonSuivantQAS").style.display = 'inline';

}

/* Traitement des questions de type QCM
*/
function isTrueQCM(){
    var vrai = false;
    qeffec+=1;

    for(var i = 0; i < nbPoss; i++){
        if(qcmChecked[i].checked == true && qcmPossibilites[i].innerHTML == reponseActuelle){
            vrai = true;
        }
    }

    if(vrai){
        document.getElementById("reponseQCM").innerHTML = "Bonne réponse </br>";
        pts+=1;
    }
    else{
        if(correctionActuelle != null){
            document.getElementById("reponseQCM").innerHTML = "Mauvaise réponse </br>" + questionActuelle.correction + "</br>";
        }
        else{
            document.getElementById("reponseQCM").innerHTML = "Mauvaise réponse </br>";
        }
    }
    document.getElementById("boutonSuivantQCM").style.display = 'inline';

}


/*
Choix d'une question au hasard parmi le pool de questions moyennes
*/
function recupQuestionMoyennes(data){
    var num = Math.floor(Math.random()*data.moyen.length)
    numQ = num
    questionActuelle = data.moyen[num];
    difficulte = 1
    question()
}

/*
Choix d'une question au hasard parmi le pool de questions difficiles
*/
function recupQuestionDifficiles(data){
    difficulte = 2
    var num = Math.floor(Math.random()*data.difficile.length)
    numQ = num
    questionActuelle = data.difficile[num];
    question()
}

/*
Choix d'une question au hasard parmi le pool de questions faciles
*/
function recupQuestionFacile(data){
    difficulte = 0
    var num = Math.floor(Math.random()*data.facile.length)
    numQ = num
    questionActuelle = data.facile[num];
    question()
}

//Affichage la question avec tous ses champs
function question(){

    if(questionActuelle.type == "QCM"){//question de type QCM

        try{
            for(var i = 0; i < nbPoss; i++)
                document.getElementById("idQCMDIV" +i).parentNode.removeChild(document.getElementById("idQCMDIV"+i))
        }
        catch{

        }

        var nbposs = Number(questionActuelle.nbPoss);

        var i = 0;
        //Création dynamique des éléments
        for( ; i < nbposs; i++){

            let div = document.createElement('div');
            div.classList.add('radioMain');
            div.setAttribute("id", "idQCMDIV"+i)

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
        document.getElementById("reponseQAS").innerHTML = " "
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
        inputPAT = []

        try{
            document.getElementById("idPATDiv").parentNode.removeChild(document.getElementById("idPATDiv"))
        }
        catch{        }

        let div = document.createElement('div');
        //div.classList.add('radioMain');
        div.setAttribute("id", "idPATDiv")

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
            div.appendChild(elem)
        }
        var prev = document.getElementById("boutonPAT");
        document.getElementById('PAT').insertBefore(div, prev);

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
    document.getElementById("boutonSuivantQCM").style.display = 'none';
    document.getElementById("boutonSuivantPAT").style.display = 'none';
    document.getElementById("boutonSuivantQAS").style.display = 'none';


}
//Utilisation des datas
function checkData(){
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
        lireData = JSON.parse(xmlHttp.response);//parsing en json
        console.log(lireData)
    }
}

//Affiche une question difficile et cache la sélection de difficulté
function afficheQDiff(){
    document.getElementById("diff").style.display = 'none';
    methodeAAppeler = recupQuestionDifficiles
    methodeAAppeler(lireData)
}
//Affiche une question moyenne et cache la sélection de difficulté
function afficheQMoyen(){
    document.getElementById("diff").style.display = 'none';
    methodeAAppeler = recupQuestionMoyennes
    methodeAAppeler(lireData)
}   

//Affiche une question facile et cache la sélection de difficulté
function afficheQFacile(){
    document.getElementById("diff").style.display = 'none';
    methodeAAppeler = recupQuestionFacile
    methodeAAppeler(lireData)
}

//Permet de passer à la question suivante en supprimant la question actuelle du pool
function suivant(){
    document.getElementById("boutonSuivantQAS").style.display = 'none';
    document.getElementById("boutonSuivantQCM").style.display = 'none';
    document.getElementById("boutonSuivantPAT").style.display = 'none';
    try{
        document.getElementById("reponseQCM").innerHTML = ""
    }
    catch{}
    try{
        document.getElementById("reponseQAS").innerHTML = ""
    }
    catch{}
    try{
        document.getElementById("reponsePAT").innerHTML = ""
    }
    catch{}

    reponseActuelle = null
    qcmChecked = []
    qcmPossibilites = [];
    reponsePAT = [];
    inputPAT = [];



    if(difficulte == 0){
        delete lireData.facile[numQ]
        recupQuestionFacile(lireData)
    }
    else if(difficulte == 1){
        delete lireData.moyen[numQ]
        recupQuestionMoyennes(lireData)
    }
    else{
        delete lireData.difficile[numQ]
        recupQuestionDifficiles(lireData)
    }
}

window.onload = httpGet(lireData);