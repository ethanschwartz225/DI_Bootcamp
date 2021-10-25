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
console.log(groceriesCopy);
groceries["totalPrice"] = "35$"
console.log(groceriesCopy);
groceries["payed"] = false;

// You will not see a change in these items.