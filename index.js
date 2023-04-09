// code your solution here
const record = [
    { year: "2015", result: "N/A"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //{ year: "2012", result: "W"}
  ]

//const recordCopy = Array.from(record);

//recordCopy.shift()

function superbowlWin(array) {
    for (const outcome of array) {
        if (outcome.result === "W") {
            return outcome.year;
        } 
    }

} 


console.log(superbowlWin(record))
//console.log(superbowlWin(recordCopy))

//console.log(recordCopy)
 
 
 
 
 