const userInputString = prompt(
    "Please enter your choice of flavors",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
    
  );

  const stringArray = userInputString.split(",");

  const iceCream = {
    vanilla: 3,
    strawberry: 1,
    coffee: 2,
}

let arr = [iceCream];
console.log(arr);



console.table(iceCream);
