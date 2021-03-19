const { Router } = require("express");

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
  const idToDelete = Number(req.params.id);
  const index = myCollection.findIndex((pokemon)=>{
    return pokemon.id === idToDelete;
  })
  if(index === -1){
    throw "the pokemon isn't in your collection"
  }
  myCollection.splice(index, 1);
  res.status(204).send({success: true});

})

module.exports = collection;
