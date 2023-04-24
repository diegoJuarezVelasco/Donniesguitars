$(document).ready(function () {

  //Glider
  // new Glider(document.querySelector('.glider'), {
  //   slidesToShow: 1,
  //   dots: '.dots',
  //   draggable: false
  // });
    $('.skitter-large').skitter({
      dots: false,
      numbers: true
    });
  
  /*Menu movil*/
  const menu_movil = document.querySelector(".menu-movil");
  menu_movil.addEventListener("click", mostrarOcultarMenu);
  
  function mostrarOcultarMenu(event) {
    $("nav.navegacion-principal").slideToggle(1000);
  }
  function ocultarMenu(event) {
    $("nav.navegacion-principal").slideUp(1000);
  }

  //Anima los links
  $(".scrollTo").click(function (e) {
	e.preventDefault();    
let getElement = $(this).attr("href");
    if ($(getElement).length) {
      let getOffset = $(getElement).offset().top - 115;
      $("html,body").animate(
        {
          scrollTop: getOffset,
        },
        1000
      );
    }
  });
  
  //cierra el menu-movil
  
  $(".navegacion-principal").on("click touchstart", (e) => {
    e.stopPropagation();
    if (e.target !== e.currentTarget) {
      let clickedItem = e.target.className;
      //   console.log(clickedItem);
      // console.log(screen.width)
      if (screen.width <= 600) {
        if (clickedItem === "scrollTo link-nav") {
          ocultarMenu();
        }
      }
    }
  });


  /*popup*/

  const contenedorServicios = document.querySelector(".contenedor-servicios");
  const overlay = document.querySelector(".overlay");
  // const botonCerrarPopup = document.getElementById("boton-cerrar-popup");
  const popupTituloServicio = document.getElementById("popup-titulo-servicio");
  const popupImg = document.getElementById("popup-img");
  const popupDescripcionServicio = document.getElementById(
    "popup-descripcion-servicio"
  );
  let descripcion = document.createElement("P");
  descripcion.setAttribute("id", "parrafo-descripcion");

  const popupPrecios = document.getElementById("popup-precios");
  const img = document.createElement("IMG");
  img.setAttribute("id", "img-popup");
  $("#boton-cerrar-popup").on("touchstart click", () => {
    //popupTituloServicio.innerHTML="";
    $("#descripcion-lista").remove();
    $("#lista-precios").remove();
    $("#img-popup").remove();
    overlay.style.display = "none";
  });

  $(".contenedor-servicios").on("click touchstart", (e) => {
    if (e.target !== e.currentTarget) {
      let clickedItem = e.target.id;

      switch (clickedItem) {
        case "boton-1":
          {
            let listaPrecio = document.createElement("UL");
            let lista = document.createElement("UL");
            lista.setAttribute("id", "descripcion-lista");
            listaPrecio.setAttribute("id", "lista-precios");
            let arregloLi = [
              "Limpieza de hardware y trastes",
              "Hidratación de diapasón",
              "Octavación",
              "lubricación de Nut (cejilla o hueso)",
            ];
            let arregloPrecios = [
              "Stratocaster: $350",
              "Telecaster: $350",
              "Les Paul: $300",
              "Floyd Rose: $400",
              "Semihollow: $350",
              "Guitarra con alma oculta en mástil: + $50",
            ];
            popupTituloServicio.innerHTML = "Mantenimiento General";
            img.setAttribute("src", "./img/IMG_20200617_204256351.jpg");
            popupImg.appendChild(img);
            descripcion.innerHTML =
              "Toda guitarra o bajo necesita un mantenimiento, ya que con el uso comienza a desafinarse, además al deslizar las manos sobre el mástil este comenzará a agrietarse " +
              "debido al sudor que producen las manos. Esto puede evitarse hidratando el mástil de manera frecuente. " +
              "En el servicio de mantenimiento general realizamos lo siguiente para que tengas tu instrumento en un buen estado y listo para rockear🎸🤘:";

            for (let i = 0; i < arregloLi.length; i++) {
              let li = document.createElement("LI");
              li.innerHTML = arregloLi[i];
              lista.appendChild(li);
            }

            for (let i = 0; i < arregloPrecios.length; i++) {
              let li = document.createElement("LI");
              li.innerHTML = arregloPrecios[i];
              listaPrecio.appendChild(li);
            }
            popupPrecios.appendChild(listaPrecio);
            popupDescripcionServicio.appendChild(descripcion);
            popupDescripcionServicio.appendChild(lista);
            overlay.style.display = "flex";
          }
          break;

        case "boton-2":
          {
            let listaPrecio = document.createElement("UL");
            listaPrecio.setAttribute("id", "lista-precios");
            let arregloPrecios = [
              "Cualquier guitarra que no sea semihollow: $400",
              "Guitarra semihollow: $600",
            ];
            popupTituloServicio.innerHTML = "Instalación de pastillas";
            img.setAttribute("src", "./img/pastillas2.jpg");
            popupImg.appendChild(img);
            descripcion.innerHTML =
              "Puedes traer a Donnie´s Guitars tus pastillas para que sean instaladas en tu guitarra o bajo";

            for (let i = 0; i < arregloPrecios.length; i++) {
              let li = document.createElement("LI");
              li.innerHTML = arregloPrecios[i];
              listaPrecio.appendChild(li);
            }
            popupDescripcionServicio.appendChild(descripcion);
            popupPrecios.appendChild(listaPrecio);
            overlay.style.display = "flex";
          }
          break;

        case "boton-3":
          {
            let listaPrecio = document.createElement("UL");
            listaPrecio.setAttribute("id", "lista-precios");
            let arregloPrecios = ["El costo por instalación es de: $500"];
            popupTituloServicio.innerHTML = "Apantallado";
            img.setAttribute("src", "./img/apantalladoPopup.jpg");
            popupImg.appendChild(img);
            descripcion.innerHTML =
              "Toda la electrónica de tu guitarra es susceptible a los campos electromagnéticos que se generan con el paso de corriente, estos campos causan ruido eléctrico al momento de tocar. " +
              "El apantallado resuelve este problema generando un efecto llamado 'Jaula de Faraday', y se realiza cubriendo la parte interna de la guitarra y la parte trasera del pickguard con cinta de cobre.";
            for (let i = 0; i < arregloPrecios.length; i++) {
              let li = document.createElement("LI");
              li.innerHTML = arregloPrecios[i];
              listaPrecio.appendChild(li);
            }
            popupDescripcionServicio.appendChild(descripcion);
            popupPrecios.appendChild(listaPrecio);
            overlay.style.display = "flex";
          }
          break;
        case "boton-4":
          {
            let listaPrecio = document.createElement("UL");
            listaPrecio.setAttribute("id", "lista-precios");
            let arregloPrecios = [
              "Costo por instalación de cualquier guitarra que no sea Semihollow: $300",
              "Costo por instalación de guitarra Semihollow: $400",
              "potenciometro Alpha: +$150 c/u",
              "potenciometro CTS: +$250 c/u",
              "potenciometro génerico: +$100 c/u",
              "*Puedes traer tus propios potenciometros para que te los instalemos*",
            ];
            popupTituloServicio.innerHTML = "Cambio de potenciometros";
            img.setAttribute("src", "./img/potenciometrosPopup.jpg");
            popupImg.appendChild(img);
            descripcion.innerHTML =
              "Los potenciometros son elementos que eventualmente se desgastan con el uso. Si tus potenciometros " +
              "generan ruido al girar entonces debes cambiarlos";

            for (let i = 0; i < arregloPrecios.length; i++) {
              let li = document.createElement("LI");
              li.innerHTML = arregloPrecios[i];
              listaPrecio.appendChild(li);
            }
            popupDescripcionServicio.appendChild(descripcion);
            popupPrecios.appendChild(listaPrecio);
            overlay.style.display = "flex";
          }
          break;
        case "boton-5":
          {
            let listaPrecio = document.createElement("UL");
            listaPrecio.setAttribute("id", "lista-precios");
            let arregloPrecios = [
              "Nivelado de trastes: $50 c/u",
              "Cambio de trastes sin binding: $1500",
              "Cambio de trastes con binding: $2500",
              "Reemplazo de trastes despegados en mástil tradicional: $50 c/u",
              "Reemplazo de trastes despegados en mástil Parker: $300 c/u",
            ];
            popupTituloServicio.innerHTML = "Servicio de Trastes";
            img.setAttribute("src", "./img/trastesPopup.JPG");
            popupImg.appendChild(img);
            descripcion.innerHTML =
              "Los trastes al ser elementos que están en constante fricción con las cuerdas eventualmente se desgastarán, de forma que causarán problemas como el trasteo, " +
              "acción alta y dificultad de realizar Bindings. Este desgaste es notorio cuando los trastes presentan abolladuras o están planos, por lo tanto es necesario cambiarlos.";

            for (let i = 0; i < arregloPrecios.length; i++) {
              let li = document.createElement("LI");
              li.innerHTML = arregloPrecios[i];
              listaPrecio.appendChild(li);
            }
            popupDescripcionServicio.appendChild(descripcion);
            popupPrecios.appendChild(listaPrecio);
            overlay.style.display = "flex";
          }
          break;
        case "boton-6":
          {
            let listaPrecio = document.createElement("UL");
            listaPrecio.setAttribute("id", "lista-precios");
            let arregloPrecios = [
              "Tesi switch: $600",
              "All parts: $300",
              "DPDT: $300",
            ];
            popupTituloServicio.innerHTML = "Instalación de killswitch";
            img.setAttribute("src", "./img/killswitchPopup.jpg");
            popupImg.appendChild(img);
            descripcion.innerHTML =
              "Es un interruptor que al ser presionado corta la señal de la guitarra. Permitiéndote crear un sonido de stacatto muy conocido por ser usado por Tom Morello";
            for (let i = 0; i < arregloPrecios.length; i++) {
              let li = document.createElement("LI");
              li.innerHTML = arregloPrecios[i];
              listaPrecio.appendChild(li);
            }
            popupDescripcionServicio.appendChild(descripcion);
            popupPrecios.appendChild(listaPrecio);
            overlay.style.display = "flex";
          }
          break;
        case "boton-7":
          {
            let listaPrecio = document.createElement("UL");
            listaPrecio.setAttribute("id", "lista-precios");
            let arregloPrecios = [
              "Instalación de capacitor Orange Drop: $300 por c/u",
              "Instalación de capacitor Génerico: $200 por c/u",
            ];
            popupTituloServicio.innerHTML = "Instalación de capacitores";
            img.setAttribute("src", "./img/orangeDrop.jpg");
            popupImg.appendChild(img);
            descripcion.innerHTML =
              "Los capacitores son dispositivos que tienen la capacidad de almacenar energía eléctrica que reciben durante " +
              "un periodo de carga, después de este periodo el capacitor se descargará. Este periodo de carga y descarga dependerá de su valor en faradios. Se puede colocar un capacitor en un " +
              "potenciometro de tono y esto modificará la forma en como se escucha tu guitarra, dependiendo de que tono " +
              "deseas se puede instalar un capacitor de un cierto valor";
            for (let i = 0; i < arregloPrecios.length; i++) {
              let li = document.createElement("LI");
              li.innerHTML = arregloPrecios[i];
              listaPrecio.appendChild(li);
            }
            popupDescripcionServicio.appendChild(descripcion);
            popupPrecios.appendChild(listaPrecio);
            overlay.style.display = "flex";
          }
          break;
        case "boton-8":
          {
            let listaPrecio = document.createElement("UL");
            listaPrecio.setAttribute("id", "lista-precios");
            let arregloPrecios = [
              "Génerico: $150",
              "Nu-bone: $350",
              "Tusq Xl precortado: $500",
              "Hueso: $600",
              "Tusq Xl: $650",
            ];
            popupTituloServicio.innerHTML = "Instalación de Nut";
            img.setAttribute("src", "./img/nutPopup.jpg");
            popupImg.appendChild(img);
            descripcion.innerHTML =
              "Si la altura de la cuerdas de tu guitarra es muy alta o muy baja y además desafina, es necesario cambiar el huesillo para evitar estos problemass";
            for (let i = 0; i < arregloPrecios.length; i++) {
              let li = document.createElement("LI");
              li.innerHTML = arregloPrecios[i];
              listaPrecio.appendChild(li);
            }
            popupDescripcionServicio.appendChild(descripcion);
            popupPrecios.appendChild(listaPrecio);
            overlay.style.display = "flex";
          }
          break;
        case "boton-9":
          {
            let listaPrecio = document.createElement("UL");
            listaPrecio.setAttribute("id", "lista-precios");
            let arregloPrecios = ["Solderless: $600", "Tradicional: $700"];
            popupTituloServicio.innerHTML = "Instalación de sistema EMG";
            img.setAttribute("src", "./img/emgGuitar.jpg");
            popupImg.appendChild(img);
            descripcion.innerHTML =
              "El servicio consta de instalar en tu guitarra tu sistema de pastillas EMG";
            for (let i = 0; i < arregloPrecios.length; i++) {
              let li = document.createElement("LI");
              li.innerHTML = arregloPrecios[i];
              listaPrecio.appendChild(li);
            }
            popupDescripcionServicio.appendChild(descripcion);
            popupPrecios.appendChild(listaPrecio);
            overlay.style.display = "flex";
          }
          break;
        case "boton-10":
          {
            let listaPrecio = document.createElement("UL");
            listaPrecio.setAttribute("id", "lista-precios");
            let arregloPrecios = [
              "El costo por instalación es de: $300 (puede ser instalado un push-pull o DPDT)",
              "Alpha: +$250 c/u",
              "CTS: +$450 c/u",
              "Dimarzio: +$400 c/u",
            ];
            popupTituloServicio.innerHTML = "Instalación de split coil";
            img.setAttribute("src", "./img/splitCoilPopup.jpg");
            popupImg.appendChild(img);
            descripcion.innerHTML =
              "A las guitarras que tienen pastillas Humbucker se les puede instalar un split coil, pero ¿qué es un split coil? " +
              "es un boton que se instala normalmente bien disimulado en el control de volumen o tono, que permite elegir entre una Humbucker completa o solo una de sus mitades (single coil). " +
              "Con el split coil lograremos diferentes tonos con cada una. Single coil son tradicionalmente las más adecuadas para sonidos limpios, cuando los queremos brillantes y relucientes. " +
              " Y especialmente si pretendemos echarles algo de chorus encima, ya que ese extra de definición permitirá al efecto trabajar en las frecuencias que mejor escuchamos.";
            for (let i = 0; i < arregloPrecios.length; i++) {
              let li = document.createElement("LI");
              li.innerHTML = arregloPrecios[i];
              listaPrecio.appendChild(li);
            }
            popupDescripcionServicio.appendChild(descripcion);
            popupPrecios.appendChild(listaPrecio);
            overlay.style.display = "flex";
          }
          break;
        case "boton-11":
          {
            let listaPrecio = document.createElement("UL");
            listaPrecio.setAttribute("id", "lista-precios");
            let arregloPrecios = [
              "Stratocaster: $250",
              "Telecaster: $250",
              "Les Paul: $250",
            ];
            popupTituloServicio.innerHTML = "Cambio de switch";
            img.setAttribute("src", "./img/switchPopup.jpg");
            popupImg.appendChild(img);
            descripcion.innerHTML =
              "Si tu switch genera un poco de ruido o al cambiar de posición ya no funciona, entonces es momento de cambiarlo";
            for (let i = 0; i < arregloPrecios.length; i++) {
              let li = document.createElement("LI");
              li.innerHTML = arregloPrecios[i];
              listaPrecio.appendChild(li);
            }
            popupDescripcionServicio.appendChild(descripcion);
            popupPrecios.appendChild(listaPrecio);
            overlay.style.display = "flex";
          }
          break;
        case "boton-12":
          {
            let listaPrecio = document.createElement("UL");
            listaPrecio.setAttribute("id", "lista-precios");
            let arregloPrecios = [
              "El precio varia dependiendo de la guitarra que desees pintar. Puedes cotizarlo " +
                "presionando la burbuja de chat de Facebook Messenger o Whatsapp",
            ];
            popupTituloServicio.innerHTML = "Pintura";
            img.setAttribute("src", "./img/pinturaPopup.jpg");
            popupImg.appendChild(img);
            descripcion.innerHTML =
              "¿Deseas darle una nueva imagen a tu guitarra? En Donnie´s Guitars te la podemos pintar";
            for (let i = 0; i < arregloPrecios.length; i++) {
              let li = document.createElement("LI");
              li.innerHTML = arregloPrecios[i];
              listaPrecio.appendChild(li);
            }
            popupDescripcionServicio.appendChild(descripcion);
            popupPrecios.appendChild(listaPrecio);
            overlay.style.display = "flex";
          }
          break;
        case "boton-13":
          {
            let listaPrecio = document.createElement("UL");
            let lista = document.createElement("UL");
            lista.setAttribute("id", "descripcion-lista");
            listaPrecio.setAttribute("id", "lista-precios");
            let arregloPrecios = [
              "El precio varia dependiendo de la modificación que quieras realizar o la reparación que necesite tu pedal. Puedes cotizarlo " +
                "presionando la burbuja de chat de Facebook Messenger o Whatsapp",
            ];
            let arregloLi = [
              "Modificación de truebypass",
              "Modificación de clipping",
              "Modificación de tono",
              "Instalación de mods Keeley, JHS, etcétera",
            ];
            popupTituloServicio.innerHTML =
              "Modificación y reparación de pedales";
            img.setAttribute("src", "./img/pedalBossOverlay.jpg");
            popupImg.appendChild(img);
            descripcion.innerHTML =
              "En Donnie´s Guitars podemos reparar o hacer las siguientes modificaciones a tu pedal: ";

            for (let i = 0; i < arregloLi.length; i++) {
              let li = document.createElement("LI");
              li.innerHTML = arregloLi[i];
              lista.appendChild(li);
            }

            for (let i = 0; i < arregloPrecios.length; i++) {
              let li = document.createElement("LI");
              li.innerHTML = arregloPrecios[i];
              listaPrecio.appendChild(li);
            }
            popupDescripcionServicio.appendChild(descripcion);
            popupPrecios.appendChild(listaPrecio);
            popupDescripcionServicio.appendChild(lista);
            overlay.style.display = "flex";
          }
          break;
        case "boton-14":
          {
            let listaPrecio = document.createElement("UL");
            listaPrecio.setAttribute("id", "lista-precios");
            let arregloPrecios = [
              "El costo depende de la reparación que necesite tu amplificador, si decides no dejar tu amplificador para que sea reparado " +
                "se cobrará una revisión, en caso contrario no se te cobrará la revisión. Los costos por revisión son los siguientes:",
              "Amplificador de transistores de 30 Watts o menos: $50",
              "Amplificador de transistores de 50 Watts o más: $100",
              "Cualquier amplificador a bulbos: $200",
            ];
            popupTituloServicio.innerHTML = "Reparación de amplificadores";
            img.setAttribute("src", "./img/ampCircuit.jpg");
            popupImg.appendChild(img);
            descripcion.innerHTML =
              "Si tu amplificador tiene alguna falla, en Donnie´s Guitars podemos repararlo";
            for (let i = 0; i < arregloPrecios.length; i++) {
              let li = document.createElement("LI");
              li.innerHTML = arregloPrecios[i];
              listaPrecio.appendChild(li);
            }
            popupDescripcionServicio.appendChild(descripcion);
            popupPrecios.appendChild(listaPrecio);
            overlay.style.display = "flex";
          }
          break;
      }
    }
  });
});
