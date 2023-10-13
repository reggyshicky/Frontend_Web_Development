//Get an Average of an array
//used floor() thst Returns the largest integer less than or equal to a number.
function GetArrayAverage (marks) {
    let sum = 0;
    for (i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
    }
    let avg = sum / marks.length;
    rounded_avg = Math.floor(avg);
    return rounded_avg 
}
console.log(GetArrayAverage([3,3,6,]))