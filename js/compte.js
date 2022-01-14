//requete pour obtenir un json stocké
var url = "https://api.jsonstorage.net/v1/json/44922ffd-104e-40b7-bd76-e0de5dcfc587";
var prenom = "Template";
var requeteCompte;
var lireData;

var connecte = false;

//Recuperation de la base de donnée
function getCompte(){
    requeteCompte = new XMLHttpRequest();
    requeteCompte.open( "GET", url );
    requeteCompte.setRequestHeader('Content-Type', "application/json; charset=UTF-8");
    requeteCompte.send( null );
    requeteCompte.onreadystatechange = checkCompte;

    var loginTest = sessionStorage.getItem("nom");
    console.log(loginTest);
    if(loginTest == "Template" || loginTest == "null"){
        connecte=false;
    }
    else{
        connecte=true;
    }

    prenom = loginTest;
    console.log(connecte);
    userInconnu();
}

//Utilisation des datas
function checkCompte(){
    if(requeteCompte.readyState == 4 && requeteCompte.status == 200){
        lireData = JSON.parse(requeteCompte.response);//parsing en json
        console.log(lireData)
    }
}

function userInconnu(){
    if (connecte == false){
        document.getElementById('txt-login').innerText = "Bienvenu inconnu ! Connecte toi !";
        document.getElementById('btn-unlogin').style.display = "none";
    }
    else{
        document.getElementById('txt-login').innerText = "Bonjour " + prenom + " !";
        document.getElementById('input-login').style.display = "none";
        document.getElementById('btn-login').style.display = "none";
        document.getElementById('btn-inscr').style.display = "none";
        document.getElementById('btn-unlogin').style.display = "inline";
    }
}

function recupConnection(){

    var tmpPrenom = document.getElementById('input-login').value;

    console.log(lireData.nb);

    for(var i = 0; i<lireData.users.length; i++){
        if(lireData.users[i].name == tmpPrenom){
            prenom = tmpPrenom;
            break;
        }
    }

    if(prenom=="Template"){
        console.log("User non existant");
        connecte= false;
    }
    else{
        connecte = true;
        sessionStorage.setItem("nom",prenom);
        document.getElementById('input-login').style.display = "none";
        document.getElementById('btn-login').style.display = "none";
        document.getElementById('btn-inscr').style.display = "none";

    }
    userInconnu();
}

function recupDeconnection(){
    sessionStorage.setItem("nom","Template");
    connecte=false;
    location.reload();
}

function inscription(){
    var d = document.getElementById("input-login").innerText;
    //d = JSON.stringify(d)x
    lireData.users.push({
        "name" : d,
        "notesLecture" : ["0", "0", "0"],
        "notesEcriture" : ["0", "0", "0"],
        "notesCompter" : ["0", "0", "0"],
    })
    console.log(d)
    var data = JSON.stringify(lireData) //en string

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "PUT", url );
    xmlHttp.setRequestHeader('Content-Type', "application/json; charset=UTF-8");
    xmlHttp.onreadystatechange = checkDataCreate;
    xmlHttp.send( data );
}


//récup data de la modif de json
function checkDataCreate(){ // pas besoin de get l'url, elle reste la mm
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
        location.reload()
    }
}

window.onload = getCompte();