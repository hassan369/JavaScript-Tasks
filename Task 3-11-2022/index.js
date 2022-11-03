let mark =90;
if(mark<0 || mark>100){
    document.write('invaild mark')
} else if (mark<50){
    document.write("FAIL")
} else if (mark >= 50 && mark <=  59){
    document.write("D")
} else if (mark >= 60 && mark <=  69){
    document.write("C")
} else if (mark >= 70 && mark <=  79){
    document.write("B")
} else if (mark >= 80 && mark <=  89){
    document.write("A")
} else {
    document.write("A+")
}



const pie = 3.14;
const circleArea = pie ** 2;
document.write( circleArea);