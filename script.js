//Preloader
document.addEventListener("DOMContentLoaded", function() {
    var loaderContainer = document.getElementById("loader");
    
    setTimeout(function() {
        loaderContainer.classList.add("loader2");
        document.body.style.overflow = "auto";
    }, 3000);
  
    document.body.style.overflow = "hidden";
});
//fin

let menuVisible = false;

//Funcion que oculta o muesta el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    } else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //Oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las SKILLS
function efectoSkills(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("gitgithub");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
    }
}

//Detecto el scrolling para aplicar la animacion de la bara de habilidades
window.onscroll = function(){
    efectoSkills();
}