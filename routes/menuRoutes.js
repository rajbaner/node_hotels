const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/Menu');

router.post('/',async(req,res)=>{
    try{
    const data = req.body;
    const menu = new MenuItem(data);
    menu.name = data.name;
            menu.price = data.price;
            menu.taste = data.taste;
            menu.is_drink = data.is_drink;
            menu.ingredients = data.ingredients;
            menu.num_sales = data.num_sales;
            const savedMenu = await menu.save();
            console.log("Menu item is sent");
console.log("Menu item is sent");
    res.status(200).json(data)}
    catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
router.get('/', async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log("Response data fetched");
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
router.get('/:tastetype',async (req,res)=>{try{
    const Menuitem = req.params.tastetype;
    if(tastetype=='sweet'|| tastetype=='spicy'||tastetype=='sour'){
        const response = await MenuItem.find({taste:tastetype});
        console.log('Fetched');
        res.status(200).json(response);
    }
    else{res.status(404).json({error:'Invalid work type'});
}}catch(error){
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
})
  module.exports= router;