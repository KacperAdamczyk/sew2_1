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
});
