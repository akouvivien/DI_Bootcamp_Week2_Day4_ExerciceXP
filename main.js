// 🌟 Exercise 1 : Information
// Instructions
// Part I : function with no parameters

// // Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.
function infoAboutMe( ) {
    console.log("je me nomme AKOU JEAN VIVIEN mon age est de 27 ans , mon loisir est le developpemen WEB")
}

infoAboutMe()




// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log("je me nomme " + personName + ", j'ai " + personAge+ " ans, ma couleur preferer est "+personFavoriteColor);
} 
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")




// ***************🌟 Exercise 2 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// Inside the function, use prompt to ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.

function calculateTip() {
   let montant= prompt("quelle est le montant de votre facure")
   Mfacture=parseInt(montant)
   if (Mfacture< 50) {
    pourboire = 0.2* Mfacture
    console.log("la facture est de " +( Mfacture+pourboire))
   } else if ( Mfacture <= 200  && Mfacture>= 50) {
    pourboire = 0.15* Mfacture
    console.log("la facture est de " +( Mfacture+pourboire))
    
   } else if ( Mfacture > 200 ) {
    pourboire = 0.1* Mfacture
    console.log("la facture est de " +( Mfacture+pourboire))
   }
    
}
calculateTip()


// 🌟 Exercise 3 : Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313
som = 0
function isDivisible() {
    for (let i = 0; i < 500; i++) {
       if (i % 23 == 0){
        console.log(i)
        som = som+i
       
       }
       
    }
    console.log("la somme est "+som)
}

isDivisible()
// Bonus: Add a parameter divisor to the function.
som = 0
function isDivisible(divisor) {
    for (let i = 0; i < 500; i++) {
       if (i % divisor == 0){
        console.log(" nombre divisible par "+divisor+", :"+i)
        som = som+i
       
       }
       
    }
    console.log("la somme est "+som)
}

isDivisible(3)


// 🌟 Exercise 4 : Shopping List
// Instructions
// Add the stock and prices objects to your js file.
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 


// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.


function myBill() {
    const shoppingList =["banana","orange","apple"]
for (const elements of shoppingList) {
const QStock = stock[elements] 
const Price = prices[elements]
        if (QStock > 0 ){
            console.log("le prix de l'article" + elements+ " est ,"+QStock)
        }else {console.log("nous n'avons pas"+elements+", en stock")}
  
 }
}

myBill()

// Exercice 5 : Qu'y A-T-Il Dans Mon Portefeuille ?
// Des Instructions
// Remarque : Lire l'illustration (point 4), tout en lisant les instructions

function changeEnough(itemPrice, amountOfChange) {
    
    
}

// **********🌟 Exercise 6 : Vacations Costs**********
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.




function hotelCost() {

    do {
        let nombre = prompt(" entrez le nombre de nuits")
        let  value = parseInt(nombre)
        price =  140 *value
    } while (!typeof(1));
    return price
} 
hotelCost()

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

function planeRideCost() {

    do {
        let texte = prompt(" londres = 138$ ; pAris 220$ et autre 300$ ")
       minius =texte.toLowerCase() 
        if (minius == "londres") {
            value = 183
        } else  if (minius == "paris") {
            value = 220
            
        } else value = 300
    } while (!typeof("1"));
    return value
    
}
planeRideCost()


// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

function rentalCarCost() {

    do {
        let Jlocation = prompt(" combien de jours souhaitez vous avoir un vehicule ")
        let  location = parseInt(Jlocation)
        if (location> 0 && location<= 10) {
            reduction = 40 * 0.05
            value = location *40 + reduction 
           
        } else value = location *40
 
    } while (!typeof("1"));
    return value

}
// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
// rentalCarCost()

function totalVacationCost() {
    value= "l' hotel coute "+hotelCost()+"$  le billets d'avions coute "+planeRideCost()+"$  la voiture coute"+rentalCarCost()
    console.log(value)
}
// Call the function totalVacationCost()
totalVacationCost()