var formulario = document.querySelector("form"); // no es un Id es un elemento 
var nom = formulario.elements[0]; // remombrar las variales globales a 3 digitos
let eda = formulario.elements[1]; // edad tiene que ser un Constante let ya que la edad es un dato que puede cambiar según el invitade /renombrar a 3 digitos para no confundir al evento e de la linea 7
var nac = formulario.elements[2];
var lista = document.getElementById("lista-de-invitados");

formulario.onsubmit = function(e) {
  e.preventDefault();
  
  var nombre = nom.value;
  var edad = eda.value;
  var i = nac.selectedIndex;
  var nacionalidad = nac.options[i].value;

  //console.log(nombre, edad)
  //console.log(nacionalidad)
  //validaciones
  if (nombre.length === 0) {
    nom.classList.add("error")
    nom.classList.remove("correct")
    console.log("error nombre no valido");

  }  
  if (edad < 18 || edad > 120) {
    eda.classList.add("error")
    edad.classList.remove("correct")
    console.log("Digita edad valida")
  } 
  if (nombre.length > 0 && (edad > 18 && edad < 120) ) {
  nom.classList.remove("error");
  eda.classList.remove("error");
  nom.value = '';
  edad.value = '';

  agregarInvitado(nombre, edad, nacionalidad)
  }
}


//Validaciones se ajustarón para no repetir valores dentro de las funciones 


function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  } 
  else if (nacionalidad === "eu"){
    nacionalidad ="Estadounidence"
  } 

  var elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista") // add
  lista.appendChild(elementoLista)

  // son propiedades de la funcion agregar invitado

  crearElemento("Nombre", nombre, elementoLista)
  crearElemento("Edad", edad, elementoLista)
  crearElemento("Nacionalidad", nacionalidad, elementoLista)

  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
  // this.parentNode.style.display = 'none';
  botonBorrar.parentNode.remove()
    }
  }

// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);

// var spanNombre = document.createElement("span")
// var inputNombre = document.createElement("input")
// var espacio = document.createElement("br")
// spanNombre.textContent = "Nombre: "
// inputNombre.value = nombre 
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor, elementoLista) {
  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = descripcion + ": "
  inputNombre.value = valor 
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)
  }



// var botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// var corteLinea = document.createElement("br")