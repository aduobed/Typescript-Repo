//Using interfaces
//Functions can be expressed inside an interface 
interface Vehicle  {
  name: string;
  year: number;
  buyDate: Date;
  broken: boolean;
  vehicleSummary(): string
}

const oldCorolla = {
  name: 'corolla',
  year: 2000,
  buyDate: new Date(),
  broken: false,
  vehicleSummary(): string {
    return `Name is ${this.name}`
  }
}

const printVehicleDetails = (vehicle: Vehicle) => {
  console.log(`Vehicle Name : ${vehicle.name}`);
  console.log(`Vehicle Year : ${vehicle.year}`);
  console.log(`Vehicle Broken ? : ${vehicle.broken}`);
  vehicle.vehicleSummary();
}


printVehicleDetails(oldCorolla);