let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let groceriesCopy = groceries;

groceries["totalPrice"] = "35$"
groceries["payed"] = false;

console.log(groceriesCopy);
console.log(groceries);

// Both will change.