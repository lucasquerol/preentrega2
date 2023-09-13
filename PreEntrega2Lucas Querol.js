class Jugadores{
    constructor(nombre, edad, goles, partidos, club, nacionalidad){
        this.nombre = nombre,
        this.edad = edad,
        this.goles = goles,
        this.partidos = partidos,
        this.club = club,
        this.nacionalidad = nacionalidad
    }
    mostrarDatos(){
        console.log(this.nombre, this.edad, this.goles, this.partidos, this.club, this.nacionalidad)
    }

}

function verDatos(array){
    console.log("--------------------")
    for(elem of array){
        elem.mostrarDatos()
    }
}

const jugador = []


function agregarJugador(){
    let nombreJugador = prompt("Ingrese el nombre del jugador/a")

    while(!isNaN(nombreJugador)){
        nombreJugador = prompt("Debe ingresar un nombre válido")
    }


    let edadJugador = parseInt(prompt(`Ingrese la edad de ${nombreJugador}`))

    while(isNaN(edadJugador)){
        edadJugador = parseInt(prompt(`Debe ingresar la edad de ${nombreJugador} en números`))
    }

    let golesJugador = parseInt(prompt(`Ingrese la cantidad de goles de ${nombreJugador}`))

    while(isNaN(golesJugador)){
        golesJugador = parseInt(prompt(`Debe ingresar la cantidad de goles de ${nombreJugador} en números`))
    }

    let partidosJugador = parseInt(prompt(`Ingrese la cantidad de partidos de ${nombreJugador}`))

    while(isNaN(partidosJugador)){
        partidosJugador = parseInt(prompt(`Debe ingresar la cantidad de partidos de ${nombreJugador} en números`))
    }

    let clubJugador = prompt(`Ingrese el club de ${nombreJugador}`)

    while(!isNaN(clubJugador)){
        clubJugador = prompt(`Debe ingresar el nombre del club de ${nombreJugador}`)
    }

    let nacionalidadJugador = prompt(`Ingrese la nacionalidad de ${nombreJugador}`)

    while(!isNaN(nacionalidadJugador)){
        nacionalidadJugador = prompt(`Debe ingresar la nacionalidad de ${nombreJugador}`)
    }
    
    const ingresarJugador = new Jugadores (nombreJugador, edadJugador, golesJugador, partidosJugador , clubJugador, nacionalidadJugador)
    jugador.push(ingresarJugador)

    ingresarJugador.mostrarDatos()
}

function promedio(){

    let ingresarNombre = prompt("Ingrese el nombre del jugador/a")

    let buscar = jugador.find( (element) => element.nombre.toLowerCase() == ingresarNombre.toLowerCase())

    if (buscar != undefined){
    
    let golesIngresados = buscar.goles

    let partidosIngresados = buscar.partidos

    let promedioTotal = (golesIngresados/partidosIngresados).toFixed(2)

    return console.log((`El promedio de gol de ${ingresarNombre} es de ${promedioTotal} por partido`))
    }

    else{
        console.log("No se ha encontrado el jugador que busca")
    }

}

function ordenarMasPartidos(array){
    let arrayCopia = array.concat()
    arrayCopia.sort(
        ( (a, b) => b.partidos - a.partidos)
    )
    return verDatos(arrayCopia)
}

function ordenarMenosPartidos(array){
    let arrayCopia = array.concat()
    arrayCopia.sort(
        ( (a, b) => a.partidos - b.partidos)
    )
    return verDatos(arrayCopia)
}

function ordenarMasGoles(array){
    let arrayCopia = array.concat()
    arrayCopia.sort(
        ( (a, b) => b.goles - a.goles)
    )
    return verDatos(arrayCopia)
}

function ordenarMenosGoles(array){
    let arrayCopia = array.concat()
    arrayCopia.sort(
        ( (a, b) => a.goles - b.goles)
    )
    return verDatos(arrayCopia)
}

function filtroJugadoresClub(array){
    let preguntarClub = prompt("Ingrese el club")
    const encontrarJugador = array.filter( (elem) => elem.club.toLowerCase() == preguntarClub.toLowerCase())
    
    if (encontrarJugador.length > 0){
        verDatos(encontrarJugador)
    }
    else{
        console.log("No se ha encontrado el jugador que busca")
    }
}

function filtroJugadoresEdad(array){
    let preguntarNumero = parseInt(prompt("Ingrese 1 para filtrar a los jugadores mayores a la edad a ingresar" +
    "\n" + "Ingrese 2 para filtrar a los jugadores menores a la edad a ingresar"))

    if(preguntarNumero == 1){

    let preguntarEdad = parseInt(prompt("Ingrese la edad"))

    const encontrarJugador = array.filter( (elem) => elem.edad > preguntarEdad)
    
    if (encontrarJugador.length > 0){
        verDatos(encontrarJugador)
    }
    else{
        console.log("No se ha encontrado el jugador que busca")
    }
    }

    else if(preguntarNumero == 2){

        let preguntarEdad = parseInt(prompt("Ingrese la edad"))

        const encontrarJugador = array.filter( (elem) => elem.edad < preguntarEdad)
    
        if (encontrarJugador.length > 0){
            verDatos(encontrarJugador)
        }
        else{
            console.log("No se ha encontrado el jugador que busca")
        }
    }

    else{
        console.log("Debe ingresar un valor válido")
    }

}

function filtroNacionalidad(array){
    let preguntarNacionalidad = prompt("Ingrese la nacionalidad")
    const encontrarJugador = array.filter( (elem) => elem.nacionalidad.toLowerCase() == preguntarNacionalidad.toLowerCase())
    
    if (encontrarJugador.length > 0){
        verDatos(encontrarJugador)
    }
    else{
        console.log("No se ha encontrado el jugador que busca")
    }
}

function menu(){
    let ingresarMenu
    do{
        ingresarMenu = parseInt(prompt("Ingrese:" + "\n" + 
        "1 - para agregar un jugador" + "\n" + 
        "2 - para sacar el promedio de gol de un jugador" +"\n" + 
        "3 - para ordenar de más partidos a menos partidos jugados" + "\n" +
        "4 - para ordenar de menos partidos a más partidos jugados" + "\n" + 
        "5 - para ordenar de más goles menos goles convertidos" + "\n" + 
        "6 - para ordenar de menos goles a más goles convertidos" + "\n" +
        "7 - para filtrar por club" + "\n" + 
        "8 - para filtrar por edad" + "\n" +
        "9 - para filtrar por nacionalidad" + "\n" + "0 - si desea salir del menú"))
        switch(ingresarMenu){
            case 1: 
                agregarJugador()
            break
            case 2:
                promedio()
            break
            case 3:
                ordenarMasPartidos(jugador)
            break
            case 4:
                ordenarMenosPartidos(jugador)
            break
            case 5:
                ordenarMasGoles(jugador)
            break
            case 6:
                ordenarMenosGoles(jugador)
            break
            case 7:
                filtroJugadoresClub(jugador)
            break
            case 8:
                filtroJugadoresEdad(jugador)
            break
            case 9:
                filtroNacionalidad(jugador)
            break
            case 0:

            break
            default: 
                alert("Valor invalido, por favor vuelva a ingresar un número")
            break
        }
    }while(ingresarMenu != 0){
        alert("Gracias por usar nuestra aplicación")
    }
}
menu()