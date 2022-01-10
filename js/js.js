var questionActuelle;
var reponseActuelle;
var correctionActuelle = null;

/* Traitement des questions de type question avec saisie
Ajouter en paramètre la bonne réponse 
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
Ajouter en paramètre la bonne réponse
*/
function isTrueQCM(){

    if(document.getElementById("a1").checked == true && document.getElementById("poss1").innerText === questionActuelle.reponse){
        document.getElementById("reponseQCM").innerHTML = "Bonne réponse </br>";
    }
    else if(document.getElementById("a2").checked == true && document.getElementById("poss2").innerText === questionActuelle.reponse){
        document.getElementById("reponseQCM").innerHTML = "Bonne réponse </br>";
    }
    else if(document.getElementById("a3").checked == true && document.getElementById("poss3").innerText === questionActuelle.reponse){
        document.getElementById("reponseQCM").innerHTML = "Bonne réponse </br>";
    }
    else if(document.getElementById("a4").checked == true && document.getElementById("poss4").innerText === questionActuelle.reponse){
        document.getElementById("reponseQCM").innerHTML = "Bonne réponse </br>";
    }
    else{
        try{
            document.getElementById("reponseQCM").innerHTML = "Mauvaise réponse </br>" + questionActuelle.correction + "</br>";
        }
        catch{
            document.getElementById("reponseQCM").innerHTML = "Mauvaise réponse </br>";
        }
    }
}

/*
Choix d'une question au hasard parmi le pool de questions faciles
*/
function recupQuestionFacile(data){

    questionActuelle = data.facile[Math.floor(Math.random()*data.facile.length)];

    if(questionActuelle.type == "QCM"){
        
        document.getElementById("questionQCM").innerHTML = questionActuelle.question;
        document.getElementById("poss1").innerText= questionActuelle.possibilite1;
        document.getElementById("poss2").innerText = questionActuelle.possibilite2;
        document.getElementById("poss3").innerText = questionActuelle.possibilite3;
        document.getElementById("poss4").innerText = questionActuelle.possibilite4;
        reponseActuelle = questionActuelle.reponse;

        try{
            correctionActuelle = questionActuelle.correction;
        }
        catch{
            correctionActuelle = null;
        }

        document.getElementById("QAS").style.display = 'none';
        document.getElementById("QCM").style.display = 'block';
    }
    else if(questionActuelle.type == "QAS"){
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
    }
    else if(questionActuelle.type == "PAT"){
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
    }
}

window.onload = recupQuestionFacile(lireData);