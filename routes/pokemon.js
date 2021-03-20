const { Router } = require("express");
const {getPokemon} = require("../utils/pokeAPI")

const pokemon = Router();

pokemon.get("/:name", async (req, res, next) => {
  try {
    const pokemon = await getPokemon(req.params.name);
    res.send(pokemon);
  } catch (error) {
    next(error)
  }
});

module.exports = pokemon;
