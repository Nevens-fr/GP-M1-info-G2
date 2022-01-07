function isTrue(){
    if(document.getElementById("vacances").checked == true){
        document.getElementById("reponse").innerHTML = "True";
    }
    else{
        document.getElementById("reponse").innerHTML = "False";
    }
}