const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');


router.post('/', async (req, res) => {
    try {
      const data = req.body;
      const newPerson = new Person({
        name: data.name,
        age: data.age,
        work: data.work,
        mobile: data.mobile,
        email: data.email,
        salary: data.salary,
        address: data.address
      });
      const response = await newPerson.save();
      console.log("Response data saved");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  router.get('/', async (req, res) => {
    try {
      const data = await Person.find();
      console.log("Response data fetched");
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  router.get('/:worktype', async(req,res)=>{try{
    const worktype = req.params.worktype;
    if(worktype=='chef'||worktype=='waiter'||worktype=='manager'){
        const response = await Person.find({work:worktype});
        console.log('Fetched');
        res.status(200).json(response);
    }
else{
    res.status(404).json({error:'Invalid work type'})
}}catch(error){
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  router.put('/:id',async (req,res)=>{
    try{
const id = req.params.id;
const updatedPersonData = req.body;
const response = await Person.findByIdAndUpdate(id,updatedPersonData,{
    new:true,
    runValidators:true,
});
if(!response){
    return res.status(404).json({error:"person not found"});
}
console.log("data updated");
res.status(200).json(response);

    }catch(error){console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });}
  })

  router.delete('/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const response = await Person.findByIdAndDelete(id);
        if(!response){
            return res.status(404).json({error:"Person not Found"});
        }
        console.log("data deleted");
        res.status(200).json({message:"person deleted"})
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"Internal Error"})
    }
  })
  module.exports= router;