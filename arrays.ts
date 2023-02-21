const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()]

//Two dimensional array
const carsByMake = [['ford', 'corolla',  'camaro']]

const car = carMakers[0];

carMakers.map((car: string): string => {
  return car.toLowerCase();
})