export class Car {
  constructor(
    private color: string,
    private make: string,
    private fuelConsumption: number,
    private tankCapacity: number,
  ) {}

  get Color() {
    return this.color;
  }
  get Make() {
    return this.make;
  }
  get FuelConsumption() {
    return this.fuelConsumption;
  }
  get TankCapacity() {
    return this.tankCapacity;
  }
}
