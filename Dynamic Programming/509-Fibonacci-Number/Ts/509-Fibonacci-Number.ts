function fib(n: number): number {
    // Create an array to store Fibonacci values
    // (size = n+1 because we want to include index n)
    let fib: number[] = [n + 1]

    // Base cases
    fib[0] = 0   // F(0) = 0
    fib[1] = 1   // F(1) = 1
    fib[2] = 1   // F(2) = 1

    // If input is 1 or 2, return 1 directly
    if(n === 1 || n === 2){
        return 1
    }

    // If input is 0, return 0
    if(n === 0){
        return 0
    }

    // Use bottom-up approach (dynamic programming)
    // Start calculating from F(3) up to F(n)
    for(let i = 3; i < n + 1; i++){
        // F(i) = F(i-1) + F(i-2)
        fib[i] = fib[i-1] + fib[i-2]

        // When we reach n, return the result
        if(n === i){
            return fib[i]
        }
    }
};

// Example test cases
console.log(fib(4))    // Output: 3
console.log(fib(1000)) // Output: a very large number
console.log(fib(0))    // Output: 0