import { User } from "./user.entity.js";
const users = [
    new User('Francisco Buthet', 'Montevideo 749', '3416834800', '2000', 'franciscobuthet@gmail.com'),
    new User('Alejo Passe', 'Pellegrini y Francia', '3476651208', '2000', 'passealejo@gmail.com')
];
export class UserRepository {
    findAll() {
        return users;
    }
    findOne(item) {
        return users.find((user) => user.id === item.id);
    }
    add(item) {
        users.push(item);
        return item;
    }
    update(item) {
        const userIDx = users.findIndex(user => user.id === item.id);
        if (userIDx !== -1) {
            users[userIDx] = { ...users[userIDx], ...item };
        }
        return users[userIDx];
    }
    delete(item) {
        const userIDx = users.findIndex((user) => user.id === item.id);
        if (userIDx !== -1) {
            const deletedUsers = users[userIDx];
            users.splice(userIDx, 1);
            return deletedUsers;
        }
    }
}
//# sourceMappingURL=user.repository.js.map