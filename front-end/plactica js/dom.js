// // agarra el primer elemento que encuentre
// const titulo = document.querySelector('h2');
// console.log(titulo) 

// const clasP = document.querySelector('.lorem');
// console.log(clasP) 

// const ideH = document.querySelector('#tituloH5');
// console.log(ideH) 

// const esco = document.querySelector('section p .busca ')
// console.log(esco)

// const busco=document.querySelector('div h6')
// console.log(busco)

// let encuento=document.querySelector('section div a')
// console.log(encuento)



// const otro=document.querySelectorAll('#tituloH4, #tituloH3')
// console.log(otro)

// const lista=document.querySelectorAll('li')
// console.log(lista)






// le cambie el contenido al id seleccionado
// let cambio = document.getElementById('solo')
// console.log(cambio)
// // // console.dir() sirve para vel el id con asterisco y todas sus propiedades
// console.dir(cambio)
// cambio.textContent="hola mundo, le cambie el contenido usando javascript DOM"







// let classP = document.getElementsByClassName('lista')
// console.log(classP)
// console.dir(classP)



// let colecc=document.getElementsByTagName('li')
// console.log(colecc)

// muesta detalladamente el valor ,parece un array pero es una coleccion
// console.log(colecc[1])
// lo paso a un array ,creo una copia
// let miArray=[...colecc];
// console.log(miArray)

// for( let li of colecc){console.log(li)}
// recorrer o mostrar el contenido de una coleccion 
// for( let li of colecc){console.log(li.textContent)}
// esto es valido tanto para una coleccion y un array








function agregar(){
    let newDiv=document.createElement('h1')
    newDiv.innerText='hola esto es de javascript'
    document.body.appendChild(newDiv)
}
agregar()



// elimina elemento
const eliminar=document.getElementsByTagName('p')[1];
console.log(eliminar)
eliminar.remove();







// innerHTML e innerText
// function getHTML(){
//     console.log(document.getElementById('demo').innerHTML);
// }
// function getInnerText(){
//     console.log(document.getElementById('demo').innerText);
// }
// getHTML()

// getInnerText()

// le cambio el contenido
// let demo=document.querySelector('#demo');
// console.log(demo)
// demo.innerText="escrito con INNERtext en javascript"
// demo.innerHTML="escrito con  innerHTML con js"






// atributos de los elementos
// const liLink = document.getElementsByTagName('a')[0]
// alert(liLink.href)

// const enlace=document.querySelector('a')
// alert(enlace.href)









// estilos de los elementos
const color = document.getElementById('tituloH2')
color.style.backgroundColor='orange'
color.style.color="white"




// eventos
const boton = document.getElementById('boton')
boton.addEventListener('click',function(){
    alert('hola mundo')
},false)



const cambiaDcolor = document.getElementById('tituloH3')
console.log(cambiaDcolor)

cambiaDcolor.addEventListener('click',function(){
    cambiaDcolor.style.color="red"
})










//Metodos de array: map,filter y find
// MAP
// const numeros=[1,3,8,20];
// const dobles = numeros.map(num=>num*2)

// console.log(dobles);
// // FILTER
// const numerosDel1a10=[1,2,3,4,5,6,7,8,9,10];
// const par=numerosDel1a10.filter(num=>num % 2 == 0);
// console.log(par)

// // FIND
// const numerosFind=[3,5,10,15,28,76,149];
// const numFind = numerosFind.find(num => num > 12);
// console.log(numFind)







// templane strings ( Interpolacion de strings ) ${ }
// let edad1=18;
// let edad2=32;
// let mensaje1 =`La cuota para personas de ${edad1} es de 
// ${edad1 >=21 ? 500 : 350}`;

// let mensaje2 =`La cuota para personas de ${edad2} es de ${edad2 >= 21 ? 500 : 350}`;
// alert(mensaje2)








// JSON
// const persona ={
//     nombre:"valentina",
//     edad:28,
//     esEstudiante:true,
//     hobbies:[
//         "futbol",
//         "programacion",
//         "cine",
//     ]
// };
// console.log(persona.nombre);
// console.log(persona.hobbies.length);




// Destructuring y operadoes spread
// const colores =["#ff0000", "#00ff00", "#0000ff"];
// Arrays
// const [rojo, verde, azul] = colores;
// console.log(colores)








// Objetos  Destructuring y operador spread
// const pelota={
//     posicion:{
//         x: 150,
//         y: 150
//     },
//     coloresDeRelleno:"tomato",
//     radio:25,
// }
// const {posicion,radio,coloresDeRelleno} = pelota
// console.log(pelota)




// Destructuring y operador spread
// arrays
// const vocales=["a","e","i"];
// const vocalesCompletas=[...vocales,"o","u"];
// console.log(vocales);
// console.log(vocalesCompletas);








// Objetos
// const usado={
//     marca: "chevrolet",
//     modelo:"Corsa",
//     anio:2012
// };

// const nuevo={
//     ...usado,
//     anio:2020
// };

// console.log(nuevo.marca);
// console.log(nuevo.anio);