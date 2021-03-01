function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;
    const format = new Intl.NumberFormat("enUS",
        {
            style: "currency", currency: "USD",
            minimumFractionDigits: 2
        }).format;
    for (let perf of invoice.performances) {

        let thisAmount = amountFor(perf, plays[perf.playID])
        
        // add volume credits
        volumeCredits += Math.max(perf.audience - 30, 0);
        // add extra credit for every ten comedy attendees
    }
}

function amountFor(aPerfomance,play){
    let result = 0
    switch (play.type) {
        case "tragedy":
            result = 40000;
            if (aPerfomance.audience > 30) {
                result += 1000 * (aPerfomance.audience - 30);
            }
            break;
        case "comedy":
            result = 30000;
            if (aPerfomance.audience > 20) {
                result += 10000 + 500 * (aPerfomance.audience - 20)
                ;
            }
            result += 300 * aPerfomance.audience;
            break;
        default:
            throw new Error(`unknown type: ${play.type}`);

    }
    return result
}

let invocices = {
    "customer": "BigCo",
        "performances": [
            {
                "playID": "hamlet",
                "audience": 55
            }
        ]
    }

let plays = {
    "hamlet": {"name": "Hamlet", "type": "tragedy"},
    "as­like": {"name": "As You Like It", "type": "comedy"},
    "othello": {"name": "Othello", "type": "tragedy"}
    }
    