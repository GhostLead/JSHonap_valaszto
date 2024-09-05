"use strict"

var textboxDiv = document.getElementById("sorok");
    textboxDiv.innerHTML = "";
    
    

    var valaszto = document.getElementById("honapvalaszto")
    valaszto.addEventListener("change",(valami) =>{
        for (let index = 0; index < parseInt(valami.target.value); index++) {
            let divv = document.createElement("div");
            divv.classList.add("cd");
            let szam = document.createElement("p");
            szam.innerHTML = index;
            let textbox = document.createElement("input");
            textbox.type = "text";
            textbox.placeholder = "Írj ide valamit...";
            divv.appendChild(szam);
            textboxDiv.appendChild(divv);
            textboxDiv.appendChild(textbox);
        }
    })