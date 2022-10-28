
    let euroToJPY= 127.9; // japan yen
    let euroToUSD = 1.2; // us dollar
    let euroToGBP= 0.8; // british pound

function fromDollarToYen(dollar){
    let dollarAsEuro = dollar/euroToUSD;
    let finalYen = dollarAsEuro*euroToJPY;
    return Math.floor(finalYen);
}

function fromEuroToDollar(euro){
    let finalDollar = euro*euroToUSD;
    return finalDollar;
}
function fromYenToPound(yen){
    let yenAsEuro = yen/euroToJPY;
    let finalPound = yenAsEuro*euroToGBP;
    return finalPound;
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { fromDollarToYen,fromEuroToDollar,fromYenToPound };