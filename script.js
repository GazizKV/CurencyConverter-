const input = require("sync-input");

let keyValuePair = {
    "USD": 1,
    "JPY": 113.5,
    "EUR": 0.89,
    "RUB": 74.36,
    "GBP": 0.75
}

console.log("Welcome to Currency Converter!");
console.log(`1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`);

while (true) {
    console.log("What do you want to do?");

    let inputFromConsole = input("1-Convert currencies 2-Exit program\n");

    if (String(inputFromConsole) !== "1" && String(inputFromConsole) !== "2") {
        console.log("Unknown input");
    } else if (String(inputFromConsole) === "2") {
        console.log("Have a nice day!");
        return;
    } else if (String(inputFromConsole) === "1") {
        while (true) {
            console.log("What do you want to convert?");
            let currencyFrom = input("From: ").toUpperCase();
            if (!Object.keys(keyValuePair).includes(currencyFrom)) {
                console.log(`Unknown currency`);
            } else {
                let currencyTo = input("To: ").toUpperCase();
                if (!Object.keys(keyValuePair).includes(currencyTo)) {
                    console.log(`Unknown currency`);
                } else {
                    let amount = input("Amount: ");

                    if (amount < 1) {
                        console.log("The amount can not be less than 1");
                    } else if (!amount.match(/\d+/g)) {
                        console.log("The amount has to be a number");
                    } else {
                        let amountUSD = (amount / keyValuePair[currencyFrom]);

                        let result = (amountUSD * keyValuePair[currencyTo]).toFixed(4).toString();
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result} ${currencyTo.toUpperCase()}`);
                    }
                }
                break;
            }
        } // include while
    }
} // first while
