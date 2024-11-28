/**
* syntax:
* variable refvaribale = {
*   "key": value
*}
**/
//Ex:
var laptop={
    'brand':"HP",
    'price':49999,
    'color':"Silver",
}
console.log(laptop);
console.log(typeof laptop);


//Ex-2:
var laptop={
    'brand':"HP",
    'price':49999,
    'color':"Silver",
    'brand':"DELL"
}
console.log(laptop);

//ACCESSING KEY-VALUE THROUGH DOT(.) NOTATION
var laptop={
    'brand':"DELL",
    'price':49999,
    'color':"Silver"
}
console.log(laptop);
console.log(laptop.brand);

//ACCESSING KEY-VALUE THROUGH SQUARE[] NOTATION
var laptop={
    'brand':"DELL",
    'price':49999,
    'color':"Silver"
}
console.log(laptop);
console.log(laptop["brand"]);


//ACCESSING KEY-VALUE THROUGH SQUARE[] NOTATION AND BRACKETT NOTATIONS
var laptop={
    'brand':"DELL",
    'price':49999,
    'color':"Silver",
    "isAvaliable":true,
    'functionality': {
        'ram':"8GB",
        'rom':"512GB",
        'backlit':true
    }
}
console.log(laptop);
console.log(laptop['functionality'].ram);
console.log(laptop.functionality["ram"]);


//CRUD OPERATIONS
//CREATE
laptop.weight="1.70Kgs"
console.log(laptop);

//UPDATE
laptop["functionality"].ram = "16GB";
console.log(laptop);

//DELETE
delete laptop.weight;
console.log(laptop);
