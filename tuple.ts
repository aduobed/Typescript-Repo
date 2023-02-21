// Tuple are array-like structure where each element represents some property of  a record

//This is a typical object structure
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}


//Turn that object into a tuple
const coke: [string, boolean, number] = ['brown', true, 40]

//Using type alias
type Drink = [string, boolean, number]

const fanta: Drink = ["orange", true, 40]