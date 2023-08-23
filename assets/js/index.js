

let button = document.querySelector("#btn");
button.addEventListener("click", function() {
    let btnText=document.getElementsByTagName("BUTTON")[0].childNodes[0].nodeValue;
    if(btnText=="listenansicht"){
        document.getElementsByTagName("BUTTON")[0].childNodes[0].nodeValue="Kachelnansicht";
        for(let ele of document.getElementsByClassName("kachel")){
            ele.style.display="none";
        }
        document.getElementById("flex").style.display="block";
    }else{
        document.getElementsByTagName("BUTTON")[0].childNodes[0].nodeValue="listenansicht";
        for(let ele of document.getElementsByClassName("kachel")){
            ele.style.display="flex";
        }
        document.getElementById("flex").style.display="flex";
    }
});



 