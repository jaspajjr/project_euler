// find the sum of all the multiples of 3 or 5 below 1000
//
var upperLim = 1000

// to do this we need to iterate over every integer between 0 and 100, and check
// if it is a multiple of 3 or 5

function sumMultiplesN(N){
  var numsToCheck = [3, 5];  
  var multipleArray = numsToCheck.reduce(function(all, item, index) {
    // this assumes that cos I think that it's in a closure it should know the 
    // value of N
    // console.log('N:', N);
    // check if every item between 0 and N is a multiple of the item
    // for the moment I will do this by using a loop as i can iterate that 
    // between 0 and N, once I can create an array approprately, then I can 
    // use reduce rather than a loop
    for(i = 0; i < N; i++){
      if(i % item == 0){
        // if it is an item then addition
        all.push(i);
      };
    }
    // make sure that values are unique
  return all;
  }, []);
  // now that we have an array of unique multiples lower than N we just need to
  // sum them
  var multipleArraySet = Array.from(new Set(multipleArray))
  console.log(multipleArraySet)
  answer = multipleArraySet.reduce((a, b) => a + b, 0);
  return answer
}

// Call the function 
var answer =  sumMultiplesN(upperLim)
console.log(answer)
