import { Car } from './Car';

describe('Car', () => {
  let car: Car;

  beforeEach(() => {
    car = new Car('red', 'Ford', 6.5, 50);
  });

  it('should create a class instance', () => {
    expect(car).toBeInstanceOf(Car);
    expect(car.Color).toEqual('red');
    expect(car.Make).toEqual('Ford');
    expect(car.FuelConsumption).toEqual(6.5);
    expect(car.TankCapacity).toEqual(50);
  });

  it('should partially refuel', () => {
    car.refuel(25);

    expect(car.FuelLevel).toEqual(25);
  });

  it('should refuel to the max value', () => {
    car.refuel(100);

    expect(car.FuelLevel).toEqual(50);
  });

  it('should throw when refueling with a negative value', () => {
    expect(() => car.refuel(-10)).toThrowError(
      new Error('You cannot refuel with a negative value!'),
    );
  });

  describe('Car - drive', () => {
    beforeEach(() => {
      car.refuel(50);
    });

    it('should drive a given distance', () => {
      const distance = car.drive(2);

      expect(distance).toEqual(2);
      expect(car.FuelLevel).toBeCloseTo(50 - 2 * 6.5);
      expect(car.Odometer).toEqual(2);
      expect(car.DailyOdometer).toEqual(2);
    });

    it('should drive max distance', () => {
      const distance = car.drive(10);

      const maxDistance = 50 / 6.5;
      expect(distance).toBeCloseTo(maxDistance);
      expect(car.FuelLevel).toEqual(0);
      expect(car.Odometer).toBeCloseTo(maxDistance);
      expect(car.DailyOdometer).toBeCloseTo(maxDistance);
    });

    it('should overflow odometers', () => {
      let distance = car.drive(10);
      car.refuel(50);
      distance += car.drive(10);
      car.refuel(50);
      distance += car.drive(10);

      const maxDistanceOnOneTank = 50 / 6.5;
      expect(distance).toBeCloseTo(maxDistanceOnOneTank * 3);
      expect(car.FuelLevel).toEqual(0);
      expect(car.Odometer).toBeCloseTo(
        (maxDistanceOnOneTank * 3) % Car.ODOMETER_MAX,
      );
      expect(car.DailyOdometer).toBeCloseTo(
        (maxDistanceOnOneTank * 3) % Car.DAILY_ODOMETER_MAX,
      );
    });
  });

  it('should reset the daily odometer', () => {
    car.refuel(50);
    car.drive(2);

    expect(car.DailyOdometer).toEqual(2);
    expect(car.Odometer).toEqual(2);

    car.resetDailyOdometer();

    expect(car.DailyOdometer).toEqual(0);
    expect(car.Odometer).toEqual(2);
  });
});
