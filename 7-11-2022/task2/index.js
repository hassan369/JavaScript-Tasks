let largest;
function largestNumber(a,b){
    
    if (a>b) largest = a;
    else largest = b;
    document.write("the two numbers are: " + a + " and " + b + " and the largest number is "+ largest);
}
largestNumber(-10,-20);