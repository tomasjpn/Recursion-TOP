//Iteration

const Fibonacci = (input) => {

    //base case:
    if (input < 0) return [];
    if (input === 1) return [0];

    const fibsArr = [0, 1];

    for (let i = 2; i < input; i++){
        fibsArr.push(fibsArr[i - 1] + fibsArr[i - 2]);
    }

    return fibsArr;
}

//console.log(Fibonacci(8));


//Rekursion
const FibonacciRec = (input) =>{

    //base case: 
    if (input <= 0) return [];
    if (input === 1) return [0];
    if (input === 2) return [0, 1];

    /*
    FibonacciRec(5) ruft FibonacciRec(4) auf.
    FibonacciRec(4) ruft FibonacciRec(3) auf.
    FibonacciRec(3) ruft FibonacciRec(2) auf.
    FibonacciRec(2) gibt [0, 1] zurück.
 */
    const prevFibs = FibonacciRec(input -1);

    // FibonacciRec(3) -> nextFib = 1 (letzte Zahl in prevFibs) + 0 (vorletzte Zahl in prevFibs) = 1 
    // FibonacciRec(4) -> nextFib = 1 (letzte Zahl in prevFibs) + 1 (vorletzte Zahl in prevFibs) = 2 
    // FibonacciRec(5) -> nextFib = 2 (letzte Zahl in prevFibs) + 1 (vorletzte Zahl in prevFibs) = 3 
    const nextFib = prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length -2];

    // gibt [0, 1, 1] zurück
    // gibt [0, 1, 1, 2] zurück
    // gibt [0, 1, 1, 2, 3] zurück
    return [...prevFibs, nextFib];


}

console.log(FibonacciRec(8));

