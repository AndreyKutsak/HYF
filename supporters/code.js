// class Animal {
//     constructor(props) {
//         this.name = props.name;
//         this.age = props.age;
//         this.hasHeart = props.hasHeart;
//     }
//     voice() {
//         console.log("AUUUUFFF")
//     }
// };

// const animal = new Animal({
//     name: "Tvinki",
//     age: 22,
//     hasHeart: true,
// })




// console.log(animal.voice());


// function isNegativeZero(n) {
//     // let a = n.toString().split("");
// //  if ( Object.is(n) === -0 ) {
// //     return true;
// //  } else {
// //     return false;

// // return +a
// return Object.is(n, -0); 
// }

// console.log(isNegativeZero(0));


function betterThanAverage(classPoints, yourPoints) {
    let result = classPoints.reduce((sum, current) => sum + current, yourPoints);
    let result2 = result / classPoints.length +1;
    if(result2 < yourPoints){
    return true;
    } else {
    return false;
    }
  }
  console.log(betterThanAverage([2, 3], 5))