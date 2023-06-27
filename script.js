/*====================Loader=================================
Este código es para un loader que se mostrará
durante 3 segundos antes de desvanecerse y
permitir que se muestre el contenido del sitio web.*/

document.addEventListener("DOMContentLoaded", function() {
    var loaderContainer = document.getElementById("loader");
    
    setTimeout(function() {
        loaderContainer.classList.add("loader2");
        document.body.style.overflow = "auto";
    }, 3000);
  
    document.body.style.overflow = "hidden";
});
//=====================Fin Loader============================



/*=======================MENU RESPONSIVE-max width:980px======================
Este código define dos funciones para mostrar y ocultar un menú,
y para seleccionar una opción del menú. La primera función alterna
la visibilidad del menú agregando o quitando una clase CSS al
elemento de navegación, y también agrega o quita una clase al cuerpo
para habilitar o deshabilitar el desplazamiento. La segunda función
simplemente oculta el menú después de que se ha seleccionado una opción.*/

let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        document.body.classList.remove("no-scroll"); // Habilitar scroll
        menuVisible = false;
    } else{
        document.getElementById("nav").classList ="responsive";
        document.body.classList.add("no-scroll"); // Deshabilitar scroll
        menuVisible = true;
    }
}

function seleccionar(){
    //Oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    document.body.classList.remove("no-scroll"); // Habilitar scroll
    menuVisible = false;
}
/*===============================FIN MENU====================================*/


/*===============================ANIMACION SKILLS===============================
Esta función activa un efecto visual en la sección de habilidades de la página
web cuando se desplaza hacia ella*/

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
//=============================FIN ANIMACION======================================


/*======================FUNCION DE NAVEGACION DE SECCIONES=====================
regar la clase "active" a la sección actual en la barra de navegación. La función
"actualizarSeccionActual()" recorre todas las secciones y agrega la clase "active"
a la etiqueta "a" correspondiente a la sección actual. Además, se extrae el valor
del hash de la URL para agregar la clase "active" a la sección correspondiente en
la barra de navegación.*/

      // Obtener la URL actual
      $(document).ready(function() {
        // Agregar la clase "active" a la sección actual al cargar la página
        actualizarSeccionActual();
         // Agregar la clase "active" a la sección actual al desplazarse por la página
        $(window).scroll(function() {
          actualizarSeccionActual();
        });
      });
      function actualizarSeccionActual() {
        // Obtener la posición actual del desplazamiento
        var scrollPos = $(document).scrollTop();
         // Recorrer todas las secciones y determinar cuál es visible en la pantalla
        $('#nav a').each(function() {
          var ref = $(this).attr('href');
          var seccionPos = $(ref).offset().top;
          var seccionAltura = $(ref).outerHeight();
          if (seccionPos <= scrollPos && (seccionPos + seccionAltura) > scrollPos) {
            // Agregar la clase "active" a la etiqueta "a" correspondiente a la sección actual
            $(this).addClass('active');
          } else {
            // Eliminar la clase "active" de la etiqueta "a" correspondiente a las secciones no visibles
            $(this).removeClass('active');
          }
        });
      }
      
      var url = window.location.href;
       // Obtener el valor del hash de la URL (por ejemplo, "#inicio")
      var hash = url.substring(url.indexOf("#"));
       // Agregar la clase "active" a la etiqueta "a" correspondiente a la sección actual
      $('#nav a[href="'+hash+'"]').addClass('active');
//=============================================FIN=====================================================


/*=============================Animación de habilidades al desplazarse=============================
Detecto el scrolling para aplicar la animacion de la bara de habilidades.
Esto permite que la animación se active cuando el usuario llega a cierto punto de la página*/

window.onscroll = function(){
    efectoSkills();
}
//=========================================FIN ANIMACION=============================================


/*================Técnica de retraso para envío de formulario de contacto===================
 Este código es para un formulario de contacto que tiene una función de retraso de 3 segundos
 antes de enviar el formulario. Cuando el usuario hace clic en el botón de envío, se deshabilita
 temporalmente para evitar envíos duplicados y se agrega un retraso antes de enviar el formulario.*/
 
/*document.querySelector('form[name="formulario-contacto"]').addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario de inmediato
    
    document.getElementById("submitButton").disabled = true; // Deshabilita el botón de envío
    
    // Agrega un retraso de 3 segundos antes de enviar el formulario
    setTimeout(function() {
      event.target.submit(); // Envía el formulario después del retraso
    }, 3000);
  });
  //=====================================FIN FORMULARIO==================================================*/