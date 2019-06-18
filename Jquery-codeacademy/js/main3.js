$(document).ready(() => {
	const $menuButton = $('.menu-button');
	const $navDropdown = $('#nav-dropdown');

	$menuButton.on('click', () => {
		$navDropdown.show();
	})

	$navDropdown.on('mouseleave', () => {
		$navDropdown.hide();
	})

})

//Javascript

//var es la forma de crear variables hasta ES5.
//const es para declarar constantes.
//let es para crear variables que cambian.


let cambia = "noCambio";
console.log(cambia);
cambia = "cambia";
console.log(cambia);

//Funcion básica javascript
function cambiarNombre(nuevoNombre) {
	cambia = nuevoNombre
}

//Desde EC6, las funciones se pueden declarar como arrow functions.
cambiarNombre2 = (nuevoNombre) => {
	cambia = nuevoNombre;
}

//Crear una promesa que la guardamos en una variable
//La promesa tiene un argumento que es una funcion
//La funcion tiene ademas dos parametros
const getUser = new Promise(function (todoBien, todoMal) {
	//llamar a un API que retarda 3 segundos
	setTimeout(function () {
		//todoBien();
		todoBien('Todo ok');
	}, 3000)
	//todoBien("todo bien");
})

const getUserAll = new Promise(function (todoBien, todoMal) {
	//setInterval() se ejecuta cada cierto tiempo.
	//setTimeout() se ejecuta una sola vez luego de un periodo de tiempo.
	setTimeout(function () {
		//todoBien();
		todoMal('Todo mal');
	}, 5000)
	//todoBien("todo bien");
})


//Consumir una promesa
getUser
	.then(function () {
		console.log('Todo ok')
	})
	//Maneja el estado de falla de una promesa
	.catch(function (mensaje) {
		//maneja cuando hay un error en la promesa.
		console.log(mensaje)
	})

//Consume varias promesas a la vez, por eso le mando dos
//puedo cambiar .all por .race (carrera de promesas) entramos al then de la promesa que se reusleva primero
Promise.all([
	getUser,
	getUserAll,
])
.then(function(message){
	console.log(message)
})
.catch(function(message){
	console.log(message)
})

$.ajax("https://randomuser.me/api/", {
	method: "GET", //POST, PUT, DELETE
	success: function(data) {
	  //se ejecuta cuando todo sale bien, cualdo devuelve data
	  //data: lo que devuelve el api
	  console.log(data);
	},
	error: function(error) {
	  //se ejecuta cuando hay un error, por ejemplo si la url esta incorrecta
	  //error: mensaje de error del api
	}
  })


  //Fetch devuelve una promesa. Esta promesa, a su vez, tiene un método llamado json() que regresa otra promesa con los datos en formato JSON.
  fetch("https://randomuser.me/api/")
  .then(function(response) {
	console.log(response);
	//La respuesta tiene el metodo json. Tambien devuelve una promesa
	return response.json()
  })
  .then(function (user){
	console.log('user', user.results[0].name.first)
  })
  .catch(function(data) {
	console.log('Algo fallo');
});

//Funciones asíncronas, es una funcion normal pero poniendo codigo asincrono de forma que sea mas facil de leer de forma sincrona
//async function load() {
	//await: espera las peticiones
	//const response = await fetch("url") 
//}

//Tengo dos opciones para llamar a la funcion load
//1) Declaro la funcion y llamo con un load()
//2) Puedo envolver mi funcion y hacer que se autoejecute:
(async function load() {
	//await: espera las peticiones
	//const response = await fetch("url")

	//fetch es un código asíncrono que devuelve una promesa
	//Si no hubiese hecho una funcion asincrona deberia usar .then, pero ahora lo puedo envolver en uyna constante
	//De ejemplo uso una api publica 
	//con await se pausa la aplicacion hasta que se acabe y se ejecute lo que ponga en las siguientes lineas
	
	//await
	//action
	//terror
	//animation
	async function getData(url){
		const response = await fetch(url);
		const data = await response.json()
		return data;
	}

	const actionList = await fetch('https://yts.lt/api/v2/list_movies.json?genre=action');
	const dramaList = await fetch('https://yts.lt/api/v2/list_movies.json?genre=drama');
	const animationList = await fetch('https://yts.lt/api/v2/list_movies.json?genre=animation');

	//Hago una constante de los datos de esa respuesta
	console.log(actionList, dramaList, animationList)


})()

  

//Indica que es tipo objeto
var $j = 10 //variable de scope global

const x = 78 //variable constante de scope en el bloque actual (es este caso global) que no se puede sobrescribir
//x = 99 // da error

let str = 'hola'; str = 'chau' //variable de scope en el bloque actual (en este caso global) que puede ser reasignada

/////dudas
const myFn = function (a, b, c) {


	let z = 1 //variable local para el primer bloque
	var n = "a" //variable local para todo el bloque, incluido los bloques nesteados

	if (true) {
		let z = 0 //variable local para el segundo bloque, igual nombre diferente variable
		var n = "b" //se sobrescribe la variable anterior
		console.log('first print let: ' + z)
		console.log('first print var: ' + n)
	}

	console.log('second print let: ' + z)
	console.log('second print var: ' + n)

}

myFn()

const myPet = {
	species: "dog",
	name: "bruce",
	age: 0.5,
	color: "black",
	dangerous: false,
	vaccines: {
		parainfluenza: true,
		distemper: true,
		rabies: true
	},
	relatives: ['Maia', 'Lizzy', 'Blaky']
}

//dudas
for (let i = 0; i < 10; i++) {
	console.log(i)
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
$.each(arr, function (index, value) {
	console.log(value);
});

const names = ['Carlos', 'Patricia', 'Marcelo', 'Alejandra', 'Vanesa']

for (let i = 0; i < names.length; i++) {
	console.log(`name ${i + 1}: ${names[i]}`)
}

$.each(names, function (index, value) {
	console.log(`name ${index + 1}: ${names[index]}`)
});



const capitalNames = names.map(function (i) {
	return i.toUpperCase()
})

console.log(capitalNames)

const $prueba = $.map(names, function (value) {
	return value.toUpperCase()
});

console.log($prueba)

let namesStr = ''

names.forEach(i => namesStr += i + " ")

console.log(namesStr)


$.each((names, v) => {
	namesStr += v + " "
});

console.log(namesStr)


const aNames = names.filter(i => {
	if (i[1] == "a") {
		return i
	}
})

console.log(aNames)



const $prueba5 = names.filter((value) => {
	if (value[1] == "a") {
		return value
	}
});
console.log($prueba5);


const art1 = document.getElementById('art1')

const $art1b = $("#art1");

const allP = document.getElementsByTagName('p')

const $allPb = $("p")

const navLinks = document.getElementsByClassName('nav-link')

const $navLinks = $(".nav-link")


//$('#art1').text('hola');

//$art1b.text('Hola');

//$art1b.html('<u>Hola!</u>');

//$art1b.attr('id', 'newArt');

//$art1b.addClass( "article" );

//$art1b.removeClass( "article" );

//$art1b.attr('style', 'color:violet');

//$art1b.removeAttr('style');

//$art1b.prepend('<img id="theImg" src="img/imagen.jpg" />')

//$('<img src="img/imagen.jpg">').appendTo($art1b);

// add
//$art1b.append("<img src='img/imagen.jpg' />")

// remove
//$("#art1 > img").remove()


//click function remove parrafo.
/*
art1.innerText

art1.innerText = ""

art1.innerText = "hola"

art1.innerText = "<b>hola</b>"

art1.innerHTML = "<b>hola</b>"

art1.innerHTML += "<b>hola</b>"
*/

/*
art1.id

art1.id = 'newArt'

art1.classList

art1.classList.add('article')

art1.classList.remove('article')
*/

/*
art1.style

art1.style.background = "blue"
*/

/*
const img = document.createElement('IMG')
img.src = 'logo-mindhub.png'
art1.appendChild(img)
art1.removeChild(img)
*/

/*
function artClick(){
	art1.onclick = () => console.log('ouch')
}


*/

function artClick() {
	art1.onclick = (event) => console.log(event.target.id)
}


artClick()


//Jquery
/*
$(document).ready(() => {

});
*/
//Espera hasta que el navegador termina de procesar el documento HTML antes de activar una función de devolución de llamada

//document es una palabra clave para dirigirnos al documento HTML y crear un objeto jQuery
/*

$(document).ready(() => {
    $('.product-photo').show()
});

//Tenemos muchas imagenes thumbnails con la clase 'product-photo'. Pero no aparecen porque la propiedad display esta seteada en none en el style.css. Entonces las hacemos aparecer
$(document).ready(() => {
    $('#nav-dropdown').hide();
});
//Selecciona al elemento y lo oculta

$navDropdown.on('mouseleave', () => {
    $navDropdown.hide();
  })

  */


