const { Router } = require("express");
const {getPokemon} = require("../utils/pokeAPI")

const collection = Router();
const myCollection = []

collection.get("/", (req, res) => {
  res.send(myCollection);

});

collection.post("/catch/:name", async (req, res, next)=> {
  const {name} = req.params;
  try {
    const pokemon = await getPokemon(name);
    const isPokemonInCollection = myCollection.some(catchedPokemon => catchedPokemon.id === pokemon.id);
    if (!isPokemonInCollection) myCollection.push(pokemon);
    res.send({success: true});
  }
  catch (error) {
    next(error);
  }
})

collection.delete("/release/:id", (req, res)=>{
  const name = req.params.id;
  const id = Number(name);
  const index = myCollection.findIndex((pokemon)=>{
    return pokemon.id === id || pokemon.name === name;
  })
  if(index === -1){
    console.log(myCollection.map(pokemon => pokemon.name));
    throw "the pokemon isn't in your collection"
  }
  myCollection.splice(index, 1);
  res.status(204).send({success: true});

})

module.exports = collection;
