// decorador de clase
function repository(): ClassDecorator {
    return function (target: Function) {
        const users: string[] = [];
        target.prototype.users = users;
        target.prototype.save = (user: string): void => {
            target.prototype.users.push(user);
        }

        target.prototype.delete = (index: number): void => {
            const users: string[] = [...target.prototype.users];
            users.splice(index, 1);
            target.prototype.users = [...users];
        }

        target.prototype.findByIndex = (index: number): string => {
            const users: string[] = [...target.prototype.users];
            return users[index];
        }

        target.prototype.getAll = (): string[] => {
            return  target.prototype.users;
        }
    }
}

interface UserRepository {
    save(user: string): void ;
    delete(index: number):void;
    findByIndex(index: number): string;
    getAll(): string[];
}

@repository()
class UserRepository {
    maxSize: number;
    dataBaseTable: string;
    constructor(maxSize: number, dataBaseTable: string) {
        this.maxSize = maxSize;
        this.dataBaseTable = dataBaseTable;
    }
}

const userRepository = new UserRepository(100, "users");
userRepository.save("daniel");
userRepository.save("ana");
userRepository.save("pedro");
userRepository.save("luis");
userRepository.save("felipe");
userRepository.delete(0);

console.log(userRepository.findByIndex(2));