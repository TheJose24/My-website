/*====================Loader=================================
Este código es para un loader que se mostrará
durante 3 segundos antes de desvanecerse y
permitir que se muestre el contenido del sitio web.*/

document.addEventListener("DOMContentLoaded", function () {
  var loaderContainer = document.getElementById("loader");

  setTimeout(function () {
    loaderContainer.classList.add("loader2");
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";  
  }, 3000); 
  setTimeout(function () {
    loaderContainer.style.display = "none";
  }, 4000);
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

function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    document.body.classList.remove("no-scroll"); // Habilitar scroll
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    document.body.classList.add("no-scroll"); // Deshabilitar scroll
    menuVisible = true;
  }
}

function seleccionar() {
  //Oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  document.body.classList.remove("no-scroll"); // Habilitar scroll
  menuVisible = false;
}
/*===============================FIN MENU====================================*/

/*===============================ANIMACION SKILLS===============================
Esta función activa un efecto visual en la sección de habilidades de la página
web cuando se desplaza hacia ella*/

function efectoSkills() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("java");
    habilidades[3].classList.add("mysql");
    habilidades[4].classList.add("python");
    habilidades[5].classList.add("gitgithub");
    habilidades[6].classList.add("comunicacion");
    habilidades[7].classList.add("trabajo");
    habilidades[8].classList.add("aprendizaje");
    habilidades[9].classList.add("responsabilidad");
    habilidades[10].classList.add("creatividad");
    habilidades[11].classList.add("dedicacion");
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
$(document).ready(function () {
  // Agregar la clase "active" a la sección actual al cargar la página
  actualizarSeccionActual();
  // Agregar la clase "active" a la sección actual al desplazarse por la página
  $(window).scroll(function () {
    actualizarSeccionActual();
  });
});
function actualizarSeccionActual() {
  // Obtener la posición actual del desplazamiento
  var scrollPos = $(document).scrollTop();
  // Recorrer todas las secciones y determinar cuál es visible en la pantalla
  $("#nav a").each(function () {
    var ref = $(this).attr("href");
    var seccionPos = $(ref).offset().top;
    var seccionAltura = $(ref).outerHeight();
    if (seccionPos <= scrollPos && seccionPos + seccionAltura > scrollPos) {
      // Agregar la clase "active" a la etiqueta "a" correspondiente a la sección actual
      $(this).addClass("active");
    } else {
      // Eliminar la clase "active" de la etiqueta "a" correspondiente a las secciones no visibles
      $(this).removeClass("active");
    }
  });
}

var url = window.location.href;
// Obtener el valor del hash de la URL (por ejemplo, "#inicio")
var hash = url.substring(url.indexOf("#"));
// Agregar la clase "active" a la etiqueta "a" correspondiente a la sección actual
$('#nav a[href="' + hash + '"]').addClass("active");
//=============================================FIN=====================================================

/*=============================Animación de habilidades al desplazarse=============================
Detecto el scrolling para aplicar la animacion de la bara de habilidades.
Esto permite que la animación se active cuando el usuario llega a cierto punto de la página*/

window.onscroll = function () {
  efectoSkills();
};
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

//======================================= Boton Chat ==================================================
let clicks = 1; // Variable para controlar el estado de la ventana de chat (1: visible, 2: oculta)

// Función para cambiar la visibilidad de la ventana de chat
function clickear() {
  let chat = document.getElementById("chat");
  let container = document.getElementById("container");
  let icono = document.getElementById("icono");
  if (clicks == 1) {
    // Si está visible, cambiar la opacidad a 1 y aplicar una transición suave
    chat.style.opacity = "1";
    chat.style.position = "fixed";
    chat.style.display = "block";
    container.style.display = "flex"
    chat.style.transition = "opacity 0.2s";
    icono.style.position = "relative";
    clicks = 2; // Cambiar el estado a oculto
  } else if (clicks == 2) {
    // Si está oculta, cambiar la opacidad a 0
    chat.style.opacity = "0";
    chat.style.position = "relative";
    chat.style.display = "none";
    container.style.display = "none"
    icono.style.position = "fixed";
    clicks = 1; // Cambiar el estado a visible
  }
}


const API_KEY = process.env.API_KEY || 'valor_por_defecto';
console.log("Valor de API_KEY:", API_KEY);
let mensajeUsuarioTexto;

const generateResponse = (responseCallback) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Eres ALFRED, un asistente virtual altamente inteligente y versátil diseñado por José, creado para ser su intermediario y 'venderlo' a los clientes potenciales, respondiendo sus preguntas y proporcionando informacion relevante sobre sus habilidades, experiencias y logros."
            +"Tienes un conocimiento valioso sobre tu propietario, un estudiante de Ingeniería de Sistemas e Informática y graduado del programa Oracle Next Education (ONE) con un certificado que respalda su formación. Su objetivo es convertirse en un profesional altamente competente y hacer contribuciones significativas en el mundo del desarrollo de software, específicamente como desarrollador Full Stack. Experiencia y Logros Específicos: Durante su tiempo como estudiante, ha trabajado en varios proyectos académicos y personales que le han permitido adquirir habilidades significativas. Uno de sus proyectos personales favoritos es un asistente virtual que utiliza la API de OpenAI. Este asistente se comunica y responde por voz, lo que lo convierte en un proyecto Full Stack en el que ha trabajado tanto en el backend como en el frontend. También ha desarrollado su portafolio web utilizando HTML, CSS y JavaScript, lo que demuestra sus habilidades en desarrollo web (Front End). Uno de sus proyectos académicos incluyó la creación de un programa para una casa de cambios, que realizaba funciones como mostrar una lista de monedas disponibles, agregar nuevas monedas, modificar el tipo de cambio de cada moneda, realizar ventas (cambio de moneda) con métodos de pago preferidos y mantener un historial de ventas. A pesar de no utilizar una base de datos, gestionó eficazmente la información en la memoria local, este fue un proyecto Back End. Otro proyecto académico implicó el desarrollo de un sistema de reservas para un hotel, que cumplía con las funciones CRUD y estaba conectado a una base de datos MySQL. Este proyecto se desarrolló en Java. Habilidades Técnicas: su conjunto de habilidades incluye: Java, Python, Spring Boot, Flask, HTML, CSS, JavaScript, MySQL, SQL Server, API REST. Ejemplos de Colaboración en Equipo: Ha tenido la oportunidad de trabajar en equipos académicos en proyectos como el 'Programa para una Casa de Cambios' y en un proyecto actual de un 'Programa de Ventas para Eventos'. Su experiencia en programación le ha permitido liderar y guiar a sus equipos, compartir conocimientos, corregir y motivar. Además, ha estado activamente involucrado en la programación en equipo para lograr los objetivos de los proyectos. Objetivos Profesionales: Su objetivo profesional es convertirse en un desarrollador Full Stack y trabajar en una empresa extranjera donde pueda aplicar sus habilidades técnicas y contribuir de manera significativa a proyectos desafiantes."

            +"Estas aqui para que puedas captar el interes de los reclutadores de TI y facilitar el proceso de contratacion para José. Si alguien necesita mas detalles o tiene preguntas especificas sobre José, puedes responder utilizando la informacion que te eh proporcionado previamente: "

            +"Puedes destacar su informacion academica, experiencia laboral, habilidades tecnicas y proyectos destacados. Ademas tienes la capacidad de agendar reuniones con José (si lo solicitan) o enviar mensajes directos para que José pueda discutir oportunidades de trabajo o colaboracion"

            +"Debes brindar respuestas precisas y cortas, no excediéndote de las 40 palabras."
            +"Solo hablas español."
        },
        {
          role: "user",
          content: mensajeUsuarioTexto
        }
      ]
    })
  }

  fetch(API_URL, requestOptions)
    .then(res => res.json())
    .then(data => {
      responseCallback(data.choices[0].message.content);
    })
    .catch((error) => {
      responseCallback("Opps! Ocurrio un error. Por favor intenta de nuevo.");
    })
}

const cajaTexto = document.querySelector(".cajaTexto textarea");
function enviar() {
  // Obtén el contenedor de mensajes y la caja de texto
  const containerWhat = document.getElementById("containerWhat");
  

  // Obtén el texto ingresado por el usuario en la caja de texto
  mensajeUsuarioTexto = cajaTexto.value;

  // Verifica que haya texto ingresado antes de agregar el mensaje
  if (mensajeUsuarioTexto.trim() !== "") {
    // Crea un nuevo elemento div con la clase "containerMensaje usuario"
    const nuevoMensajeUsuario = document.createElement("div");
    nuevoMensajeUsuario.classList.add("containerMensaje", "usuario");

    // Crea un nuevo elemento div para el mensaje del usuario
    const mensajeUsuario = document.createElement("div");
    mensajeUsuario.classList.add("mensaje", "msgUsuario");
    mensajeUsuario.textContent = mensajeUsuarioTexto;

    // Crea un nuevo elemento div para el icono del usuario
    const iconoUsuario = document.createElement("div");
    iconoUsuario.classList.add("imagen", "imgUsuario");

    // Crea un elemento img y configúralo
    const imagenUsuario = document.createElement("img");
    imagenUsuario.classList.add("imgMensaje");
    imagenUsuario.src = "Imagenes/usuario.png";
    imagenUsuario.alt = "Imagen de usuario"; // Añade un atributo alt apropiado

    // Agrega la imagen del usuario al elemento iconoUsuario
    iconoUsuario.appendChild(imagenUsuario);

    // Agrega el mensaje del usuario y el icono al contenedor del mensaje de usuario
    nuevoMensajeUsuario.appendChild(mensajeUsuario);
    nuevoMensajeUsuario.appendChild(iconoUsuario);

    // Agrega el nuevo mensaje de usuario al contenedor de mensajes
    containerWhat.appendChild(nuevoMensajeUsuario);
    containerWhat.scrollTo(0, containerWhat.scrollHeight);

    // Limpia el contenido de la caja de texto
    cajaTexto.value = "";
    
    //================================================================
    setTimeout(function () {
      // Agrega un mensaje de respuesta del asistente
      const nuevoMensajeAsistente = document.createElement("div");
      nuevoMensajeAsistente.classList.add("containerMensaje", "asistente");

      // Crea un nuevo elemento div para el icono del usuario
      const iconoAsistente = document.createElement("div");
      iconoAsistente.classList.add("imagen", "imgAsistente");

      // Crea un elemento img y configúralo
      const imagenAsistente = document.createElement("img");
      imagenAsistente.classList.add("imgMensaje");
      imagenAsistente.src = "Imagenes/botHeader.png";
      imagenAsistente.alt = "Imagen de asistente"; // Añade un atributo alt apropiado

      // Agrega la imagen del usuario al elemento iconoAsistente
      iconoAsistente.appendChild(imagenAsistente);

      // Crea un nuevo elemento div para el mensaje del usuario
      const mensajeAsistente = document.createElement("div");
      mensajeAsistente.classList.add("mensaje", "msgAsistente");
      mensajeAsistente.textContent = "Un momento por favor...";

      // Agrega el mensaje del usuario y el icono al contenedor del mensaje de usuario
      nuevoMensajeAsistente.appendChild(iconoAsistente);
      nuevoMensajeAsistente.appendChild(mensajeAsistente);

      // Agrega el nuevo mensaje de usuario al contenedor de mensajes
      containerWhat.appendChild(nuevoMensajeAsistente);
      containerWhat.scrollTo(0, containerWhat.scrollHeight);

      generateResponse((respuestaAsistente) => {
        // Actualiza el mensaje del asistente con la respuesta generada
        mensajeAsistente.textContent = respuestaAsistente;
        containerWhat.appendChild(nuevoMensajeAsistente);
        containerWhat.scrollTo(0, containerWhat.scrollHeight);
      });

    }, 600);
  }
}
/*Ajustar la altura del text area automaticamente*/
const alturaInicialInput = cajaTexto.scrollHeight;

cajaTexto.addEventListener("input", () => {
  cajaTexto.style.height = `${alturaInicialInput}px`;
  cajaTexto.style.height = `${cajaTexto.scrollHeight}px`;
});

/*Habilitar el icono de enviar cuando se ingresa texto*/ 
const btnEnviar = document.getElementById("btnEnviar");

cajaTexto.addEventListener("input", function () {
  if (cajaTexto.value.trim() !== "") {
    btnEnviar.style.visibility = "visible";
  } else {
    btnEnviar.style.visibility = "hidden";
  }
});