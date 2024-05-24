import { UserRepository } from "./user.repository.js";
import { User } from "./user.entity.js";
const repository = new UserRepository();
function santizeUserInput(req, res, next) {
    req.body.santizedInput = {
        name: req.body.name,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        cp: req.body.cp,
        email: req.body.email
    };
    next();
}
function findAll(req, res) {
    res.json({ data: repository.findAll() });
}
function findOne(req, res) {
    const id = req.params.id;
    const user = repository.findOne({ id });
    if (!user) {
        res.status(404).send({ message: 'User not found' });
    }
    res.json({ data: user });
}
function add(req, res) {
    const input = req.body.santizedInput;
    const userInput = new User(input.name, input.address, input.phoneNumber, input.cp, input.email);
    const user = repository.add(userInput);
    res.status(201).send({ message: 'Usuario creado', data: user });
}
function update(req, res) {
    req.body.santizedInput.id = req.params.id;
    const user = repository.update(req.body.santizedInput);
    if (!user) {
        res.status(404).send({ message: 'User not found' });
    }
    res.status(200).send({ message: 'Usuario actualizado', data: user });
}
function remove(req, res) {
    const id = req.params.id;
    const user = repository.delete({ id });
    if (!user) {
        res.status(404).send({ message: 'Usuario no encontrado' });
    }
    else {
        res.status(200).send({ message: 'Usuario borrado exitosamente' });
    }
}
export { santizeUserInput, findAll, findOne, add, update, remove };
//# sourceMappingURL=user.controler.js.map