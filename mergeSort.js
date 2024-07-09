const mergeSort = (inputArr) => {
    
    /*
    base case: Wenn nur noch ein Array mit einer bzw. keiner Zahl übrig bleibt, dann wird das Array zurückgegeben.
    --> Da MergeSort dann aufhört, wenn das Array vollständig geteilt ist, in einzelne Arrays mit einer Zahl.
    */
    if (inputArr.length <= 1){
        return inputArr;
    } else {
        // Die Mitte des Arrays wird herausgefunden
        const half = Math.ceil(inputArr.length /2);

        // Kopie von linken und rechten Hälfte
        const firstHalf = inputArr.slice(0, half);
        const secondHalf = inputArr.slice(half);

        // Rekursives Aufteilen der Arrays, bis zum Array mit einer Zahl
        const sortedFirstHalf = mergeSort(firstHalf);
        const sortedSecondHalf = mergeSort(secondHalf);

        // Zusammenführen der beiden Arrays
        return merge (sortedFirstHalf, sortedSecondHalf)
    }
    
}

const merge = (arr1, arr2) => {
    // Beispiel: arr1 = [1, 3, 5] arr2 = [2, 4, 6]
    let result = [];

    // Indexzeiger für die Arrays
    let i = 0;
    let j = 0;

    // Vergleich der Elementen aus Arr1 und Arr2 und Sortierung nach Größe von klein nach groß

    /*
    Erste Iteration:

    i = 0, j = 0
    arr1[i] = 1, arr2[j] = 2
    1 < 2, daher result.push(arr1[i]) und i++
    result = [1], i = 1, j = 0

    Zweite Iteration:

    i = 1, j = 0
    arr1[i] = 3, arr2[j] = 2
    3 > 2, daher result.push(arr2[j]) und j++
    result = [1, 2], i = 1, j = 1

    Dritte Iteration:

    i = 1, j = 1
    arr1[i] = 3, arr2[j] = 4
    3 < 4, daher result.push(arr1[i]) und i++
    result = [1, 2, 3], i = 2, j = 1

    Vierte Iteration:

    i = 2, j = 1
    arr1[i] = 5, arr2[j] = 4
    5 > 4, daher result.push(arr2[j]) und j++
    result = [1, 2, 3, 4], i = 2, j = 2

    Fünfte Iteration:

    i = 2, j = 2
    arr1[i] = 5, arr2[j] = 6
    5 < 6, daher result.push(arr1[i]) und i++
    result = [1, 2, 3, 4, 5], i = 3, j = 2

    */
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;

        }
    }

    
    // Verbleibende Elemente aus arr1 erden in result eingeben

    /*
        Da i bereits 3 ist und arr1.length auch 3 ist, wird diese Schleife nicht ausgeführt.
    */
    while (i < arr1.length){
        result.push(arr1[i]);
        i++;
    }


    // Verbleibende Elemente aus arr2 erden in result eingeben

    /*
        Erste und einzige Iteration:
        j = 2, arr2.length = 3
        result.push(arr2[j]) und j++
        result = [1, 2, 3, 4, 5, 6], j = 3

        Die Schleife endet hier, weil j = 3 und j < arr2.length nicht mehr erfüllt ist (da arr2.length = 3).
    */
    while (j < arr2.length){
        result.push(arr2[j]);
        j++;
    }

    return result;
}


let testArr = [3, 2, 1, 13, 8, 5, 0, 1];
let testArr2 = [105, 79, 100, 110];
console.log(mergeSort(testArr)); 
console.log(mergeSort(testArr2)); 