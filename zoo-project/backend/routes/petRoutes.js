const express = require("express");
const router = express.Router();
const Pet = require("../models/Anim");

router.get("/", async (req, res) => {
  const pets=await Pet.find();
  res.json(pets);
   // TODO 1: Fetch all animals from the database
    // Hint: In const named pets, store all documents that you get using find()
    // Ex: const XXXX = await XXX.XXXX();
    //code here

    // TODO 2: Send the list of animals in pets as JSON response
    // Hint: use res.json(...)
     // code here

     //once done : 
     // check by http://localhost:5000/anims , you should one object of a dog named dusty
     //check http://localhost:3000 you should see one card on dusty
});

router.post("/", async (req, res) => {
  const pet=new Pet(req.body);
  await pet.save();
  res.json(pet);
  // TODO 4: Create a new animal by creating a new Pet using req.body 
    // Hint: const pet = new ...(...);
     //code here

    // TODO 5: Save the new animal to database, use save on pet
    // Hint: await ..... 
    //code here

    // TODO 6: Send the saved animal as JSON response
    // res.json(pet);
});

router.put("/:id", async (req, res) => {
  const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(pet);
});

router.delete("/:id", async (req, res) => {
  await Pet.findByIdAndDelete(req.params.id);
  res.json({ message: "Pet removed" });
});

module.exports = router;
