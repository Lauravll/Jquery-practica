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

var j = 10 //variable de scope global

const x = 78 //variable constante de scope en el bloque actual (es este caso global) que no se puede sobrescribir
//x = 99 // da error

let str = 'hola'; str = 'chau' //variable de scope en el bloque actual (en este caso global) que puede ser reasignada




const myFn = function(a, b, c){

	let z = 1 //variable local para el primer bloque
	var n = "a" //variable local para todo el bloque, incluido los bloques nesteados

	if(true){
		let z = 0 //variable local para el segundo bloque, igual nombre diferente variable
		var n = "b" //se sobrescribe la variable anterior
		console.log('first print: ' + z) 
		console.log('first print: ' + n) 
	}

	console.log('second print: ' + z)
	console.log('first print: ' + n)

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


for(let i = 0; i < 10; i++){
	console.log(i)
}

const names = ['Carlos', 'Patricia', 'Marcelo', 'Alejandra', 'Vanesa']

for(let i = 0; i < names.length; i++){
	console.log(`name ${i + 1}: ${names[i]}`) 
}

const capitalNames = names.map(function(i){
	return i.toUpperCase()
})

console.log(capitalNames)

let namesStr = ''

names.forEach(i => namesStr += i + " ")

console.log(namesStr)

const aNames = names.filter(i => {
	if(i[1] == "a"){
		return i
	}
})

console.log(aNames)



const art1 = document.getElementById('art1')

const allP = document.getElementsByTagName('p')

const navLinks = document.getElementsByClassName('nav-link')

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

function artClick(){
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

  
