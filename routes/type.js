const { Router } = require("express");
const {getType} = require("../utils/pokeAPI")

const type = Router();

type.get("/:name", async (req, res, next) => {
  try{
    const typeArray = await getType(req.params.name);
    res.send(typeArray);
  }
  catch (error){
    next(error)
  }
});

module.exports = type;
