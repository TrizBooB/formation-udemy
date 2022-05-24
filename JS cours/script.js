// JS operateur
/* var x = 12;
var y;
y = 5;
var result = ++x;

console.log(result);


var num = 1;
num += 2;

console.log(num);
*/

// JS Bool & Compare
/*
var x = 5;
var y = 12;
var myBool = x > 3 || y < 10;

console.log(myBool);
console.log("-----------------------------");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log("-----------------------------");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log("-----------------------------");
console.log(!true);
console.log(!false);
*/

// JS Conditions
/*
var x = 16;

if (x>10)
{
    if (x>15)
    {
        console.log("très bien");
    }
    else {
        console.log("bien");
    }
}
else if (x<10)
{
    console.log("Pas bien");
}
else
{
    console.log("bof...")
}

var myColor = "yellow";

switch(myColor)
{
    case "blue":
        console.log("I love blue too (Bluetooth ^^)");
        break;
    case "red":
        console.log("RED dead RED");
        break;
    case "purple":
        console.log("The lovely one, you rock dude ;)");
        break;
    case "yellow":
    case "pink":
        console.log("Argh.. I don't like it..");
        break;
    default:
        console.log("I don't know this color..");
}
*/

// JS BOUCLE
/*
var number = 1;
while(number<=3)
{
    console.log(number);
    number++;
}

number = 1
do
{
    console.log(number);
    number++;
}
while (number<=3)


for(var x = 1; x <= 10; x++)
{
    console.log(x);
}
*/

// JS FUNCTION
/*
function multiply(number1, number2, number3)
{
    var resultMult = number1 * number2 * number3;
    return result;
}

var a = 5;
var b = 6;

var resultMultiply = multiply(a, b, a);
console.log(resultMultiply);
console.log(multiply(2,5,1))
*/

// JS Array
/*
var fruits = ["pomme", "poire", "ananas", "banane"];

console.log(fruits.length);
console.log(fruits);
console.log(fruits[0]);
console.log("------------------");

for(var x = 0; x < fruits.length; x++)
{
    console.log(fruits[x]);
}
console.log("------------------");

fruits.push("kiwi");
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(fruits.slice(2,4));

console.log("------------------");
var myArray = [[1,2],[3,7],[4,5,6]];

console.log(myArray[1][1]);
*/

// JS Object
/*
var dog = {
    nom: "Choupette",
    couleur: "blanc",
    age: 4
};

console.log(dog);
console.log(dog.age);
console.log(dog["nom"]);
console.log("------------------");

for(var property in dog)
{
    console.log(dog[property]);
}
console.log("------------------");

var dog2 = new Object();
dog2.nom = "Kiki";
dog2.couleur = "Noir";
dog2.age = 8;

console.log(dog2);
console.log("------------------");

var dog3 = new Object();
dog2.nom = "Marley";
dog2.couleur = "Beige";
dog2.age = 5;
dog3.aboie = function(number){
    for(var i=1; i<=number; i++)
    {
        console.log(i.toString() + " Wouaf !");
    }
};

console.log(dog3.aboie(3));
console.log("------------------");
*/

// JS constructeur
function Dog(nom, couleur, age)
{
    this.nom = nom;
    this.couleur = couleur;
    this.age = age;

    this.aboie = function()
    {
        console.log(this.nom + ": Wouaf !");
    }
}

var petitCaniche = new Dog("Choupette", "white", 4);
var grosPitBull = new Dog("Rex", "black", 2);

console.log(petitCaniche);
console.log(grosPitBull);
petitCaniche.aboie();