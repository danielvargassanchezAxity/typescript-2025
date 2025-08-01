export function concat(): void {
    const cars = ["volvo","mercedez","toyota"];
    const newCars = ["KIA", "MG"];

    const numbers = [1,2,3,4];
    const secondNumbers = [102,123];
    numbers.concat(secondNumbers);

    const newList = cars.concat(newCars);
    console.log(newList);
    console.log(cars);
    console.log(newCars);
}