fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data =>console.log(data))
    .catch(error => console.error(error))



    // fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
    // .then(response => {

    //     if(!response.ok){
    //         throw new Error("Could Not Fetch Resource")
    //     }
    //     return response.json();
    // })
    // .then(data =>console.log(data.id))
    // .catch(error => console.error(error))



fetchData();

async function fetchData(){

    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error ("Could not fetch pokemon");
        }
        const data = await response.json();
        // console.log(data); not needed anymore
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}