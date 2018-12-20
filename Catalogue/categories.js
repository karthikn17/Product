//Categor List
var categories = [
{
	"id":1,
	"category":"Electronics",
	"product":"Mobile Phone"
	
},
{
	"id":2,
	"category":"Electrical",
	"product":"Motor"
	
},
{
	"id":3,
	"category":"Electronics",
	"product":"Light"
	
},
{
	"id":4,
	"category":"Electrical",
	"product":"Transformer"
	
},
{
	"id":5,
	"category":"Electronics",
	"product":"Monitor"
	
}
];
class catg{
    fetchAll(){
        return categories;
    }
    fetchById(category){
        return categories.find(c => c.category == category);
    }
    addCategory(category){
        categories.push(category);
        return categories;
    }
}

module.exports = catg;