export class Car {
  static readonly ODOMETER_MAX = 20;
  static readonly DAILY_ODOMETER_MAX = 10;

  private fuelLevel = 0;
  private odometer = 0;
  private dailyOdometer = 0;

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
  get FuelLevel() {
    return this.fuelLevel;
  }
  get Odometer() {
    return this.odometer;
  }
  get DailyOdometer() {
    return this.dailyOdometer;
  }

  refuel(amount: number): void {
    if (amount < 0) {
      throw new Error('You cannot refuel with a negative value!');
    }

    this.fuelLevel = Math.min(amount, this.tankCapacity);
  }

  drive(distance: number) {
    const maxDistance = this.tankCapacity / this.fuelConsumption;
    const actuallyDriven = Math.min(distance, maxDistance);

    this.fuelLevel -= actuallyDriven * this.fuelConsumption;

    this.odometer += actuallyDriven;
    this.odometer %= Car.ODOMETER_MAX;
    this.dailyOdometer += actuallyDriven;
    this.dailyOdometer %= Car.DAILY_ODOMETER_MAX;

    return actuallyDriven;
  }
}
