function randomword(){
    let json = JSON.stringify(/data/output.json);
    document.getElementById("resultat").innerHTML =  "Type de la variable : " + typeof(json) + "<br>Contenu de la variable : " + json;
}

randomword();

document.write("<p>Ok");