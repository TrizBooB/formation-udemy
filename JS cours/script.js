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
function multiply(number1, number2, number3)
{
    var result = number1 * number2 * number3;
    return result;
}

var a = 5;
var b = 6;

var resultMultiply = multiply(a, b, a);
console.log(resultMultiply);
console.log(multiply(2,5,1))