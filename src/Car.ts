export class Car {
  private fuelLevel = 0;

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
  get Fuel() {
    return this.fuelLevel;
  }

  refuel(amount: number): void {
    if (amount < 0) {
      throw new Error('You cannot refuel with a negative value!');
    }

    this.fuelLevel = Math.min(amount, this.tankCapacity);
  }
}
