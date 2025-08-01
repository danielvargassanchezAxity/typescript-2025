// decorador de metodo
function confirmDelete(message: string): MethodDecorator {
    return function (target: object, key: string | symbol, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            if (window.confirm(message)) {
                originalMethod.apply(this, args);
            }

            return null;
        }
    }
}

class UI {
    @confirmDelete("¿Estás seguro que quieres eliminar?")
    removeElement(element: HTMLElement): void {
        element.remove();
    }
}


const users: string[] = [
    "usuario 1 test",
    "usuario 2 test",
    "usuario 3 test",
    "usuario 4 test",
    "usuario 5 test",
    "usuario 6 test",
]

const ui = new UI();
const ul = document.createElement("ul");

users.forEach(user => {
    const li = document.createElement("li");
    li.addEventListener("click", () => {
        ui.removeElement(li);
    });

    li.textContent = user;
    ul.appendChild(li);
});

setTimeout(() => {
    document.body.appendChild(ul);
}, 1000)
