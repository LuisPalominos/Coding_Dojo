const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

class Usuario {
    constructor() {
        this.userId= faker.string.uuid();
        this.firstname= faker.person.firstName();
        this.lastname= faker.person.lastName();
        this.phonenumber= faker.phone.number();
        this.email= faker.internet.email();
        this.password= faker.internet.password()
    }
}
class Empresa {
    constructor() {
        this.userId= faker.string.uuid();
        this.companyname= faker.company.name();
        this.direction={
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipcode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
}


app.get("/api/users/new", (req, res) => {
    res.json({ message: new Usuario() });
});
app.get("/api/companies/new", (req, res) => {
    res.json({ message: new Empresa() });
});
app.get("/api/users/companies", (req, res) => {
    res.json({ message1: new Empresa(), message2: new Usuario() });
});
app.listen( port, () => console.log(`Listening on port: ${port}`) );


