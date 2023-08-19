const baseDeIdeas = {};
const imput = document.createElement("imput");
imput.value = "¿Tienes una idea? Escríbela acá"
baseDeIdeas.append(imput)

document.querySelector("imput")

const selector_interactivo = document.querySelector("#selector_interactivo");


let genero = prompt("Bienvenido al Reproductor Intercativo de la Tía Botas. Escribe tu género favorito: aventuras o risas o fantasias")

if(genero == "aventuras"){
    alert("wow se vienen las aventuras")
}
if(genero == "risas"){
    alert("a reir con las mejores historias")
}
if(genero == "fantasias"){
    alert("imagina las mas locas historias")
}

let personaje = prompt("Escribe tu personaje favorito: unicornio o astronauta o dinosaurio")

if(personaje == "unicornio"){
    alert("muy buena seleción a cabalgar!")
}
if(personaje == "dinosaurio"){
    alert("seguro tienes tu favorito")
}
if(personaje == "astronauta"){
    alert("a disfrutar del cosmos")
}

let lugar = prompt("Escribe tu lugar favorito: bosque o espacio o castillo")

if(lugar == "espacio"){
    alert("3, 2, 1, despegue!")
}
if(lugar == "bosque"){
    alert("hadas o gnomos de seguro")
}
if(lugar == "castillo"){
    alert("las princesas han cambiado")
}

let elemento = prompt("Por último elijamos el elemento para tus historias entre: varita o bicicleta o cohete")

if(elemento == "varita"){
    alert("la magia está por comenzar...")
}
if(elemento == "bicicleta"){
    alert("a rodar las aventuras!!!")
}
if(elemento == "cohete"){
    alert("Huston tenemos un cuento, repito tenemos un cuento")
}