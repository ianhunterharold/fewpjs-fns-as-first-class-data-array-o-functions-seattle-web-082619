
function wakeDog(dogName,dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
}

function leashDog(dogName,dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
}

function walkToPark(dogName,dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
}

function throwFrisbee(dogName,dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}

function walkHome(dogName,dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
}

function unleashDog(dogName,dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
}


let routine = [wakeDog,leashDog,throwFrisbee,walkHome,walkHome,unleashDog];


function dailyRoutine(array){ 
  for (let i =0; i <array.length; i++){
    array[i]("Sunny","shep");
  }
}
dailyRoutine(routine);
// solution does not push values into an array

function dailyRoutineTakeTwo(dogName,dogBreed){
routine.map(fntion=>fntion(dogName,dogBreed));
}


