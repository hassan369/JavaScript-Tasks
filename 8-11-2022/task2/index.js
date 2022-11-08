// let select = document.getElementById("country-select").value;
var select = document.getElementById("country-select").value;
let imageC = document.getElementById("img-country").src;


function changingFun(){
    
if (document.getElementById("country-select").value == "norway"){
    document.getElementById("img-country").src = "images.png";
} else if(document.getElementById("country-select").value == "jordan"){
    document.getElementById("img-country").src = "Flag_of_Jordan.svg.png";
} else if(document.getElementById("country-select").value == "ksa"){
    document.getElementById("img-country").src = "Flag-Saudi-Arabia.webp";
}


}
