export function testMap() {
    const user: { id: number, name: string}[] = [
        {id: 1, name: "daniel"},
        {id: 2, name: "julia"},
        {id: 3, name: "bernardo"},
    ];

    const request = user.map(x => {
        return {
            fullName: x.name,
            identifier: x.id,
        }
    })

    // console.log(request);
    const numbersList = [1,2,3,4,5,6,7,9,10];
    console.log(numbersList.map(x => x*2));
}