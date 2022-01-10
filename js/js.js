var questionActuelle;
var reponseActuelle;
var correctionActuelle = null;
var qcmPossibilites = [];
var qcmChecked= []
var nbPoss;

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

            var currentDiv = document.getElementById('reponseQCM');
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
        document.getElementById("QCM").style.display = 'block';
        document.getElementById("PAT").style.display = 'none';
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


        document.getElementById("QAS").style.display = 'block';
        document.getElementById("QCM").style.display = 'none';
        document.getElementById("PAT").style.display = 'none';
    }
    else if(questionActuelle.type == "PAT"){//Question phrase a trou
        document.getElementById("questionQAS").innerHTML = questionActuelle.question;
        reponseActuelle = questionActuelle.reponse;

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

window.onload = recupQuestionFacile(lireData);