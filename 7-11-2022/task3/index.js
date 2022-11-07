let shortestLength = 100;
let shortestValue ;

function shorterInArray(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i].length < shortestLength){
            shortestLength = arr[i].length;
            shortestValue = arr[i];
        }
    }
    document.write(shortestValue);
}

shorterInArray(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]);