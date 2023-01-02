let API = 'https://pokeapi.co/api/v2'
let APICambiante = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
let n = 20
const containerCard = document.getElementById('carta-pokemon') 
const boton = document.querySelector('#pagina-siguiente') 

const inputBuscarPokemon = document.getElementById('busqueda')
const botonBuscarPokemon = document.querySelector('.boton-enviar')



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
async function getPokemonId(urlApi, indice){
    const urlPokemon = await getPokemonUrl(urlApi, indice)
    const detailsPokemon = await fetchData(urlPokemon)
    const idDelPokemon = detailsPokemon.id
    return idDelPokemon;
}
async function getPokemonImg(urlApi, indice){
    const urlPokemon = await getPokemonUrl(urlApi, indice)
    const detailsPokemon = await fetchData(urlPokemon)
    const imagenPokemon = detailsPokemon.sprites.front_default
    return imagenPokemon;
}
async function getPokemonImgShainy(urlApi, indice){
    const urlPokemon = await getPokemonUrl(urlApi, indice)
    const detailsPokemon = await fetchData(urlPokemon)
    const imagenPokemon = detailsPokemon.sprites.front_shiny
    return imagenPokemon
}
async function getPokemonType(urlApi, indice){
    const urlPokemon = await getPokemonUrl(urlApi, indice)
    const detailsPokemon = await fetchData(urlPokemon) 
    const typesPokemon = detailsPokemon.types
    const types = []
    for (let i = 0; i < typesPokemon.length; i++) {
        types.push(typesPokemon[i].type.name)
    }
    return types;
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
        const imagenPokemon = await getPokemonImg(API, i)
        const namePokemon = await getPokemonName(API, i)
        const hpPokemon = await getPokemonHP(API, i)
        const atkPokemon = await getPokemonATK(API, i)
        const defensaPokemon = await getPokemonDefensa(API, i)
        const velocidadPokemon = await getPokemonVelocidad(API, i)
        const typePokemon  = await getPokemonType(API, i) 
        const idDelPokemon = await getPokemonId(API, i)
        const imgShainy = await getPokemonImgShainy(API, i)


        const pokemonAndType = document.createElement('div')
        pokemonAndType.classList.add('pokemon')
        pokemonAndType.classList.add(typePokemon[0])
        
        const id = document.createElement('h3')
        id.classList.add('id-pokemon')
        const idNumToStr = idDelPokemon.toString()
        const idMod = `#${idNumToStr.padStart(3, '0')}`
        id.textContent = idMod
        


        const name = document.createElement('h2')
        name.classList.add('name')
        name.textContent = namePokemon.toUpperCase()
        
        const imgContainer = document.createElement('div')
        imgContainer.classList.add('contenedor-imagen')
        
        const img = document.createElement('img')
        img.classList.add('normal')
        img.setAttribute('src', imagenPokemon)
        
        const typeContainer = document.createElement('div')
        typeContainer.classList.add('contenedor-type')
        
        const type = document.createElement('h1') 
        type.textContent = 'Type:'
        const type1 = document.createElement('h2')
        type1.textContent = typePokemon[0]
        const type2 = document.createElement('h2')
        type2.textContent = typePokemon[1]

        const shiny = document.createElement('button')
        shiny.classList.add('pokemon-shiny')
        shiny.textContent = 'Shiny'

        const pokemonInformation = document.createElement('div')
        pokemonInformation.classList.add('informacion-pokemon')
        
        const information1 = document.createElement('div') 
        information1.classList.add('informacion')
        const vida = document.createElement('h2')
        vida.textContent = 'Vida'
        const respuesta1 = document.createElement('h2')
        respuesta1.classList.add("respuesta-api")
        respuesta1.textContent = hpPokemon
        
        const information2 = document.createElement('div')
        information2.classList.add('informacion')
        const ataque = document.createElement('h2')
        ataque.textContent = 'Ataque'
        const respuesta2 = document.createElement('h2')
        respuesta2.classList.add("respuesta-api")
        respuesta2.textContent = atkPokemon
        
        const information3 = document.createElement('div')
        information3.classList.add('informacion')
        const defensa = document.createElement('h2')
        defensa.textContent = 'Defensa'
        const respuesta3 = document.createElement('h2')
        respuesta3.classList.add("respuesta-api")
        respuesta3.textContent = defensaPokemon
        
        const information4 = document.createElement('div')
        information4.classList.add('informacion')
        const velocidad = document.createElement('h2')
        velocidad.textContent = 'Velocidad'
        const respuesta4 = document.createElement('h2')
        respuesta4.classList.add("respuesta-api")
        respuesta4.textContent = velocidadPokemon
        
        typeContainer.append(type, type1, type2, shiny)
        imgContainer.append(img, typeContainer)
        information1.append(vida, respuesta1)
        information2.append(ataque, respuesta2)
        information3.append(defensa, respuesta3)
        information4.append(velocidad, respuesta4)
        pokemonInformation.append(information1, information2, information3, information4)
        pokemonAndType.append(id, name, imgContainer, pokemonInformation)
        containerCard.append(pokemonAndType)

        function cambiarImagen() {
            if (img.classList[0] == 'normal') {
                img.setAttribute('src', imgShainy)
                buttonShiny.textContent = 'Normal'
                img.classList.toggle('normal')
            }
            else{
                img.setAttribute('src', imagenPokemon)
                buttonShiny.textContent = 'Shiny'
                img.classList.toggle('normal')
            }
            
        }
        const buttonShiny = shiny
        buttonShiny.addEventListener('click', cambiarImagen)
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
            const imagenPokemon = await getPokemonImg(APICambiante, i)
            const namePokemon = await getPokemonName(APICambiante, i)
            const hpPokemon = await getPokemonHP(APICambiante, i)
            const atkPokemon = await getPokemonATK(APICambiante, i)
            const defensaPokemon = await getPokemonDefensa(APICambiante, i)
            const velocidadPokemon = await getPokemonVelocidad(APICambiante, i)
            const typePokemon  = await getPokemonType(APICambiante, i) 
            const idDelPokemon = await getPokemonId(APICambiante, i)
            const imgShainy = await getPokemonImgShainy(APICambiante, i)
    
            const pokemonAndType = document.createElement('div')
            pokemonAndType.classList.add('pokemon')
            pokemonAndType.classList.add(typePokemon[0])
            
            const id = document.createElement('h3')
            id.classList.add('id-pokemon')
            const idNumToStr = idDelPokemon.toString()
            const idMod = `#${idNumToStr.padStart(3, '0')}`
            id.textContent = idMod

            const name = document.createElement('h2')
            name.classList.add('name')
            name.textContent = namePokemon.toUpperCase()
            
            const imgContainer = document.createElement('div')
            imgContainer.classList.add('contenedor-imagen')
            
            const img = document.createElement('img')
            img.setAttribute('src', imagenPokemon)
            img.classList.add('normal')
            
            const typeContainer = document.createElement('div')
            typeContainer.classList.add('contenedor-type')
            
            const type = document.createElement('h1') 
            type.textContent = 'Type:'
            const type1 = document.createElement('h2')
            type1.textContent = typePokemon[0]
            const type2 = document.createElement('h2')
            type2.textContent = typePokemon[1]
            const shiny = document.createElement('button')
            shiny.classList.add('pokemon-shiny')
            shiny.textContent = 'Shiny'
            
            const pokemonInformation = document.createElement('div')
            pokemonInformation.classList.add('informacion-pokemon')
            
            const information1 = document.createElement('div') 
            information1.classList.add('informacion')
            const vida = document.createElement('h2')
            vida.textContent = 'Vida'
            const respuesta1 = document.createElement('h2')
            respuesta1.classList.add("respuesta-api")
            respuesta1.textContent = hpPokemon
            
            const information2 = document.createElement('div')
            information2.classList.add('informacion')
            const ataque = document.createElement('h2')
            ataque.textContent = 'Ataque'
            const respuesta2 = document.createElement('h2')
            respuesta2.classList.add("respuesta-api")
            respuesta2.textContent = atkPokemon
            
            const information3 = document.createElement('div')
            information3.classList.add('informacion')
            const defensa = document.createElement('h2')
            defensa.textContent = 'Defensa'
            const respuesta3 = document.createElement('h2')
            respuesta3.classList.add("respuesta-api")
            respuesta3.textContent = defensaPokemon
            
            const information4 = document.createElement('div')
            information4.classList.add('informacion')
            const velocidad = document.createElement('h2')
            velocidad.textContent = 'Velocidad'
            const respuesta4 = document.createElement('h2')
            respuesta4.classList.add("respuesta-api")
            respuesta4.textContent = velocidadPokemon
            
            typeContainer.append(type, type1, type2, shiny)
            imgContainer.append(img, typeContainer)
            information1.append(vida, respuesta1)
            information2.append(ataque, respuesta2)
            information3.append(defensa, respuesta3)
            information4.append(velocidad, respuesta4)
            pokemonInformation.append(information1, information2, information3, information4)
            pokemonAndType.append(id, name, imgContainer, pokemonInformation)
            containerCard.append(pokemonAndType)

            function cambiarImagen() {
                if (img.classList[0] == 'normal') {
                    img.setAttribute('src', imgShainy)
                    buttonShiny.textContent = 'Normal'
                    img.classList.toggle('normal')
                }
                else{
                    img.setAttribute('src', imagenPokemon)
                    buttonShiny.textContent = 'Shiny'
                    img.classList.toggle('normal')
                }
                
            }
            const buttonShiny = shiny
            buttonShiny.addEventListener('click', cambiarImagen)
        }  
    }
    catch(err){
        console.log(err);
    }
    finally{
        APICambiante = `https://pokeapi.co/api/v2/pokemon/?offset=${n}&limit=20`
    }
})

function saludar() {
    console.log('ola');
}
botonBuscarPokemon.addEventListener('click', saludar)



