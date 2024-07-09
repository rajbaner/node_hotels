// var add = function(a,b){
//     return a +b;
// }
// var result = add(2,7);
// console.log(result);
// var add = (a,b) => {return a + b;}
// var result= add(2,3);
// console.log(result);
// var add = (a,b) => a+b;
// var result
// (function(a,b){
//     console.log("Prince");
// })();
// function callback(){
//     console.log("Prince is calling")
// }
// const add=function(a,b,callback){
// var result = a+b;
// console.log("result is" + result);
// callback();
// }
// add(3,4,callback);
// add(2,3,()=>console.log("add completed"))
// var fs = require('fs');
// var os = require('os');
// var user = os.userInfo();
// console.log(user);

// fs.appendFile('greeting.txt','Hi ' + user.username+'!\n',()=>{
//     console.log('file is created');
// }
// );
// const notes = require('./notes.js');
// var _ = require('lodash');
// console.log('server file is available');
// var age =notes.age;
// // console.log(age);
// // console.log(notes.addnumber(age,6));

// var data = ["person","person",1,2,1,2,'name','age','2'];
// var filter = _.uniq(data);
// console.log(filter);
// var os =require('os');
// var fs= require('fs');
// var username = os.userInfo().username;

// fs.appendFile('Username.txt',username,()=>{
//     console.log('file is created')
// })
// const jsonstring ='{"name":"John","age":"24","city":"New York"}';
// const JsonObject =  JSON.parse(jsonstring);
// console.log(JsonObject);
// const normalobj={
//     name:"Alice",
//     age : 25
// };
// const jsonString = JSON.stringify(normalobj);
// console.log(jsonString);
const express = require('express')
const app = express();
const db = require('./db');
const MenuItem = require('./models/Menu')
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const Person = require('./models/Person')

app.get('/',(req,res)=>{
    res.send('It has sent')
})

// app.post('/menu',async(req,res)=>{
// try{
//     const data = req.body;
//     const menuitem = new MenuItem(data);
//     const resp = await MenuItem.save();
//     console.log("Menu item is sent");
//     res.status(200).json(resp)
// }
// catch(err){
//     console.log(err);
//     res.status(500).json({err:"Internal Server Error"});
// }
// })
// app.get('/menuget',async(req,res)=>{
//     try{
//         const data= await MenuItem.find();
//         console.log("Response data fetched");
//     res.status(200).json(data);
    
//     }catch(error){
//         console.log(error);
//         res.status(500).json({error:'Internal Server error'});
//     }
//     });
//     app.post('/saveMenu', async (req, res) => {
//         try {
//             const data = req.body;
//             const newmenu = new MenuItem(data);
//             newmenu.name = data.name;
//             newmenu.price = data.price;
//             newmenu.taste = data.taste;
//             newmenu.is_drink = data.is_drink;
//             newmenu.ingredients = data.ingredients;
//             newmenu.num_sales = data.num_sales;
//             const savedMenu = await newmenu.save();
//             console.log("Data saved successfully");
//             res.status(200).json(savedMenu);
//         } catch (error) {
//             console.log("Error saving data", error);
//             res.status(500).json({ error: 'Internal server error' });
//         }
//     });
    
// const menudata = req.body;
// const newmenu = new MenuItem(menudata);
// newmenu.name=data.name;
// newmenu.price=data.price;
// newmenu.taste=data.taste;
// newmenu.is_drink=data.is_drink;
// newmenu.ingredients=data.ingredients;
// newmenu.num_sales=data.num_sales;
// newmenu.save((error,savedMenu)=>{
//     if(error){
//         console.log("Error saving data",error);
//         res.status(500).json({error:'Internal server error'})
//     }
//     else{
//         console.log("data saved successfully");
//         res.status(200).json({savedMenu});
//     }
// })

// // app.get('/', function (req, res) {
// //   res.send('Hello World')
// // })
// app.post('/person',async(req,res)=>{
//     try{
// const data = req.body;
// const newPerson =new Person(data);
// const response =await newPerson.save();
// console.log("Response data saved");
// res.status(200).json(response)
//     }catch(err){
// console.log(err);
// res.status(500).json(express.response);

//     }
// })

// app.get('/person',async(req,res)=>{
// try{
//     const data= await Person.find();
//     console.log("Response data fetched");
// res.status(200).json(data);

// }catch(error){
//     console.log(error);
//     res.status(500).json({error:'Internal Server error'});
// }
// })
// const data = req.body;
// const newperson = new Person(data);
// newperson.name=data.name;
// newperson.age=data.age;
// newperson.work=data.work;
// newperson.mobile=data.mobile;
// newperson.email=data.email;
// newperson.salary=data.salary;
// newperson.address=data.address;
// newperson.save((error,savedPerson)=>{
//     if(error){
//         console.log("Error saving data",error);
//         res.status(500).json({error:'Internal server error'})
//     }
//     else{
//         console.log("data saved successfully");
//         res.status(200).json({savedPerson});
//     }
// })
app.get('/', function (req, res) {
    res.send('Hello World');
  });
  
 const personroutes = require('./routes/personRoutes');
 const menuroutes = require('./routes/menuRoutes');
 app.use('/menu',menuroutes);
 app.use('/person',personroutes);
 const PORT = process.env.PORT||3000;
 
// })
// app.get('/chicken',function(req,res){
//     res.send('Sure Sir,I would like the chicken')
// })
// app.get('/idli',function(req,res){
//     var customizeidli ={
//         name:'rava idli',
//         size:"10cm",
//         is_sambhar:true,
//         is_coco_chutney:false
//     }
//     res.send(customizeidli)
// })

app.listen(3000,()=>{
    console.log("Wlcome,it is running")
})