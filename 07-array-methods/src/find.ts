export function testFind() {
    const users = [
        {
            id: 1,
            isActive: false,
            name: "alex"
        },
        {
            id: 2,
            isActive: false,
            name: "daniel"
        }
    ];

    const userWithId = users.find(x => !x.isActive);
    console.log(userWithId);
}