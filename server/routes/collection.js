const { Router } = require("express");

const collection = Router();
const myCollection = []

collection.get("/", (req, res) => {
  res.send(myCollection);

});

collection.post("/catch", (req, res)=>{
  const {body} = req;
  myCollection.push(body)
  res.send({success: true})
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
  res.send({success: true})

})

module.exports = collection;
