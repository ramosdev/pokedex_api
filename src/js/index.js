const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemon(pokemon) {
    return `
                <div class="card type-grass">
                    <div class="description">
                       <div class="name"><h2>${pokemon.name}</h2> </div>
                        <span class="type grass">Grass</span>
                        <span class="type grass">poison</span> 
                    </div>
                    <div class="image">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                    </div>
                </div>
            `
}
const pokemonCard = document.getElementById('cards')

  
    pokeApi.getPokemons().then((pokemons = []) => {
       const novoCard = pokemons.map(convertPokemon).join('')
        pokemonCard.innerHTML = novoCard
    })


