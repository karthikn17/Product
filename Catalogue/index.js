const express=require('express');
const server=express();
const catg = require('./categories');
const category_obj = new catg();
const parser=require('body-parser');

server.use(parser.urlencoded({
	extended:false
}));
server.use(parser.json());


server.get('/status',(req,res)=>{
	console.log('Service called');
	res.send('Server is running');
});


//Read without input
server.get('/categories',(req,res)=>{
	const catg=JSON.stringify(category_obj.fetchAll());
	//let catg='test';
	res.send(catg);
});


//Read with input
server.get('/productByCateg/:category',(req,res) => {
	let category =req.params.category;
	let categories = JSON.stringify(category_obj.fetchById(category));
	//if(!categories) return res.statusCode(404).send('The product wasn\'t found');
    //else 
		res.send(categories);
});

//Write or create new product to Electronics Category
server.post('/product/newElectronic',(req,res) =>{
    if(!req.body.product){
        res.statusCode(400),send('Product cannot be empty');
        return;
    }
    const category ={
        id : category_obj.fetchAll().length + 1,
        product : 'Light',
		category: 'Electronics'
    };
    category_obj.addCategory(category);
    const categories =category_obj.fetchAll(); 
    res.send(categories);
});

const port=3001;
server.listen(port,()=>{
	console.log(`Server is running at ${port}`);
}

);
 