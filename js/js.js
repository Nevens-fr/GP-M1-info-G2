var questionActuelle;

function isTrue(){

    if(document.getElementById("a1").checked == true && document.getElementById("poss1").innerText === questionActuelle.reponse){
        document.getElementById("reponse").innerHTML = "Bonne réponse";
    }
    else if(document.getElementById("a2").checked == true && document.getElementById("poss2").innerText === questionActuelle.reponse){
        document.getElementById("reponse").innerHTML = "Bonne réponse";
    }
    else if(document.getElementById("a3").checked == true && document.getElementById("poss3").innerText === questionActuelle.reponse){
        document.getElementById("reponse").innerHTML = "Bonne réponse";
    }
    else if(document.getElementById("a4").checked == true && document.getElementById("poss4").innerText === questionActuelle.reponse){
        document.getElementById("reponse").innerHTML = "Bonne réponse";
    }
    else{
        document.getElementById("reponse").innerHTML = questionActuelle.correction;
    }
}

function recupQuestionFacile(data){

    questionActuelle = data.facile[Math.floor(Math.random()*data.facile.length)];

    if(questionActuelle.type == "QCM"){
        
        document.getElementById("question").innerHTML = questionActuelle.question;
        document.getElementById("poss1").innerText= questionActuelle.possibilite1;
        document.getElementById("poss2").innerText = questionActuelle.possibilite2;
        document.getElementById("poss3").innerText = questionActuelle.possibilite3;
        document.getElementById("poss4").innerText = questionActuelle.possibilite4;
    }

}

window.onload = recupQuestionFacile(lireData);