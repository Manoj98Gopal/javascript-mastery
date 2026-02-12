// break;
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i > 3) {
    break;
  }
}

// continue;
console.log("continue example");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// break in nested loop
console.log("break the nested loop");
for (let i = 0; i < 10; i++) {
  console.log("outer loop :", i);

  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      break;
    }
    console.log("inner loop", j);
  }
}

// labeled break (exit outer loop)
console.log("labeled break (exit outer loop");
outerLoop: for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 4; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; //it exists both loops
    }
    console.log(`i=${i} j=${j}`);
  }
}

// continue in while loop
console.log("continue in while loop");
let count = 0;

while (count < 6) {
  count++;
  if (count === 3) {
    continue;
  }
  console.log(count);
}



console.log("Example break while searching")
// practice use case search
// using break stop the search when I found
const number = [1,2,3,2,7,5,8,4,6]
const searchFor = 77
let foundIndex = -1

for(let i=0; i< number.length; i++){
    if(number[i] === searchFor){
        foundIndex = i;
        break;
    }
}
console.log(foundIndex != -1 ? `Found at index of ${foundIndex}` : "Not found")




console.log("Example continue while filtering the positive number")
// practice use case filter
// using continue skip the iteration of loop

const mixNumber = [1,-3,-5,-6,3,6,5,4]
const positiveNum = []

for(let i=0; i<mixNumber.length; i++){
    if(mixNumber[i] < 0){
        continue
    }
    positiveNum.push(mixNumber[i])
}
console.log("positive numbers :",positiveNum)