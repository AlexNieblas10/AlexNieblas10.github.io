let API = 'https://pokeapi.co/api/v2'
let APICambiante = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
let n = 20
const containerCard = document.getElementById('carta-pokemon') 
const boton = document.querySelector('#pagina-siguiente') 

async function fetchData(urlApi){
    const getData = await fetch(urlApi)
    const data = await getData.json()
    return data;
}
async function getPokemonUrl(urlApi, indice){
    const pokemon = await fetchData(`${urlApi}/pokemon`)
    const urlPokemon = pokemon.results[indice].url
    return urlPokemon;
}
async function getPokemonImg(urlApi, indice){
    const urlPokemon = await getPokemonUrl(urlApi, indice)
    const detailsPokemon = await fetchData(urlPokemon)
    const imagenPokemon = detailsPokemon.sprites.front_default
    return imagenPokemon;
}
async function getPokemonType(urlApi, indice){
    const urlPokemon = await getPokemonUrl(urlApi, indice)
    const detailsPokemon = await fetchData(urlPokemon)
    const typesPokemon = detailsPokemon.types
    if (typesPokemon.length > 1) {
        for (let i = 0; i < typesPokemon.length; i++) {
            return typesPokemon[i].type.name 
        }
    }
    else return typesPokemon[0].type.name;
}
async function getPokemonName(urlApi, indice){
    const urlPokemon = await getPokemonUrl(urlApi, indice)
    const detailsPokemon = await fetchData(urlPokemon)
    const namePokemon = detailsPokemon.name
    return namePokemon
}
async function getPokemonHP(urlApi, indice){
    const urlPokemon = await getPokemonUrl(urlApi, indice)
    const detailsPokemon = await fetchData(urlPokemon)
    const hp = detailsPokemon.stats[0].base_stat
    return hp;
}
async function getPokemonATK(urlApi, indice){
    const urlPokemon = await getPokemonUrl(urlApi, indice)
    const detailsPokemon = await fetchData(urlPokemon)
    const atk = detailsPokemon.stats[1].base_stat
    return atk;
}
async function getPokemonDefensa(urlApi, indice){
    const urlPokemon = await getPokemonUrl(urlApi, indice)
    const detailsPokemon = await fetchData(urlPokemon)
    const defensa = detailsPokemon.stats[2].base_stat
    return defensa;
}
async function getPokemonVelocidad(urlApi, indice){
    const urlPokemon = await getPokemonUrl(urlApi, indice)
    const detailsPokemon = await fetchData(urlPokemon)
    const velocidad = detailsPokemon.stats[5].base_stat
    return velocidad;
}


(async () => {
    try{

    const pokemons = await fetchData(`${API}/pokemon/`)
    for (let i = 0; i < pokemons.results.length; i++) {
        const imagen = await getPokemonImg(API, i)
        const name = await getPokemonName(API, i)
        const hp = await getPokemonHP(API, i)
        const atk = await getPokemonATK(API, i)
        const defensa = await getPokemonDefensa(API, i)
        const velocidad = await getPokemonVelocidad(API, i)
        const type  = await getPokemonType(API. i)

        const containerPrincipal = document.createElement('div')
        containerPrincipal.classList.add('pokemon')

        const contenedorImg = document.createElement('div')
        contenedorImg.classList.add('contenedor-imagen')

        const typesPokemon = document.createElement('h3')
        typesPokemon.textContent = 'Type'
        const imagenPokemon = document.createElement('img')
        imagenPokemon.setAttribute('src', imagen)

        const informacionPokemon = document.createElement('div')
        informacionPokemon.classList.add('informacion-pokemon')

        const informacion = document.createElement('div')
        informacion.classList.add('informacion')

        const informacion2 = document.createElement('div')
        informacion2.classList.add('informacion')

        const informacion3 = document.createElement('div')
        informacion3.classList.add('informacion')

        const informacion4 = document.createElement('div')
        informacion4.classList.add('informacion')

        const informacion5 = document.createElement('div')
        informacion5.classList.add('informacion')

        const caracteristica = document.createElement('h2')
        caracteristica.textContent = 'Name'
        const respuesta = document.createElement('h2')
        respuesta.classList.add('respuesta-api')
        respuesta.textContent = name

        const caracteristica2 = document.createElement('h2')
        caracteristica2.textContent = 'Vida'
        const respuesta2 = document.createElement('h2')
        respuesta2.classList.add('respuesta-api')
        respuesta2.textContent = hp
        

        const caracteristica3 = document.createElement('h2')
        caracteristica3.textContent = 'Ataque'
        const respuesta3 = document.createElement('h2')
        respuesta3.classList.add('respuesta-api')
        respuesta3.textContent = atk

        const caracteristica4 = document.createElement('h2')
        caracteristica4.textContent = 'Defensa'
        const respuesta4 = document.createElement('h2')
        respuesta4.classList.add('respuesta-api')
        respuesta4.textContent = defensa

        const caracteristica5 = document.createElement('h2')
        caracteristica5.textContent = 'Velocidad'
        const respuesta5 = document.createElement('h2')
        respuesta5.classList.add('respuesta-api')
        respuesta5.textContent = velocidad

        contenedorImg.append(imagenPokemon, typesPokemon)
        informacion.append(caracteristica, respuesta)
        informacion2.append(caracteristica2, respuesta2)
        informacion3.append(caracteristica3, respuesta3)
        informacion4.append(caracteristica4, respuesta4)
        informacion5.append(caracteristica5, respuesta5)
        informacionPokemon.append(informacion, informacion2, informacion3, informacion4, informacion5)
        containerPrincipal.append(contenedorImg, informacionPokemon)
        containerCard.append(containerPrincipal)
    } 
    }
    catch(err){
        console.log(err);
    }
    
})();


boton.addEventListener('click',async function nuevaApi(){
try{
    n += 20
    const pokemons = await fetchData(`${APICambiante}/pokemon/`)
    for (let i = 0; i < pokemons.results.length; i++) {
        const imagen = await getPokemonImg(APICambiante, i)
        const name = await getPokemonName(APICambiante, i)
        const hp = await getPokemonHP(APICambiante, i)
        const atk = await getPokemonATK(APICambiante, i)
        const defensa = await getPokemonDefensa(APICambiante, i)
        const velocidad = await getPokemonVelocidad(APICambiante, i)

        const containerPrincipal = document.createElement('div')
        containerPrincipal.classList.add('pokemon')

        const contenedorImg = document.createElement('div')
        contenedorImg.classList.add('contenedor-imagen')

        const typesPokemon = document.createElement('h3')
        typesPokemon.textContent = 'Type'

        const imagenPokemon = document.createElement('img')
        imagenPokemon.setAttribute('src', imagen)

        const informacionPokemon = document.createElement('div')
        informacionPokemon.classList.add('informacion-pokemon')

        const informacion = document.createElement('div')
        informacion.classList.add('informacion')

        const informacion2 = document.createElement('div')
        informacion2.classList.add('informacion')

        const informacion3 = document.createElement('div')
        informacion3.classList.add('informacion')

        const informacion4 = document.createElement('div')
        informacion4.classList.add('informacion')

        const informacion5 = document.createElement('div')
        informacion5.classList.add('informacion')

        const caracteristica = document.createElement('h2')
        caracteristica.textContent = 'Name'
        const respuesta = document.createElement('h2')
        respuesta.classList.add('respuesta-api')
        respuesta.textContent = name

        const caracteristica2 = document.createElement('h2')
        caracteristica2.textContent = 'Vida'
        const respuesta2 = document.createElement('h2')
        respuesta2.classList.add('respuesta-api')
        respuesta2.textContent = hp
        

        const caracteristica3 = document.createElement('h2')
        caracteristica3.textContent = 'Ataque'
        const respuesta3 = document.createElement('h2')
        respuesta3.classList.add('respuesta-api')
        respuesta3.textContent = atk

        const caracteristica4 = document.createElement('h2')
        caracteristica4.textContent = 'Defensa'
        const respuesta4 = document.createElement('h2')
        respuesta4.classList.add('respuesta-api')
        respuesta4.textContent = defensa

        const caracteristica5 = document.createElement('h2')
        caracteristica5.textContent = 'Velocidad'
        const respuesta5 = document.createElement('h2')
        respuesta5.classList.add('respuesta-api')
        respuesta5.textContent = velocidad

        contenedorImg.append(imagenPokemon, typesPokemon)
        informacion.append(caracteristica, respuesta)
        informacion2.append(caracteristica2, respuesta2)
        informacion3.append(caracteristica3, respuesta3)
        informacion4.append(caracteristica4, respuesta4)
        informacion5.append(caracteristica5, respuesta5)
        informacionPokemon.append(informacion, informacion2, informacion3, informacion4, informacion5)
        containerPrincipal.append(contenedorImg, informacionPokemon)
        containerCard.append(containerPrincipal)
    } 
    }
    catch(err){
        console.log(err);
    }
    finally{
        APICambiante = `https://pokeapi.co/api/v2/pokemon/?offset=${n}&limit=20`
    }
})