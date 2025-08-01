export function testReduce() {
    const products = [
        {
            id: 10,
            name: "Laptop",
            quantity: 2,
            price: 120.50
        },
        {
            id: 4,
            name: "Mouse",
            quantity: 1,
            price: 10
        },
        {
            id: 20,
            name: "Monitor Gamer",
            quantity: 3,
            price: 200
        },
    ];

    const total = products.reduce((total, currentObject) => total.concat(currentObject.name), "");
    console.log(total);
}