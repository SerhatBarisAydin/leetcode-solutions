function numWaterBottles(numBottles: number, numExchange: number): number {
    // remain: bottles left after exchanging
    // nextFilled: bottles gained from exchanging
    // count: total bottles drunk
    let remain: number = 0
    let nextFilled: number = 0
    let count: number = numBottles  // initially, you drink all given bottles

    do {
        // if bottles are fewer than exchange requirement, you cannot exchange anymore
        if (numBottles < numExchange) {
            return count
        }

        // remainder bottles after exchanging
        remain = numBottles % numExchange

        // number of new bottles you get from exchanging
        nextFilled = (numBottles - remain) / numExchange

        // update available bottles: newly filled + leftover ones
        numBottles = nextFilled + remain

        // add the newly obtained full bottles to total count
        count += nextFilled
    } while (nextFilled != 0) // continue until no new bottles can be filled

    return count
};

// Example: with 9 bottles and exchange rate 3
// You can drink 13 bottles in total
console.log(numWaterBottles(9, 3)) // 13
