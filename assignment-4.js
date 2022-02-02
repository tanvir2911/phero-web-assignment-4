// Problem number 1


function seerToMon(seer) {
    // error handle starts
    if (typeof seer != 'number') {
    return 'Please enter a number';
    }
    else {
    if (seer < 0) {
    return 'Please enter a positive number';
    }
    // error handle ends
    else {
    const mon = seer / 40;
    return mon;
    }
    }
    }
    const seerToMonCalculation = seerToMon(80);
    console.log(seerToMonCalculation);


    
    // Problem number 2
    function totalSales(numOfShirts, numOfPants, numOfShoes) {
    // error handle starts
    if (typeof numOfShirts != 'number' || typeof numOfPants != 'number' || typeof numOfShoes != 'number') {
    return 'Please enter a number';
    }
    else {
    if (numOfShirts < 0 || numOfPants < 0 || numOfShoes < 0) {
    return 'Please enter a positive number';
    }
    // error handle ends
    else {
    const pricePerShirt = 100;
    const pricePerPant = 200;
    const pricePerShoe = 500;
    const totalPriceOfShirts = pricePerShirt * numOfShirts;
    const totalPriceOfPants = pricePerPant * numOfPants;
    const totalPriceOfShoes = pricePerShoe * numOfShoes;
    const totalPrice = totalPriceOfShirts + totalPriceOfPants + totalPriceOfShoes;
    return totalPrice;
    }
    }
    }
    const totalMoneySpent = totalSales(5, 8, 2);
    console.log(totalMoneySpent);
    
    
    // Problem number 3
    function deliveryCost(numberOfTshirts) {
    let totalDeliveryCost = 0;
    const deliveryChargePerTshirtUpto100Items = 100;
    const deliveryChargePerTshirt100To200Items = 80;
    const deliveryChargePerTshirtBeyond200Items = 50;
    // error handle starts
    if (typeof numberOfTshirts != 'number') {
    return 'Please enter a valid number';
    }
    if (numberOfTshirts < 0) {
    return 'please enter a positive number';
    }
    // error handle ends
    if (numberOfTshirts <= 100) {
    totalDeliveryCost += numberOfTshirts * deliveryChargePerTshirtUpto100Items;
    return totalDeliveryCost;
    }
    else {
    totalDeliveryCost += deliveryChargePerTshirtUpto100Items * 100;
    }
    if (numberOfTshirts > 100 && numberOfTshirts <= 200) {
    totalDeliveryCost += (numberOfTshirts - 100) * deliveryChargePerTshirt100To200Items;
    }
    else {
    totalDeliveryCost += 100 * deliveryChargePerTshirt100To200Items;
    }
    if (numberOfTshirts > 200) {
    totalDeliveryCost += (numberOfTshirts - 200) * deliveryChargePerTshirtBeyond200Items;
    }
    return totalDeliveryCost;
    }
    const totalDeliveryCharge = deliveryCost(150);
    console.log(totalDeliveryCharge);
    
    
    // problem number 4
    function perfectFriend(friends) {
    let friendsNot5Letters = [];
    // error handle starts
    if (typeof friends != 'object') {
    return 'Please enter an array';
    }
    // error handle ends
    for (const friend of friends) {
    if (friend.length == 5) {
    return friend;
    }
    else {
    friendsNot5Letters.push(friend);
    }
    }
    return friendsNot5Letters;
    }
    const friends = ['Robiul', 'Tanvir', 'Shohag', 'Rabbi', 'Nibir'];
    const friendOf5Letters = perfectFriend(friends);
    console.log(friendOf5Letters);