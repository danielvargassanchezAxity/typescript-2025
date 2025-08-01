class Test {
    value = 0;
    constructor(value: number) {
        this.value = value;
    }
}

export function testIncludes() {
    const data = [109,10,124,155];
    if (data.includes(10)) 
    {
        console.log("Si está en la lista")   
    } else {
        console.log("No está en la lista");
    }
    
    const searchObject = new Test(2);
    const dataObjects = [
        new Test(1),
        new Test(1),
        new Test(2),
        searchObject
    ];

    console.log(dataObjects.includes(searchObject));
}