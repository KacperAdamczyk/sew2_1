import { Car } from './Car';

describe('Car', () => {
  it('should create a class instance', () => {
    const car = new Car('red', 'Ford', 6.5, 50);

    expect(car).toBeInstanceOf(Car);
    expect(car.Color).toEqual('red');
    expect(car.Make).toEqual('Ford');
    expect(car.FuelConsumption).toEqual(6.5);
    expect(car.TankCapacity).toEqual(50);
  });
});
